# writing-lint

`writing-lint` is an APM hook package that runs textlint after Claude Code or Codex changes a Markdown file.

## Design

The hook runs on `PostToolUse`. Its harness-neutral definition only starts the TypeScript runner; the runner handles payload differences between Claude Code and Codex.

The runner extracts changed paths from the hook payload and lints only existing `*.md` files. When the payload has no usable path, it falls back to Git's changed and untracked files. It does not lint `*.mdx` files or rewrite files with `textlint --fix`.

The runner uses only Node.js standard-library APIs and invokes textlint as a CLI. It resolves the package's own configuration, so a target project's textlint configuration does not affect the result. Lint diagnostics preserve textlint's nonzero exit status; runtime failures, such as a missing setup or configuration, return a distinct error status.

## Runtime

The runtime requires Node.js 22.18 or later. `runtime/package-lock.json` pins textlint and its rule presets. Run `runtime/setup.ts` in each deployed hook bundle to install those runtime dependencies. The setup script installs only runtime dependencies; Vitest is used only for package tests.

```text
.apm/hooks/markdown-lint.json  Hook definition
runtime/markdown-lint.ts       Payload handling and textlint invocation
runtime/textlint/              Package-owned textlint configuration
runtime/setup.ts               Deployed runtime setup
```

## Development

Run the package tests from the repository root:

```sh
mise run test
```

Run static type checks with:

```sh
mise run typecheck
```
