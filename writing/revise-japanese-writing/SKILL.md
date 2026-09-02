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
5. Keep the repository's existing terminology and tone consistent.
6. Avoid broad rewrites that change the document's structure or intent unless the user asks for a larger edit.
7. For long-form prose, articles, guides, or explanatory drafts, review paragraph structure, argument flow, reader load, and unnecessary staging before making sentence-level changes.
8. After editing, manually review term choice for translated compounds, established names, and unnatural literal renderings.
9. After editing, search for the targeted awkward terms to confirm the intended cleanup is complete.

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
- Watch for translationese: compound terms that are understandable but not actually used by Japanese readers, literal renderings of source-language wording, and abstract words chosen only because they map neatly to the source text.
- Before introducing a translated Japanese term, check whether Japanese readers actually use it. Avoid literal coinages such as rendering `key term` as `鍵語` when a plain phrase like `重要な用語` is clearer.
- Also check shortened noun compounds. If a phrase such as `基礎チェック` is understandable but sounds coined or label-like, add the particle or inflection that makes it natural Japanese, such as `基礎的なチェック`.
- Do not omit the shared head noun from coordinated Japanese terms and make the reader reconstruct it. Write `単体テスト、結合テスト、E2E テスト`, not `単体、結合、E2E の各テスト`.
- Preserve technical terms established by a source, its Japanese edition, or the project glossary even when they look compact. For example, keep established terms such as `共有依存`, `揮発性依存`, and `協力オブジェクト` instead of expanding them merely because they are short.
- For possible calques, test whether the Japanese phrase appears to trace an English idiom, metaphor, or marked construction. If it does, discard the English shape and choose the expression again in Japanese. Do not flag ordinary grammar or established loanwords as calques.
- Use technical terms, loanwords, and abbreviations according to the reader and document purpose. Define or explain abbreviations on first use.
- Preserve the part of speech that the sentence needs. Do not abbreviate English compound terms when shortening would make the meaning or part of speech ambiguous. For example, when referring to the `squash merge` method or a completed merge, use `スカッシュマージ`, `スカッシュマージ済み`, or a clear Japanese phrase instead of `スカッシュ`.

### Prose Noise

- Use punctuation, brackets, question marks, exclamation points, and similar symbols consistently within a document, and avoid overusing them.
- Keep one name for one concept. Do not vary key terms only to avoid repetition, and do not use one vague term for distinct concepts. Remove duplicated information instead of treating repeated key terms as a problem by themselves.
- Avoid empty emphasis and posture words that make prose sound careful without adding information, such as broad claims of importance, depth, comprehensiveness, or significance.
- Treat AI-like surface markers as signals, not mechanical bans. Remove meaningless quotation marks, emoji, grand metaphors, stacked intensifiers, or generic claims when they do not fit the document's purpose.
- Avoid theatrical setup, rhetorical questions, and punch-line contrasts when a direct explanation is enough. Use emphasis only where it clarifies the argument.
- Choose precise subjects and verbs. Do not hide actors behind vague words such as `AI`, `tool`, `system`, or `context` when the document can name the responsible agent, component, or reader role.

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
- Avoid overly formal or AI-like words such as `正本` when a plainer term works better.
- Use context-specific alternatives such as `管理元`, `置き場所`, `参照先`, `基準`, `まとめるディレクトリ`, or `まとめるファイル`.
- Avoid redundant phrases such as `ポリシー文書` when `ポリシー` is enough.

## Structure Guidelines

Apply these checks when revising long-form prose, articles, guides, or explanations. For short README entries, comments, labels, and policies, use only the checks that fit the surrounding document.

### Paragraphs and Flow

- Keep one paragraph focused on one topic or step in the reasoning. Split paragraphs that mix setup, investigation, result, and evaluation.
- Make the first sentence of a paragraph show what role the paragraph plays. Use connective expressions when the relationship to the previous paragraph is not obvious.
- Move the argument in one direction. Handle necessary objections, conditions, or reader doubts before stating the conclusion.
- Keep each sentence interpretable in one way. A long sentence is not automatically unclear, but rewrite it when modifier scope, subject-predicate relation, or omitted subjects make multiple readings plausible.
- When denying or narrowing a claim, write the denied claim clearly and give the reason. Do not rely on vague denials such as "not everything is solved."

### Argument Rigor

