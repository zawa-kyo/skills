---
name: revise-japanese-writing
description: Review and revise Japanese documentation and comments into fluent, human-readable prose while preserving code identifiers, commands, file paths, configuration keys, product names, and intentional technical terms. Use when the user asks to make Japanese prose more fluent or natural, remove awkward AI-like phrasing, reduce unnecessary English mixing, align Japanese wording across docs, or apply the shared Japanese prose standard referenced by agent instructions.
---

# Revise Japanese Writing

## Overview

Review and improve Japanese prose in technical documents, comments, policies, and guides. The goal is not to translate every technical word mechanically, but to make the text read fluently to a Japanese-speaking maintainer while preserving precise technical meaning.

This skill is the source of truth for detailed Japanese prose style. Agent-level instruction files may reference this skill for Japanese tone, notation, terminology, and punctuation instead of duplicating those rules.

## Workflow

1. Identify the target text from the user request. If no range is specified, inspect the relevant diff or file.
2. Separate prose from literal technical artifacts.
   - Prose: sentences, headings, bullets, explanations, labels.
   - Technical artifacts: command names, file paths, config keys, code identifiers, package names, URLs, examples, and quoted values.
3. Check whether Node.js and `npx` are available with `command -v node` and `command -v npx`.
   - If both are available, run textlint through Node.js with `npx`; do not use the textlint MCP server for this skill.
   - For file targets, use:
     `npx --yes --package textlint --package @textlint-ja/textlint-rule-preset-ai-writing textlint --rule @textlint-ja/preset-ai-writing <target-file>`
   - For prose that is not already in a file, place only the target text in a temporary Markdown file and run the same command against that file.
   - Treat lint findings as input for the rewrite, not as automatic edits. Preserve technical meaning and local terminology even when a lint suggestion is too broad.
   - If Node.js or `npx` is unavailable, tell the user that this lint check requires Node.js and `npx`, and ask them to make those available before running the lint-assisted pass.
4. Rewrite prose into fluent Japanese, reflecting relevant findings from `@textlint-ja/textlint-rule-preset-ai-writing`.
5. Preserve technical artifacts unless the user explicitly asks to rename them.
6. Keep the repository's existing terminology and tone consistent.
7. Avoid broad rewrites that change the document's structure or intent unless the user asks for a larger edit.
8. After editing, search for the targeted awkward terms to confirm the intended cleanup is complete. When `npx` was available, rerun the lint command on the edited target and address any remaining relevant findings.

## Wording Guidelines

- Think in Japanese when writing Japanese. Avoid drafting in English and translating it into Japanese.
- Japanese particles carry important meaning. Do not omit them except in intentional quotations, labels, or code-like fragments.
- Match the surrounding document's tone, especially polite style and plain style.
- Match established terminology, notation, and symbol usage. Do not mix multiple forms for the same concept.
- Do not force Japanese replacements for domain terms that are common in Japanese, lack a clear Japanese equivalent, or would become less precise when translated.
- Use technical terms, loanwords, and abbreviations according to the reader and document purpose. Define or explain abbreviations on first use.
- Use punctuation, brackets, question marks, exclamation points, and similar symbols consistently within a document, and avoid overusing them
- Prefer fluent Japanese for ordinary prose:

| Source term          | Preferred Japanese                                                    |
| -------------------- | --------------------------------------------------------------------- |
| `repository`         | `リポジトリ`                                                          |
| `public repository`  | `パブリックリポジトリ` or `公開リポジトリ`, depending on the sentence |
| `private repository` | `プライベートリポジトリ`                                              |
| `skill`              | `スキル`                                                              |
| `task`               | `タスク`                                                              |
| `shell function`     | `シェル関数`                                                          |
| `shell script`       | `シェルスクリプト`                                                    |
| `formatter`          | `フォーマッタ`                                                        |
| `editor`             | `エディタ`                                                            |
| `token`              | `トークン`                                                            |
| `user scope`         | `ユーザー単位`                                                        |
| `project scope`      | `プロジェクト単位`                                                    |
| `dependency`         | `依存関係`                                                            |
| `package`            | `パッケージ`                                                          |
| `tag`                | `タグ`                                                                |
| `commit`             | `コミット`                                                            |

Keep project-specific preferences when they are established:

- Use `lock ファイル`, not `ロックファイル`, when that is the local convention.
- Avoid overly formal or AI-like words such as `正本` when a plainer term works better.
- Use context-specific alternatives such as `管理元`, `置き場所`, `参照先`, `基準`, `まとめるディレクトリ`, or `まとめるファイル`.
- Avoid redundant phrases such as `ポリシー文書` when `ポリシー` is enough.

Preserve literal technical artifacts:

- Commands: `mise run install`, `uv run pre-commit run -a`
- File paths: `docs/index.md`, `.apm/skills`
- Config keys: `dependencies`, `interface.default_prompt`
- Skill names and package names: `review-essential-code`, `suggest-commit-messages`
- Product names and proper nouns: GitHub, Homebrew, Claude Code, Codex

## Review Checklist

- Does the result read like documentation written by a careful Japanese-speaking maintainer?
- Are unnecessary English words replaced with fluent Japanese?
- Are Japanese particles present where natural Japanese requires them?
- Does the text match the surrounding tone, terminology, notation, and punctuation style?
- Are abbreviations, loanwords, and technical terms appropriate for the reader and document purpose?
- Was `@textlint-ja/textlint-rule-preset-ai-writing` run through `npx` when Node.js was available, without using the textlint MCP server?
- Were relevant lint findings reflected without accepting broad suggestions that would distort the document's intent?
- Are commands, paths, identifiers, config keys, and examples preserved exactly?
- Did any wording change alter the technical meaning?
- Are repeated terms consistent across the edited files?
- Did the cleanup avoid replacing proper nouns or code-like text by mistake?

## Output

When editing files, keep the final summary concise and mention the main wording categories changed. If no edits are needed, say that the prose is already fluent enough and identify any terms intentionally left unchanged.
