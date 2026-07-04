---
name: distill-japanese-edits
description: Distill reusable Japanese writing rules from human edits that make Japanese documentation more natural without changing technical meaning. Use when the user wants to improve the local `revise-japanese-writing` guidance, when bilingual sync work surfaced recurring Japanese naturalization patterns, or when a Git diff contains human rewrites worth turning into maintainable style rules. This skill can run on Git diffs or specific files by itself, and `sync-bilingual-docs` can invoke it after bilingual synchronization.
---

# Distill Japanese Edits

Extract reusable style guidance from human Japanese rewrites, then turn that guidance into evidence-backed maintenance changes for the local `revise-japanese-writing` skill.

## Goal

Improve `writing/revise-japanese-writing/` by learning from real human corrections without overfitting to one document or one person's incidental preference.

## When To Use

Use this skill when:

- the user asks to improve `revise-japanese-writing`
- a recent diff contains Japanese rewrites that preserve meaning but improve naturalness
- `sync-bilingual-docs` captured improvement candidates
- you want an evidence-based update instead of adding style rules from intuition alone

Do not use this skill when:

- the diff mainly changes meaning or facts
- the Japanese edits are too sparse to generalize
- the work is only bilingual syncing with no style-learning goal

## Inputs

Use any combination that is available:

- `git diff`
- user-specified Japanese files
- candidate notes from `sync-bilingual-docs`
- current files under `writing/revise-japanese-writing/`

## Workflow

1. Read the current `writing/revise-japanese-writing/SKILL.md`, `SKILL-ja.md`, and `references/idea.md` before proposing changes.
2. Collect Japanese diff hunks or candidate notes.
3. Filter out edits that fail the evaluation questions below. Typical examples are:
   - semantic changes
   - factual fixes
   - structural rewrites with mixed motives
   - isolated taste preferences with no reusable pattern
4. Classify the remaining edits by pattern, such as:
   - translationese or English-tracing phrasing
   - unnatural noun stacking
   - missing particles or weak predicate structure
   - awkward term choice versus established usage
   - logic and paragraph flow improvement
   - empty emphasis or AI-like posture words
5. For each pattern, write a candidate rule in abstract form.
6. Check whether the current skill already covers that rule:
   - If it already exists, prefer tightening or clarifying the existing rule
   - If it is adjacent to an existing rule, integrate there instead of adding a new section
   - If it introduces a genuinely new concept, add a small new bullet or subsection
7. Update both `SKILL.md` and `SKILL-ja.md` when changing runtime guidance.
8. Update `references/idea.md` only when the change reflects a new external influence or a meaningful maintenance rationale worth recording.
9. Leave the changes unstaged and uncommitted.

## Evaluation Questions

Use these as the only generalization gate. If you cannot answer yes where required, do not turn the edit into a rule.

For each candidate pattern, answer these questions:

1. Did the human edit preserve technical meaning?
2. Is the improvement about language quality rather than content policy?
3. Would the rule help in multiple files, not only this one location?
4. Is the rule absent from the current skill, or is the current wording too weak for this pattern?
5. Can the rule be stated briefly enough to keep the skill maintainable?

If any answer is "no", prefer a note in your report over a skill edit.

## Update Order

Prefer the smallest durable change:

1. tighten an existing bullet
2. add one short bullet to an existing section
3. add a small subsection
4. add a maintenance note to `references/idea.md`

Avoid large expansions unless several distinct diffs support them.

## Evidence Format

For each rule candidate, keep a short evidence record:

- source file
- representative before wording
- representative after wording
- why the meaning stayed the same
- generalized rule
- chosen destination in `revise-japanese-writing`

Do not dump large raw diffs into the final report. Summarize them instead.

## Standalone Mode

When running without `sync-bilingual-docs`:

1. infer scope from the current diff or user-specified files
2. collect Japanese edits directly
3. apply the same filtering and abstraction workflow
4. report whether the evidence was strong enough to justify changes

## Output

Report concisely:

- whether the evidence justified a `revise-japanese-writing` update
- which rule candidates were accepted or rejected
- which files were edited
- any low-confidence candidates that should wait for more examples

If no change is justified, say so clearly and explain the limiting factor.
