---
name: revise-japanese-writing
description: Review and revise Japanese documentation and comments into fluent, human-readable prose while preserving code identifiers, commands, file paths, configuration keys, product names, and intentional technical terms. Use when the user asks to make Japanese prose more fluent or natural, remove awkward AI-like phrasing, reduce unnecessary English mixing, align Japanese wording across docs, or apply the shared Japanese prose standard referenced by agent instructions.
---

# Revise Japanese Writing

## Overview

Review and improve Japanese prose in technical documents, comments, policies, guides, articles, and explanatory drafts. Preserve technical meaning and the document's argument while making the text fluent for Japanese-speaking maintainers.

Use this skill as the source of truth for detailed Japanese prose style. Agent-level instructions may reference it instead of duplicating rules for tone, notation, terminology, and punctuation.

## Workflow

1. Identify the target text. If no range is specified, inspect the relevant diff or file.
2. Separate prose from literal technical artifacts.
   - Prose: sentences, headings, bullets, explanations, labels.
   - Technical artifacts: command names, file paths, config keys, code identifiers, package names, URLs, examples, and quoted values.
3. Rewrite prose into fluent Japanese while preserving technical artifacts unless explicitly asked to rename them.
4. Keep the repository's existing terminology and tone consistent.
5. Avoid broad rewrites that change the document's structure or intent unless the user asks for a larger edit.
6. For long-form prose, articles, guides, or explanatory drafts, review paragraph structure, argument flow, reader load, and unnecessary staging before making sentence-level changes.
7. After editing, review term choice and search for targeted awkward terms to confirm that the cleanup is complete.

## Prose Guidelines

### Principles

- Think in Japanese when writing Japanese. Avoid drafting in English and translating it into Japanese.
- Japanese particles carry important meaning. Do not omit them except in intentional quotations, labels, or code-like fragments.
- Match the surrounding document's tone, especially polite style and plain style.
- Match established terminology, notation, and symbol usage. Do not mix multiple forms for the same concept.
- Treat style review as defect detection, not aesthetic scoring. Point out concrete risks of ambiguity, inconsistency, translationese, or reader confusion; do not claim to judge beauty, taste, or elegance.

### Preserve Technical Artifacts

Preserve literal technical artifacts:

| Type                           | Examples                                           |
| ------------------------------ | -------------------------------------------------- |
| Commands                       | `mise run install`, `uv run pre-commit run -a`     |
| File paths                     | `docs/index.md`, `.apm/skills`                     |
| Config keys                    | `dependencies`, `interface.default_prompt`         |
| Skill names and package names  | `review-essential-code`, `suggest-commit-messages` |
| Product names and proper nouns | GitHub, Homebrew, Claude Code, Codex               |

### Judgment Criteria

- Do not force Japanese replacements for domain terms that are common in Japanese, lack a clear Japanese equivalent, or would become less precise when translated.
- When several forms are possible, choose the one that reads most naturally in Japanese prose: full Japanese translation, katakana, or the original alphabetic form. Prefer established Japanese usage over literal translation. For example, keep `hexagonal architecture` as `ヘキサゴナルアーキテクチャ`, not `六角形アーキテクチャ`.
- Do not use translationese or coined compounds that Japanese readers do not use. For example, write `重要な用語` instead of `鍵語`, and rewrite a coined noun compound such as `基礎チェック` as `基礎的なチェック`.
- Do not omit the shared head noun from coordinated Japanese terms and make the reader reconstruct it. Write `単体テスト、結合テスト、E2E テスト`, not `単体、結合、E2E の各テスト`.
- Preserve technical terms established by a source, its Japanese edition, or the project glossary even when they look compact. For example, keep established terms such as `共有依存`, `揮発性依存`, and `協力オブジェクト` instead of expanding them merely because they are short.
- For possible calques, test whether the Japanese phrase appears to trace an English idiom, metaphor, or marked construction. If it does, discard the English shape and choose the expression again in Japanese. Do not flag ordinary grammar or established loanwords as calques.
- Use technical terms, loanwords, and abbreviations according to the reader and document purpose. Define or explain abbreviations on first use.
- Preserve the part of speech that the sentence needs. Do not abbreviate English compound terms when shortening would make the meaning or part of speech ambiguous. For example, when referring to the `squash merge` method or a completed merge, use `スカッシュマージ`, `スカッシュマージ済み`, or a clear Japanese phrase instead of `スカッシュ`.

### Prose Noise

- Keep one name for one concept. Do not vary key terms only to avoid repetition, and do not use one vague term for distinct concepts. Remove duplicated information instead of treating repeated key terms as a problem by themselves.
- Avoid empty emphasis and posture words that make prose sound careful without adding information, such as broad claims of importance, depth, comprehensiveness, or significance.
- Treat AI-like surface markers as signals, not mechanical bans. Remove meaningless quotation marks, emoji, grand metaphors, stacked intensifiers, or generic claims when they do not fit the document's purpose.
- Avoid theatrical setup, rhetorical questions, and punch-line contrasts when a direct explanation is enough. Use emphasis only where it clarifies the argument.
- Choose precise subjects and verbs. Do not hide actors behind vague words such as `AI`, `tool`, `system`, or `context` when the document can name the responsible agent, component, or reader role.
- Do not use internal terms such as `正本` without explanation. As a rule, replace them with familiar terms.
- Do not use figurative verbs such as `効く`, `刺さる`, and `回す`.
- Do not use translation-shaped boilerplate such as `これにより`, `〜することが可能です`, and `〜が求められます`.

