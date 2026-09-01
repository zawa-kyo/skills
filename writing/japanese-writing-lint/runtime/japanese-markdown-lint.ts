import { accessSync, constants, existsSync, statSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, isAbsolute, resolve } from "node:path";
import process from "node:process";

/** A JSON object accepted from a hook payload. */
type JsonRecord = Record<string, unknown>;

/** The outcome of invoking textlint. */
export type LintResult =
  | {
      /** Identifies a successful textlint run. */
      kind: "success";
      /** The successful process exit status. */
      status: 0;
    }
  | {
      /** Identifies diagnostics reported by textlint. */
      kind: "lint-error";
      /** The nonzero textlint exit status. */
      status: number;
    }
  | {
      /** Identifies a failure to prepare or run textlint. */
      kind: "runtime-error";
      /** A user-facing explanation of the runtime failure. */
      message: string;
    };

/** Payload property names that can contain one changed-file path. */
const FILE_KEYS = ["file_path", "filePath", "path"] as const;
/** Payload property names that can contain one or more changed-file paths. */
const FILE_LIST_KEYS = ["files", "changed_files", "changedFiles"] as const;
/** Nested hook payload properties inspected for changed-file paths. */
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

/**
 * Returns whether a value is a non-array JSON object.
 *
 * @param value - Value read from the hook payload.
 * @returns Whether `value` can be accessed as a JSON object.
 */
function isRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Adds a nonempty string value to a path collection.
 *
 * @param value - Potential path value.
 * @param paths - Collection to mutate when `value` is a path.
 * @returns Nothing.
 */
function addPath(value: unknown, paths: string[]): void {
  if (typeof value === "string" && value.length > 0) {
    paths.push(value);
  }
}

/**
 * Recursively collects paths from recognized payload fields and arrays.
 *
 * @param value - Payload fragment to inspect.
 * @param paths - Collection to mutate with discovered paths.
 * @returns Nothing.
 */
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

/**
 * Extracts paths declared by an `apply_patch` patch.
 *
 * @param value - Potential patch text.
 * @param paths - Collection to mutate with paths declared by the patch.
 * @returns Nothing.
 */
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

/**
 * Extracts unique paths from the documented Claude Code and Codex tool payload fields.
 *
 * @param input - Raw hook payload.
 * @returns Unique changed-file paths in discovery order.
 */
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

/**
 * Returns the payload's working directory or the current directory when absent.
 *
 * @param input - Raw hook payload.
 * @returns The working directory used to resolve relative paths.
 */
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

/**
 * Returns whether a path has the supported `.md` extension.
 *
 * @param filePath - Path to inspect.
 * @returns Whether the path is a Markdown file supported by this hook.
 */
export function isMarkdown(filePath: string): boolean {
  return filePath.toLowerCase().endsWith(".md");
}

/**
 * Resolves, filters, and deduplicates existing Markdown files.
 *
 * @param files - Candidate paths from a hook payload or Git.
 * @param cwd - Directory used to resolve relative paths.
 * @returns Absolute paths to existing Markdown files.
 */
function existingMarkdownFiles(files: string[], cwd: string): string[] {
  const normalized = files
    .filter(isMarkdown)
    .map((file) => (isAbsolute(file) ? file : resolve(cwd, file)))
    .filter((file) => existsSync(file))
    .filter((file) => statSync(file).isFile());

  return [...new Set(normalized)];
}

/**
 * Returns staged, unstaged, and untracked Git paths when a hook payload has no usable path.
 *
 * @param cwd - Repository directory in which to run Git.
 * @returns Unique repository-relative paths, or an empty array when Git fails.
 */
