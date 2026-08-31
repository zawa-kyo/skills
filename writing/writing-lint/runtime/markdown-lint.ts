import { accessSync, constants, existsSync, statSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, isAbsolute, resolve } from "node:path";
import process from "node:process";

type JsonRecord = Record<string, unknown>;

export type LintResult =
  | { kind: "success"; status: 0 }
  | { kind: "lint-error"; status: number }
  | { kind: "runtime-error"; message: string };

const FILE_KEYS = ["file_path", "filePath", "path"] as const;
const FILE_LIST_KEYS = ["files", "changed_files", "changedFiles"] as const;
const NESTED_PAYLOAD_KEYS = [
  "tool_input",
  "toolInput",
  "tool_response",
  "toolResponse",
  "tool_result",
  "toolResult",
  "result",
  "arguments",
  "params",
] as const;

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function addPath(value: unknown, paths: string[]): void {
  if (typeof value === "string" && value.length > 0) {
    paths.push(value);
  }
}

function collectPaths(value: unknown, paths: string[]): void {
  if (typeof value === "string") {
    addPath(value, paths);
    return;
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      collectPaths(item, paths);
    }
    return;
  }

  if (!isRecord(value)) {
    return;
  }

  for (const key of FILE_KEYS) {
    addPath(value[key], paths);
  }

  for (const key of FILE_LIST_KEYS) {
    collectPaths(value[key], paths);
  }
}

function collectPatchPaths(value: unknown, paths: string[]): void {
  if (typeof value !== "string") {
    return;
  }

  for (const match of value.matchAll(/^\*\*\* (?:Update|Add) File: (.+)$/gm)) {
    addPath(match[1], paths);
  }

  for (const match of value.matchAll(/^\*\*\* Move to: (.+)$/gm)) {
    addPath(match[1], paths);
  }
}

/** Extract paths from the documented Claude Code and Codex tool payload fields. */
export function extractChangedFiles(input: unknown): string[] {
  if (!isRecord(input)) {
    return [];
  }

  const paths: string[] = [];
  collectPaths(input, paths);

  for (const key of NESTED_PAYLOAD_KEYS) {
    const payload = input[key];
    collectPaths(payload, paths);

    if (isRecord(payload)) {
      collectPatchPaths(payload.patch, paths);
    }
  }

  return [...new Set(paths)];
}

export function extractCwd(input: unknown): string {
  if (!isRecord(input)) {
    return process.cwd();
  }

  for (const key of ["cwd", "working_directory", "workingDirectory"]) {
    if (typeof input[key] === "string" && input[key].length > 0) {
      return input[key];
    }
  }

  return process.cwd();
}

export function isMarkdown(filePath: string): boolean {
  return filePath.toLowerCase().endsWith(".md");
}

function existingMarkdownFiles(files: string[], cwd: string): string[] {
  const normalized = files
    .filter(isMarkdown)
    .map((file) => (isAbsolute(file) ? file : resolve(cwd, file)))
    .filter((file) => existsSync(file))
    .filter((file) => statSync(file).isFile());

  return [...new Set(normalized)];
}

/** Fallback only when a harness payload has no usable file path. */
export function getGitDiffFiles(cwd: string): string[] {
  const changed = spawnSync("git", ["diff", "--name-only", "--diff-filter=ACMR"], {
    cwd,
    encoding: "utf8",
  });
  const untracked = spawnSync("git", ["ls-files", "--others", "--exclude-standard"], {
    cwd,
    encoding: "utf8",
  });

  if (changed.error || changed.status !== 0 || untracked.error || untracked.status !== 0) {
    return [];
  }

  return [...new Set(`${changed.stdout}\n${untracked.stdout}`.split("\n").filter(Boolean))];
}

function pluginRoot(): string {
  return process.env.MARKDOWN_LINT_PLUGIN_ROOT ?? dirname(fileURLToPath(import.meta.url));
}

function executable(root: string): string | undefined {
  const local = resolve(root, "node_modules/.bin/textlint");

  try {
    accessSync(local, constants.X_OK);
    return local;
  } catch {
    return undefined;
  }
}

export function classifyTextlintExit(
  status: number | null,
  stdout: string,
  stderr: string,
): LintResult {
  if (status === 0) {
    return { kind: "success", status: 0 };
  }

  if (status === null) {
    return { kind: "runtime-error", message: "[markdown-lint] textlint was terminated by a signal." };
  }

  if (stdout.trim().length === 0 && stderr.trim().length > 0) {
    return { kind: "runtime-error", message: `[markdown-lint] textlint failed: ${stderr.trim()}` };
  }

  return { kind: "lint-error", status };
}

export function runTextlint(files: string[], cwd: string, root = pluginRoot()): LintResult {
  const config = resolve(root, "textlint/.textlintrc.json");
  if (!existsSync(config)) {
    return { kind: "runtime-error", message: `[markdown-lint] textlint config was not found: ${config}` };
  }

  const localExecutable = executable(root);
  if (!localExecutable) {
    const check = spawnSync("npx", ["--no-install", "textlint", "--version"], {
      cwd: root,
      stdio: "ignore",
    });

    if (check.error || check.status !== 0) {
      return {
        kind: "runtime-error",
        message:
          "[markdown-lint] textlint executable was not found. Run the deployed runtime/setup.ts script before using this hook.",
      };
    }
  }

  const command = localExecutable ?? "npx";
  const args = localExecutable
    ? ["--config", config, ...files]
    : ["--no-install", "textlint", "--config", config, ...files];
  const result = spawnSync(command, args, { cwd, encoding: "utf8" });

  if (result.error) {
    return {
      kind: "runtime-error",
      message: `[markdown-lint] could not start textlint: ${result.error.message}`,
    };
  }

  const lintResult = classifyTextlintExit(result.status, result.stdout, result.stderr);
  if (lintResult.kind === "lint-error") {
    process.stdout.write(result.stdout);
    process.stderr.write(result.stderr);
  }

  return lintResult;
}

async function readHookInput(): Promise<unknown> {
  let raw = "";
  for await (const chunk of process.stdin) {
    raw += chunk;
  }

  return raw.trim().length === 0 ? {} : JSON.parse(raw);
}

export async function main(): Promise<number> {
  let input: unknown;
  try {
    input = await readHookInput();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`[markdown-lint] ignoring invalid hook payload: ${message}`);
    return 0;
  }

  const cwd = extractCwd(input);
  const payloadFiles = extractChangedFiles(input);
  const files = existingMarkdownFiles(
    payloadFiles.length > 0 ? payloadFiles : getGitDiffFiles(cwd),
    cwd,
  );

  if (files.length === 0) {
    return 0;
  }

  const result = runTextlint(files, cwd);
  if (result.kind === "runtime-error") {
    console.error(result.message);
    return 2;
  }

  return result.status;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  process.exitCode = await main();
}
