import { spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { expect, it } from "vitest";

import {
  classifyTextlintExit,
  extractChangedFiles,
  extractCwd,
  getGitDiffFiles,
  isMarkdown,
  runTextlint,
} from "../runtime/japanese-markdown-lint.ts";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function runHook(filePath: string) {
  return spawnSync(process.execPath, ["runtime/japanese-markdown-lint.ts"], {
    cwd: packageRoot,
    encoding: "utf8",
    input: JSON.stringify({ cwd: packageRoot, tool_input: { file_path: filePath } }),
  });
}

it("extracts Claude Code file paths from tool input and response", () => {
  const files = extractChangedFiles({
    cwd: "/work",
    tool_input: { file_path: "README.md" },
    tool_response: { filePath: "README-ja.md" },
  });

  expect(files).toEqual(["README.md", "README-ja.md"]);
});

it("extracts Codex-style path lists and removes duplicates", () => {
  const files = extractChangedFiles({
    toolInput: {
      changedFiles: ["docs/design.md", { path: "docs/design.md" }, "package.json"],
    },
  });

  expect(files).toEqual(["docs/design.md", "package.json"]);
});

it("extracts paths from apply_patch input", () => {
  const files = extractChangedFiles({
    tool_input: {
      patch: "*** Update File: docs/guide.md\n@@\n*** Add File: notes.md\n",
    },
  });

  expect(files).toEqual(["docs/guide.md", "notes.md"]);
});

it("extracts the destination of an apply_patch move", () => {
  const files = extractChangedFiles({
    tool_input: {
      patch: "*** Update File: docs/old.md\n*** Move to: docs/new.md\n",
    },
  });

  expect(files).toEqual(["docs/old.md", "docs/new.md"]);
});

it("uses the payload cwd and recognizes only Markdown files", () => {
  expect(extractCwd({ cwd: "/work" })).toBe("/work");
  expect(isMarkdown("README.MD")).toBe(true);
  expect(isMarkdown("README.mdx")).toBe(false);
});

it("reports a missing textlint config as a runtime error", () => {
  const result = runTextlint(["README.md"], process.cwd(), "/tmp/japanese-markdown-lint-without-config");

  expect(result).toEqual({
    kind: "runtime-error",
    message: "[japanese-markdown-lint] textlint config was not found: /tmp/japanese-markdown-lint-without-config/textlint/.textlintrc.json",
  });
});

it("distinguishes textlint runtime failures from lint diagnostics", () => {
  expect(classifyTextlintExit(1, "", "ConfigurationError")).toEqual({
    kind: "runtime-error",
    message: "[japanese-markdown-lint] textlint failed: ConfigurationError",
  });
  expect(classifyTextlintExit(1, "README.md:1:1 error", "")).toEqual({
    kind: "lint-error",
    status: 1,
  });
});

it("includes staged and untracked files in the Git fallback", () => {
  const repository = mkdtempSync(resolve(tmpdir(), "japanese-markdown-lint-git-"));

  try {
    spawnSync("git", ["init", "--quiet"], { cwd: repository });
    mkdirSync(resolve(repository, "docs"));
    writeFileSync(resolve(repository, "docs/staged.md"), "# Staged\n");
    writeFileSync(resolve(repository, "docs/new.md"), "# New\n");
    spawnSync("git", ["add", "docs/staged.md"], { cwd: repository });

    expect(getGitDiffFiles(repository)).toEqual([
      "docs/staged.md",
      "docs/new.md",
    ]);
  } finally {
    rmSync(repository, { force: true, recursive: true });
  }
});

it("runs textlint for Markdown changes and returns diagnostics", () => {
  const valid = runHook("tests/fixtures/valid.md");
  const dearu = runHook("tests/fixtures/dearu.md");
  const invalid = runHook("tests/fixtures/invalid.md");
  const validSpacing = runHook("tests/fixtures/valid-spacing.md");
  const invalidSpacing = runHook("tests/fixtures/invalid-spacing.md");

  expect(valid.status).toBe(0);
  expect(dearu.status).toBe(0);
  expect(invalid.status).toBe(2);
  expect(invalid.stderr).toMatch(/ja-technical-writing\/no-mix-dearu-desumasu/);
  expect(validSpacing.status).toBe(0);
  expect(invalidSpacing.status).toBe(2);
  expect(invalidSpacing.stderr).toMatch(/ja-space-between-half-and-full-width/);
  expect(invalidSpacing.stderr).toMatch(/ja-space-around-link/);
  expect(invalidSpacing.stderr).toMatch(/ja-space-around-code/);
});
