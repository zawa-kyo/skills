# japanese-writing-lint

`japanese-writing-lint` is an APM hook package that runs Japanese textlint checks after Claude Code or Codex changes a Markdown file.

## Design

The hook runs on `PostToolUse`. Its harness-neutral definition only starts the TypeScript runner; the runner handles payload differences between Claude Code and Codex.

The runner extracts changed paths from the hook payload and lints only existing `*.md` files. When the payload has no usable path, it falls back to Git's changed and untracked files. It does not lint `*.mdx` files or rewrite files with `textlint --fix`.

The runner uses only Node.js standard-library APIs and invokes textlint as a CLI. It resolves the package's own configuration, so a target project's textlint configuration does not affect the result. Lint diagnostics preserve textlint's nonzero exit status; runtime failures, such as a missing setup or configuration, return a distinct error status.

## Rules

The hook keeps the four AI-pattern rules from `@textlint-ja/preset-ai-writing` and reports only actual mixing of `です・ます調` and `である調`. It also requires spaces between Japanese text and half-width letters, as in `API で Node.js を使う`.

It disables broad technical-writing rules for sentence length, commas, punctuation, and number style because they produced pervasive, context-dependent findings across this repository.

`ai-tech-writing-guideline` is excluded from the hook. Although the preset configures it as `info`, the rule reports regular textlint errors, so it would still block a hook run. Use it separately when reviewing a document for optional writing suggestions.

## Runtime

The runtime requires Node.js 22.18 or later. `runtime/package-lock.json` pins textlint and its rule presets. Run `runtime/setup.ts` in each deployed hook bundle to install those runtime dependencies. The setup script installs only runtime dependencies; Vitest is used only for package tests.

```text
.apm/hooks/japanese-markdown-lint.json  Hook definition
runtime/japanese-markdown-lint.ts       Payload handling and textlint invocation
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