### Preferred Terms

Prefer fluent Japanese for ordinary prose.

| Source term          | Preferred Japanese                         |
| -------------------- | ------------------------------------------ |
| `repository`         | `リポジトリ`                               |
| `public repository`  | `パブリックリポジトリ` or `公開リポジトリ` |
| `private repository` | `プライベートリポジトリ`                   |
| `skill`              | `スキル`                                   |
| `task`               | `タスク`                                   |
| `shell function`     | `シェル関数`                               |
| `shell script`       | `シェルスクリプト`                         |
| `formatter`          | `フォーマッタ`                             |
| `editor`             | `エディタ`                                 |
| `token`              | `トークン`                                 |
| `user scope`         | `ユーザー単位`                             |
| `project scope`      | `プロジェクト単位`                         |
| `dependency`         | `依存関係`                                 |
| `production code`    | `プロダクションコード`                     |
| `package`            | `パッケージ`                               |
| `tag`                | `タグ`                                     |
| `commit`             | `コミット`                                 |

Keep project-specific preferences when they are established:

- Use `lock ファイル`, not `ロックファイル`, when that is the local convention.
- Use context-specific alternatives such as `管理元`, `置き場所`, `参照先`, `基準`, `まとめるディレクトリ`, or `まとめるファイル`.
- Avoid redundant phrases such as `ポリシー文書` when `ポリシー` is enough.

## Structure Guidelines

Apply these checks when revising long-form prose, articles, guides, or explanations. For short README entries, comments, labels, and policies, use only the checks that fit the surrounding document.

### Paragraphs and Flow

- Keep one paragraph focused on one topic or step in the reasoning. Split paragraphs that mix setup, investigation, result, and evaluation, and make their role and connection to the previous paragraph clear.
- Move the argument in one direction. Handle necessary objections, conditions, or reader doubts before stating the conclusion.
- Keep each sentence interpretable in one way. A long sentence is not automatically unclear, but rewrite it when modifier scope, subject-predicate relation, or omitted subjects make multiple readings plausible.
- When denying or narrowing a claim, write the denied claim clearly and give the reason. Do not rely on vague denials such as "not everything is solved."

### Argument Rigor

- Match claim scope to the evidence. State claims and grounds as connected propositions, and explain the causal mechanism instead of making the reader infer it.
- Distinguish causation from correlation. Make the comparison or classification criterion explicit, and keep distinct decisions, causes, and problem types separate.
- Do not promise detection, guarantees, or resolution without conditions. Preserve uncertainty that the source needs, but remove weak hedging when the text establishes the claim.
- Define central terms before relying on them and use them consistently. Do not return to vague labels such as `AI`, `tool`, or `context` after introducing a more precise term.

### Reader Load

- Manage reader load by omitting incidental names, timestamps, numbers, and implementation details that the reader will not need later.
- Do not interrupt an argument with forward references. Place "later section" notes after the current reasoning has reached a stable point.
- Remove repeated claims and sections that serve the same logical role. Keep one clear statement instead of restating the same point from nearby angles.

## Formatting Guidelines

Follow the surrounding document's format first. For Japanese articles, book-like drafts, and explanatory Markdown without an existing house style, prefer these defaults:

- Use line breaks at sentence or semantic boundaries only when they improve reviewability and do not conflict with the project style; never wrap at an arbitrary character count.
- Put code, diffs, logs, and configuration fragments in fenced code blocks.
- Use footnotes for side notes that would interrupt the main argument.
- Use bold text mainly for first definitions or important logical distinctions; do not use it as decoration.
- Avoid em dashes, double dashes, and box-drawing separators in Japanese prose and headings. Use parentheses, commas, or separate sentences instead.
- Avoid using `・` for ordinary Japanese parallel items unless it is part of a proper noun or established notation.
- Keep headings as one natural phrase. Do not pack a category and topic into a separator-based heading.
- In definition lists, prefer `term: explanation` in English prose and `用語：説明` in Japanese prose, matching the surrounding document language.

## Review Checklist

### General

- Does the result read like documentation a careful Japanese-speaking maintainer would plausibly have written from the outset, with natural Japanese and particles and appropriate loanwords, abbreviations, and technical terms?
- Does it match the surrounding tone, terminology, notation, and punctuation style?

### Terms and Technical Artifacts

- Are translated compounds and English-tracing explanations natural, and are established terms, technical artifacts, proper nouns, and code-like text preserved exactly?
- Are key concepts and repeated terms consistent across edited files, without ambiguous abbreviations, needless synonym rotation, or vague catch-all terms?
- Did any wording change alter the technical meaning?

### Long-Form Prose

- Does each paragraph advance one clear step, with claims, evidence, conditions, comparisons, and causal explanations aligned?
- Does the edit preserve necessary uncertainty, keep distinct causes and decisions separate, and remove empty emphasis, theatrical setup, vague actors, and redundant summaries?
- Do formatting choices follow the local style, with line breaks at sentence or semantic boundaries rather than arbitrary character counts?

## References

Record external ideas incorporated into this skill, such as related skills or web pages, in `references/idea.md`.

## Output

When editing files, keep the final summary concise and mention the main wording categories changed. If no edits are needed, say that the prose is already fluent enough and identify any terms intentionally left unchanged.
