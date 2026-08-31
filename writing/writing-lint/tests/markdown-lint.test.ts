import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import {
  classifyTextlintExit,
  extractChangedFiles,
  extractCwd,
  getGitDiffFiles,
  isMarkdown,
  runTextlint,
} from "../runtime/markdown-lint.ts";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function runHook(filePath: string) {
  return spawnSync(process.execPath, ["runtime/markdown-lint.ts"], {
    cwd: packageRoot,
    encoding: "utf8",
    input: JSON.stringify({ cwd: packageRoot, tool_input: { file_path: filePath } }),
  });
}

test("extracts Claude Code file paths from tool input and response", () => {
  const files = extractChangedFiles({
    cwd: "/work",
    tool_input: { file_path: "README.md" },
    tool_response: { filePath: "README-ja.md" },
  });

  assert.deepEqual(files, ["README.md", "README-ja.md"]);
});

test("extracts Codex-style path lists and removes duplicates", () => {
  const files = extractChangedFiles({
    toolInput: {
      changedFiles: ["docs/design.md", { path: "docs/design.md" }, "package.json"],
    },
  });

  assert.deepEqual(files, ["docs/design.md", "package.json"]);
});

test("extracts paths from apply_patch input", () => {
  const files = extractChangedFiles({
    tool_input: {
      patch: "*** Update File: docs/guide.md\n@@\n*** Add File: notes.md\n",
    },
  });

  assert.deepEqual(files, ["docs/guide.md", "notes.md"]);
});

test("extracts the destination of an apply_patch move", () => {
  const files = extractChangedFiles({
    tool_input: {
      patch: "*** Update File: docs/old.md\n*** Move to: docs/new.md\n",
    },
  });

  assert.deepEqual(files, ["docs/old.md", "docs/new.md"]);
});

test("uses the payload cwd and recognizes only Markdown files", () => {
  assert.equal(extractCwd({ cwd: "/work" }), "/work");
  assert.equal(isMarkdown("README.MD"), true);
  assert.equal(isMarkdown("README.mdx"), false);
});

test("reports a missing textlint config as a runtime error", () => {
  const result = runTextlint(["README.md"], process.cwd(), "/tmp/markdown-lint-without-config");

  assert.deepEqual(result, {
    kind: "runtime-error",
    message: "[markdown-lint] textlint config was not found: /tmp/markdown-lint-without-config/textlint/.textlintrc.json",
  });
});

test("distinguishes textlint runtime failures from lint diagnostics", () => {
  assert.deepEqual(classifyTextlintExit(1, "", "ConfigurationError"), {
    kind: "runtime-error",
    message: "[markdown-lint] textlint failed: ConfigurationError",
  });
  assert.deepEqual(classifyTextlintExit(1, "README.md:1:1 error", ""), {
    kind: "lint-error",
    status: 1,
  });
});

test("includes untracked files in the Git fallback", () => {
  const repository = mkdtempSync(resolve(tmpdir(), "markdown-lint-git-"));

  try {
    spawnSync("git", ["init", "--quiet"], { cwd: repository });
    mkdirSync(resolve(repository, "docs"));
    writeFileSync(resolve(repository, "docs/new.md"), "# New\n");

    assert.deepEqual(getGitDiffFiles(repository), ["docs/new.md"]);
  } finally {
    rmSync(repository, { force: true, recursive: true });
  }
});

test("runs textlint for Markdown changes and returns diagnostics", () => {
  const valid = runHook("tests/fixtures/valid.md");
  const invalid = runHook("tests/fixtures/invalid.md");

  assert.equal(valid.status, 0);
  assert.equal(invalid.status, 1);
  assert.match(invalid.stdout, /ja-technical-writing\/no-mix-dearu-desumasu/);
});
