---
name: adversarial-skill-review
description: Add an adversarial review loop to agent skill creation or improvement. Use when drafting, modifying, reviewing, or evaluating SKILL.md files, skill packages, skill diffs, trigger descriptions, eval prompts, or instructions that need an independent gap check before being treated as done.
---

# Adversarial Skill Review

## Purpose

Use adversarial review to improve agent skills before treating them as done. The reviewer should examine the skill from a fresh, skeptical perspective and try to find correctness gaps, requirement misses, trigger failures, unsafe scope creep, or evaluation holes. This is not a style review and not a prompt-expansion exercise.

The goal is to make the skill stronger by testing whether it actually supports the intended workflow, not by adding defensive instructions for every imaginable case.

## When To Use This

Use this skill when work touches an agent skill or skill package, especially:

- creating a new `SKILL.md`
- revising a skill's workflow, trigger description, or bundled references
- changing paired `SKILL.md` and `SKILL-ja.md` files
- adding or changing skill eval prompts
- updating README or package metadata for a skill
- finishing a long autonomous skill-editing run

If the user asks for ordinary code review, use the relevant code-review skill instead. If the user asks to create or improve a skill, use this as a supporting review step near the end of the `skill-creator` workflow.

## Review Inputs

Collect the smallest set of inputs that lets the reviewer judge the result on its own terms:

- the stated goal or plan for the skill work
- the current diff or the changed skill files
- the expected trigger conditions
- the expected output or behavior of the skill
- eval prompts, assertions, or acceptance criteria when they exist
- repository-specific rules such as bilingual sync requirements

Do not give the reviewer the implementation reasoning unless it is part of the acceptance criteria. A fresh review is valuable because it sees the artifact, not the path that produced it.

## Workflow

1. State what skill work is being reviewed.
2. State the criteria that count as findings.
3. Run an independent review, preferably in a fresh subagent context if available.
4. Ask the reviewer to report only gaps that affect correctness, stated requirements, trigger behavior, safety, maintainability, or evaluation quality.
5. Treat style preferences, speculative edge cases, and broader redesign ideas as optional unless they affect the stated goal.
6. Fix actionable findings that are within scope.
7. Re-run the adversarial review after meaningful fixes.
8. Report any remaining accepted risks or unverified checks.

## Reviewer Prompt Template

Use a prompt like this for a fresh subagent or independent reviewer:

```text
Review the skill work below from a fresh context.

Work to check:
<name the skill or package>

Goal or plan:
<summarize the intended behavior, trigger conditions, and scope>

Review material:
<diff, changed files, or paths to inspect>

Report findings only when they affect correctness, stated requirements,
trigger behavior, safety, maintainability, bilingual sync, or evaluation quality.
Do not report style preferences, speculative edge cases, or broader redesign ideas
unless they make the skill fail its stated purpose.

For each finding, include:
- severity
- evidence from the reviewed material
- why it affects the stated goal
- the smallest useful correction

If there are no blocking findings, say so clearly and mention any verification gaps.
```

## What To Check

Check the result against these questions:

- Does the `description` trigger on the real user situations where the skill should be used?
- Does the body give an executable workflow rather than broad advice?
- Does the skill preserve scope, or does it try to solve adjacent problems better handled by another skill?
- Are required paired files, metadata, README entries, or package manifests updated?
- For bilingual skills, do `SKILL.md` and `SKILL-ja.md` match in meaning while staying natural in each language?
- Are supporting references or scripts mentioned only when they actually exist?
- Are eval prompts or assertions aimed at the core behavior rather than easy or irrelevant cases?
- Does the skill tell the agent what to do when tools, subagents, files, or context are unavailable?
- Could the instructions cause over-engineering, unnecessary file churn, unsafe actions, or false confidence?

## Handling Findings

Classify each finding before fixing it:

- **Actionable:** It affects the stated goal and has a scoped correction. Fix it.
- **Optional:** It is a useful improvement but not required for correctness or the stated scope. Mention it only if it helps the user decide next steps.
- **Rejected:** It is a style preference, impossible edge case, or broader redesign that would bloat the skill. State why it was not applied when relevant.

Do not chase every adversarial note. A good reviewer will sometimes find plausible concerns that are not worth fixing. The implementing agent should preserve the skill's focus and avoid adding instructions that only defend against unlikely misuse.

## Output

Report the review result in the user's language:

- findings fixed
- findings accepted as remaining risk
- optional ideas not implemented
- checks run, including whether a fresh subagent review was actually used

If no fresh subagent or independent reviewer is available, say that the review was an inline adversarial pass and lower confidence accordingly.