- Match claim scope to the examples and evidence provided. If the examples support only part of a claim, narrow the claim.
- Keep claims and grounds as separate, connected propositions. A claim without support, a list of facts without a claim, or two unrelated propositions placed side by side does not make a sound argument.
- State causal mechanisms when claiming that one thing causes another. Do not leave the reader to infer why the result follows.
- Distinguish causal claims from correlation. When comparing or decomposing topics, make the comparison dimension or classification criterion explicit enough that the reader can see why the split is valid.
- Avoid promising detection, guarantee, or resolution without conditions. Use conditional wording when the result depends on context.
- Preserve uncertainty when the source text has a reason to be uncertain, such as an unverified possibility, a reader's likely doubt, a character's perception, or a counterfactual. Tighten weak hedging only when the text already proves the claim.
- Do not collapse distinct decisions, causes, or problem types into one vague category. Separate them and explain which example or tool supports which part of the claim.
- Define central terms before relying on them, then keep using those terms consistently. Do not fall back to vague labels such as `AI`, `tool`, or `context` after the text has established a more precise term.

### Reader Load

- Manage reader load by omitting incidental names, timestamps, numbers, and implementation details that the reader will not need later.
- Do not interrupt an argument with forward references. Place "later section" notes after the current reasoning has reached a stable point.
- Remove repeated claims and sections that serve the same logical role. Keep one clear statement instead of restating the same point from nearby angles.

## Formatting Guidelines

Follow the surrounding document's format first. For Japanese articles, book-like drafts, and explanatory Markdown without an existing house style, prefer these defaults:

- Use one sentence per line when it improves reviewability and does not conflict with the project style.
- Do not wrap prose at an arbitrary character count. Break lines only at sentence or semantic boundaries when doing so improves reviewability.
- Put code, diffs, logs, and configuration fragments in fenced code blocks.
- Use footnotes for side notes that would interrupt the main argument.
- Use bold text mainly for first definitions or important logical distinctions; do not use it as decoration.
- Avoid em dashes, double dashes, and box-drawing separators in Japanese prose and headings. Use parentheses, commas, or separate sentences instead.
- Avoid using `・` for ordinary Japanese parallel items unless it is part of a proper noun or established notation.
- Keep headings as one natural phrase. Do not pack a category and topic into a separator-based heading.
- In definition lists, prefer `term: explanation` in English prose and `用語：説明` in Japanese prose, matching the surrounding document language.

## Review Checklist

### General

- Does the result read like documentation a careful Japanese-speaking maintainer would plausibly have written that way from the outset?
- Are unnecessary English words replaced with fluent Japanese?
- Are Japanese particles present where natural Japanese requires them?
- Does the text match the surrounding tone, terminology, notation, and punctuation style?
- Are abbreviations, loanwords, and technical terms appropriate for the reader and document purpose?

### Terms and Technical Artifacts

- Are there any literal translated compounds, English-tracing explanations, or established terms replaced with wording that Japanese readers would find unnatural?
- When multiple forms were possible, was the most natural choice made among Japanese translation, katakana, and the original alphabetic form?
- Are commands, paths, identifiers, config keys, and examples preserved exactly?
- Did any wording change alter the technical meaning?
- Are repeated terms consistent across the edited files?
- Are key concepts named consistently, without unnecessary synonym rotation or one vague term covering multiple concepts?
- Are English compound terms left unabbreviated when shortening them would make the meaning or part of speech ambiguous?
- Did the cleanup avoid replacing proper nouns or code-like text by mistake?

### Long-Form Prose

- For long-form prose, does each paragraph advance one clear step in the argument?
- Are claims, examples, conditions, and causal explanations aligned?
- Are the claim and its grounds both present, meaningfully connected, and scoped to the available evidence?
- Are comparisons, classifications, and causal claims using explicit and appropriate criteria?
- Did the edit preserve necessary uncertainty while removing unsupported hedging?
- Are distinct causes, decisions, and problem types separated instead of being merged into a vague category?
- Did the edit remove empty emphasis, theatrical setup, vague actors, and redundant summary sentences?
- Did formatting choices follow the local document style before applying long-form prose defaults?
- Are prose line breaks at sentence or semantic boundaries rather than arbitrary character counts?

## References

Record external ideas incorporated into this skill, such as related skills or web pages, in `references/idea.md`.

## Output

When editing files, keep the final summary concise and mention the main wording categories changed. If no edits are needed, say that the prose is already fluent enough and identify any terms intentionally left unchanged.