export function getGitDiffFiles(cwd: string): string[] {
  const unstaged = spawnSync(
    "git",
    ["diff", "--name-only", "--diff-filter=ACMR"],
    {
      cwd,
      encoding: "utf8",
    },
  );
  const staged = spawnSync(
    "git",
    ["diff", "--cached", "--name-only", "--diff-filter=ACMR"],
    {
      cwd,
      encoding: "utf8",
    },
  );
  const untracked = spawnSync(
    "git",
    ["ls-files", "--others", "--exclude-standard"],
    {
      cwd,
      encoding: "utf8",
    },
  );

  if (
    unstaged.error ||
    unstaged.status !== 0 ||
    staged.error ||
    staged.status !== 0 ||
    untracked.error ||
    untracked.status !== 0
  ) {
    return [];
  }

  return [
    ...new Set(
      `${unstaged.stdout}\n${staged.stdout}\n${untracked.stdout}`
        .split("\n")
        .filter(Boolean),
    ),
  ];
}

/**
 * Returns the deployed plugin root, allowing an explicit environment override.
 *
 * @returns The runtime directory that contains the hook package.
 */
function pluginRoot(): string {
  return (
    process.env.MARKDOWN_LINT_PLUGIN_ROOT ??
    dirname(fileURLToPath(import.meta.url))
  );
}

/**
 * Returns the package-local textlint executable when it is installed and executable.
 *
 * @param root - Runtime directory containing `node_modules`.
 * @returns The executable path, or `undefined` when it is unavailable.
 */
function executable(root: string): string | undefined {
  const local = resolve(root, "node_modules/.bin/textlint");

  try {
    accessSync(local, constants.X_OK);
    return local;
  } catch {
    return undefined;
  }
}

/**
 * Classifies textlint process output as success, diagnostics, or a runtime failure.
 *
 * @param status - Exit status reported by the textlint process.
 * @param stdout - Standard output emitted by textlint.
 * @param stderr - Standard error emitted by textlint.
 * @returns The classified textlint outcome.
 */
export function classifyTextlintExit(
  status: number | null,
  stdout: string,
  stderr: string,
): LintResult {
  if (status === 0) {
    return { kind: "success", status: 0 };
  }

  if (status === null) {
    return {
      kind: "runtime-error",
      message: "[japanese-markdown-lint] textlint was terminated by a signal.",
    };
  }

  if (stdout.trim().length === 0 && stderr.trim().length > 0) {
    return {
      kind: "runtime-error",
      message: `[japanese-markdown-lint] textlint failed: ${stderr.trim()}`,
    };
  }

  return { kind: "lint-error", status };
}

/**
 * Runs textlint with the package configuration for the supplied Markdown files.
 *
 * @param files - Absolute Markdown paths to lint.
 * @param cwd - Directory in which textlint runs.
 * @param root - Runtime directory containing configuration and dependencies.
 * @returns The classified textlint outcome.
 */
export function runTextlint(
  files: string[],
  cwd: string,
  root = pluginRoot(),
): LintResult {
  const config = resolve(root, "textlint/.textlintrc.json");
  if (!existsSync(config)) {
    return {
      kind: "runtime-error",
      message: `[japanese-markdown-lint] textlint config was not found: ${config}`,
    };
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
          "[japanese-markdown-lint] textlint executable was not found. Run the deployed runtime/setup.ts script before using this hook.",
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
      message: `[japanese-markdown-lint] could not start textlint: ${result.error.message}`,
    };
  }

  const lintResult = classifyTextlintExit(
    result.status,
    result.stdout,
    result.stderr,
  );
  if (lintResult.kind === "lint-error") {
    process.stderr.write(result.stdout);
    process.stderr.write(result.stderr);
  }

  return lintResult;
}

/**
 * Reads and parses the JSON payload written to the hook's standard input.
 *
 * @returns The parsed payload, or an empty object when standard input is empty.
 */
async function readHookInput(): Promise<unknown> {
  let raw = "";
  for await (const chunk of process.stdin) {
    raw += chunk;
  }

  return raw.trim().length === 0 ? {} : JSON.parse(raw);
}

/**
 * Executes the hook and returns the exit status expected by the harness.
 *
 * @returns Zero for success or skipped input, or two for lint violations and runtime failures.
 */
export async function main(): Promise<number> {
  let input: unknown;
  try {
    input = await readHookInput();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`[japanese-markdown-lint] ignoring invalid hook payload: ${message}`);
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

  return result.kind === "lint-error" ? 2 : result.status;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  process.exitCode = await main();
}
