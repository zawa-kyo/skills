---
name: distill-japanese-edits
description: Distill reusable Japanese writing rules from human edits that make Japanese documentation more natural without changing technical meaning. Use when a `git diff` contains meaning-preserving rewrites into more natural Japanese, when `sync-bilingual-docs` surfaces improvement ideas, or when you want evidence-backed updates to the local `revise-japanese-writing` guidance. This skill can run on Git diffs or specific files by itself, and `sync-bilingual-docs` can invoke it after bilingual synchronization.
---

# Distill Japanese Edits

Extract reusable style guidance from human Japanese rewrites, then turn that guidance into evidence-backed maintenance changes for the local `revise-japanese-writing` skill.

## Goal

Improve `writing/revise-japanese-writing/` by learning from real human corrections while avoiding overfitting to one document or one person's incidental preference.

## When To Use

Use this skill when:

- a `git diff` contains Japanese rewrites that preserve meaning while making the prose more natural
- `sync-bilingual-docs` surfaced improvement ideas
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

1. Read the current `writing/revise-japanese-writing/SKILL.md` and `SKILL-ja.md` before proposing changes.
2. Collect Japanese diff hunks or candidate notes.
3. Filter out edits that fail the following checks:
   - Did the human edit preserve technical meaning?
   - Is the improvement about Japanese quality rather than content policy?
   - Would the rule help in multiple files, not only this one location?
   - Is the rule absent from the current skill, or is the current wording too weak for this pattern?
   - Can the rule stay brief enough to keep the skill maintainable?
   Typical rejects are:
   - meaning or factual corrections
   - mixed structural rewrites
   - one-off preferences with no reusable pattern
4. Classify the remaining edits by pattern, such as:
   - translationese or English-tracing phrasing
   - unnatural noun stacking
   - missing particles or weak predicate structure
   - awkward term choice versus established usage
   - logic and paragraph flow improvement
   - empty emphasis or AI-like posture words
5. Reduce each pattern to an abstract rule.
6. Check whether the current skill already covers that rule:
   - If it already exists, prefer tightening or clarifying the existing rule
   - If it is adjacent to an existing rule, integrate there instead of adding a new section
   - If it introduces a genuinely new concept, add that content with the smallest possible change
   - Keep the wording compact and avoid redundancy
7. Update both `SKILL.md` and `SKILL-ja.md` when changing runtime guidance.
8. Leave the changes unstaged and uncommitted.

## Output

Report concisely:

- whether the evidence justified a `revise-japanese-writing` update
- which rule candidates were accepted or rejected
- which files were edited
- any low-confidence candidates that should wait for more examples

If no change is justified, say so clearly and explain the limiting factor.
