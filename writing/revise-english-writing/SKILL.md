---
name: revise-english-writing
description: Revise English documentation, comments, prompts, release notes, and other technical prose so it reads direct, human, and maintainable while preserving commands, paths, identifiers, product names, and technical meaning. Use when the user asks to make English prose more natural, less AI-like, less verbose, clearer, or aligned with an existing project voice.
---

# Revise English Writing

## Overview

Improve English prose in technical documents, comments, prompts, policies, release notes, and guides.
Use `stop-slop` as the baseline anti-AI-writing pass, then apply the additional checks in this skill for English technical prose.
If this skill conflicts with `stop-slop`, follow `stop-slop`.

The goal is clear, specific, human English. Do not turn practical documentation into marketing copy, and do not change technical meaning for style.

## Workflow

1. Identify the target text from the user request. If no range is specified, inspect the relevant diff or file.
2. Separate prose from literal technical artifacts.
   - Prose: sentences, headings, bullets, descriptions, labels, comments, prompts, and explanations.
   - Technical artifacts: commands, file paths, config keys, code identifiers, package names, API names, URLs, examples, quoted values, and product names.
3. Apply `stop-slop` as the baseline anti-AI-writing pass when it is available. Do not duplicate its checklist here.
4. Apply the technical-prose checks in this skill.
5. Preserve technical artifacts unless the user explicitly asks to rename them.
6. Keep the repository's existing terminology, capitalization, and tone consistent.
7. Avoid broad rewrites that change document structure or intent unless the user asks for a larger edit.
8. After editing, search for targeted awkward terms or repeated phrases to confirm the intended cleanup is complete.

## English Technical Prose Guidelines

Prefer direct, specific English:

| Avoid                              | Prefer                                     |
| ---------------------------------- | ------------------------------------------ |
| `utilize`                          | `use`                                      |
| `leverage`                         | `use`, `build on`, or a more specific verb |
| `ensure that`                      | `ensure` or a direct instruction           |
| `in order to`                      | `to`                                       |
| `it is important to note that`     | the point itself                           |
| `seamlessly`, `robustly`, `easily` | a concrete behavior or constraint          |
| `delve into`, `dive into`          | `inspect`, `read`, `analyze`, `review`     |
| `not only X but also Y`            | the specific point, without the set piece  |

Keep technical writing grounded:

- Name the actor when the sentence describes a decision, action, or responsibility.
- Prefer verbs over abstract nouns: `configure the runner`, not `runner configuration is performed`.
- Replace vague claims with the specific behavior, risk, or tradeoff.
- Keep headings and bullets compact, but not cryptic.
- Preserve established project terms even when a general style rule would suggest a different word.
- Keep examples, commands, flags, paths, identifiers, and quoted values exact.
- Use contractions only when they match the surrounding document's tone.
- Avoid adding enthusiasm, sales language, or broad claims the source text does not support.

## Project-Specific Checks

When maintaining this skill, add stable checks here rather than changing or restating `stop-slop` directly.

- Remove introductory throat-clearing before lists, examples, and conclusions.
- Replace generic claims such as `improves developer experience` with the specific improvement.
- Avoid framing edits as smarter, safer, or more elegant unless the text proves that claim.
- Keep commit messages, PR descriptions, and changelog entries concise and outcome-focused.
- For prompts and agent instructions, keep obligations testable: say what the agent should do, when, and how to verify it.

## Review Checklist

- Does the result sound like a careful maintainer wrote it?
- Did the edit remove predictable AI writing patterns without making the prose stiff?
- Are the claims specific enough to verify?
- Did any style change alter the technical meaning?
- Are commands, paths, identifiers, config keys, examples, and product names preserved exactly?
- Are terms, capitalization, and voice consistent with nearby files?
- Did the edit avoid adding marketing tone or unsupported claims?
- If the request involved a file, was the targeted cleanup checked after editing?

## Output

When editing files, keep the final summary concise and mention the main categories changed. If no edits are needed, say that the prose is already clear enough and identify any wording intentionally left unchanged.
