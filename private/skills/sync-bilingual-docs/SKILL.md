---
name: sync-bilingual-docs
description: Sync paired English and Japanese documentation in repositories that maintain `*.md` and `*-ja.md` counterparts, including paired directories such as `references/` and `references-ja/`. Use when the user asks to keep bilingual docs aligned, when one side of a paired document changed, or after editing README, AGENTS, SKILL files, or related reference documents. In Codex, use this as the primary bilingual maintenance workflow. Invoke the companion `distill-japanese-edits` skill only when the user also wants to improve Japanese writing guidance from observed human edits or when recurring meaning-preserving naturalization patterns clearly appear in the diff.
---

# Sync Bilingual Docs

Maintain semantic alignment between English and Japanese documentation pairs in repositories that use filename pairs such as `README.md` and `README-ja.md`, `SKILL.md` and `SKILL-ja.md`, or directory pairs such as `references/` and `references-ja/`.

## Goals

- Keep bilingual document pairs aligned in meaning
- Preserve natural prose in each language instead of producing line-by-line translations
- Detect when a human Japanese rewrite may contain reusable style guidance
- Leave commit decisions to the user

## Do Not Use This Skill For

- General prose polishing without a bilingual sync requirement
- Large content redesign where structure should be renegotiated first
- Automatic style-rule extraction without checking evidence

For Japanese style extraction and `revise-japanese-writing` maintenance, use the companion `distill-japanese-edits` skill.

## Inputs

Use any combination that is available:

- The user's requested file or directory scope
- `git diff` and `git status`
- Existing repository guidance such as `AGENTS.md`
- The paired English or Japanese counterpart files

If the user did not specify scope, infer it from the current diff.

## Pair Resolution Rules

Resolve pairs in this order:

1. Same directory filename pairs such as `README.md` <-> `README-ja.md`, `AGENTS.md` <-> `AGENTS-ja.md`, `SKILL.md` <-> `SKILL-ja.md`
2. Directory pairs such as `references/` <-> `references-ja/`, `maintenance/` <-> `maintenance-ja/`
3. Repository-local conventions explicitly documented in `AGENTS.md` or nearby instructions

If no counterpart exists, report that clearly and do not invent a new file unless the user asked for one.

## Workflow

1. Read the relevant instruction files and the changed documents before editing.
2. Inspect the diff and list the changed bilingual pairs.
3. Classify each change before syncing:
   - content addition or removal
   - structural reorganization
   - terminology alignment
   - Japanese naturalization or English prose cleanup
4. Update the missing side so the pair matches in meaning.
5. Keep each language natural in its own prose style. Do not force sentence-by-sentence symmetry.
6. Preserve technical artifacts exactly unless the user asked to rename them:
   - commands
   - file paths
   - config keys
   - identifiers
   - package names
   - proper nouns
7. If the Japanese side contains clear, meaning-preserving human naturalization patterns, record them as improvement candidates.
8. If the user asked to improve the Japanese writing guidance, invoke the companion `distill-japanese-edits` skill after the sync work or in the same turn when practical.
   Do the same when at least two strong candidates appear across different sections or files.
9. Do not commit, stage, or publish changes unless the user explicitly asked.

## When To Invoke `distill-japanese-edits`

Invoke the companion skill only when at least one of these is true:

- The user explicitly wants to improve `revise-japanese-writing`
- The diff shows repeated Japanese rewrites that preserve meaning but improve naturalness
- A human rewrite reveals a reusable rule that is missing from current guidance

Do not invoke it for:

- simple content additions
- factual corrections
- one-off preferences that do not generalize
- large rewrites where meaning also changed

## Sync Heuristics

### If English changed first

- Update the Japanese counterpart to preserve the same intent
- Prefer natural Japanese wording over literal translation
- Keep established local terminology if it still fits the new content

### If Japanese changed first

- Determine whether the change is semantic or stylistic
- If semantic, sync the English counterpart accordingly
- If stylistic only, keep English meaning aligned without forcing an equivalent rhetorical change

### If both sides changed

- Reconcile them by meaning, not by line order
- Identify whether one side contains the more up-to-date structure
- Avoid overwriting a valid human improvement just to restore symmetry

## Improvement Candidate Capture

When Japanese edits look reusable, capture a short note for each candidate:

- file and section
- before pattern
- after pattern
- why the edit preserves meaning
- tentative generalized rule
- confidence: high, medium, or low

These notes are inputs to `distill-japanese-edits`. They are not rule changes by themselves.

## Quality Checks

Before finishing:

- Confirm every changed bilingual file has its counterpart reviewed
- Confirm technical meaning still matches across languages
- Confirm technical artifacts were preserved
- Confirm the Japanese side reads naturally, not as translation-shaped prose
- Confirm you did not turn a style-only edit into a semantic change
- Confirm any improvement candidates have evidence attached

## Output

Report concisely:

- which file pairs were synced
- whether any counterpart was missing
- whether improvement candidates were found
- whether `distill-japanese-edits` was invoked or should be invoked next

If no sync was needed, say so clearly.
