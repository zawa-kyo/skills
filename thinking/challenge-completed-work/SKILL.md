---
name: challenge-completed-work
description: Challenge completed work from a fresh context before treating it as done. Use when the user wants a skeptical check, asks for adversarial review or verification, wants to stress-test a plan, design, document, code change, skill, or other deliverable against stated criteria, or needs gaps reported after a long autonomous run without style preferences.
---

# Challenge Completed Work

## Purpose

Apply skeptical verification from a fresh context before treating work as done. Look for correctness gaps, missed requirements, weak assumptions, unsafe scope creep, or evaluation holes against the stated goal. This is not a style review or a prompt-expansion exercise.

## When To Use This

Use this skill when a result should be checked independently before acceptance:

- reviewing a plan against its stated success criteria
- checking a design, architecture proposal, or decision memo for gaps
- checking a document or policy against the user's intent
- checking a code or repository diff after implementation
- reviewing a skill, prompt, eval set, or agent instruction before publishing it
- finishing a long autonomous run where the implementing context may be biased toward its own result

For domain-specific reviews, use the relevant skill as the primary lens and this skill to check for gaps. Examples include `review-essential-code` for code, `guide-unit-tests` for unit tests, and `skill-creator` for skills.

## Review Inputs

Collect the smallest set of inputs needed to judge the result independently:

- the stated goal, plan, or acceptance criteria
- the result to review, such as a diff, document, proposal, or generated artifact
- the expected output, behavior, or decision standard
- eval prompts, assertions, or acceptance criteria when they exist
- constraints such as repository rules, bilingual sync requirements, safety requirements, budgets, or scope boundaries

If the artifact, goal, or acceptance criteria are missing, do not claim verification. Report the gap and ask for the smallest missing material.

Do not give the reviewer implementation reasoning unless it is part of the acceptance criteria. Judge the artifact independently of how it was produced.

## Workflow

1. State the work under review and the finding criteria.
2. Check that the inputs are sufficient; report a verification gap if they are not.
3. Run an independent review in a fresh subagent context when delegation is allowed.
4. Report only gaps affecting correctness, requirements, assumptions, safety, maintainability, or evaluation quality.
5. Treat style preferences, speculative edge cases, and broad redesigns as optional unless they affect the goal.
6. Fix actionable findings within scope when the task includes changes; otherwise report them without editing.
7. Re-run the review after meaningful fixes and report remaining risks or unverified checks.

## Reviewer Prompt Template

Use a prompt like this for a fresh subagent or independent reviewer when delegation is available and allowed:

```text
Review the work below from a fresh context.

Work to check:
<name the plan, design, diff, document, skill, or artifact>

Goal or plan:
<summarize the intended behavior, success criteria, assumptions, and scope>

Review material:
<diff, changed files, or paths to inspect>

Report findings only when they affect correctness, stated requirements,
assumptions, safety, maintainability, scope control, or evaluation quality.
Do not report style preferences, speculative edge cases, or broader redesign ideas
unless they make the work fail its stated purpose.

For each finding, include:
- severity
- evidence from the reviewed material
- why it affects the stated goal
- the smallest useful correction

If there are no blocking findings, say so clearly and mention any verification gaps.
```

## What To Check

Check the result against these questions:

- Does the result satisfy the stated goal rather than only appearing plausible?
- Are the assumptions explicit, necessary, and defensible?
- Are important requirements, constraints, edge cases, or failure modes missing?
- Did the work change anything outside the intended scope?
- If files or documents changed, were required counterparts, metadata, or references kept aligned?
- If the work includes tests or evals, do they check the core behavior rather than easy or irrelevant cases?
- Does the result explain what remains unverified when verification is incomplete?
- Could the proposed fix or conclusion cause over-engineering, unnecessary file churn, unsafe actions, or false confidence?
- For skill or prompt work, do trigger conditions, workflow steps, references, and evals match the intended use?

## Handling Findings

Classify each finding before fixing it:

- **Actionable:** It affects the stated goal and has a scoped correction. Fix it.
- **Optional:** It is a useful improvement but not required for correctness or the stated scope. Mention it only if it helps the user decide next steps.
- **Rejected:** It is a style preference, impossible edge case, or broader redesign that would bloat the skill. State why it was not applied when relevant.

Do not chase every adversarial note. A good reviewer will sometimes find plausible concerns that are not worth fixing. The implementing agent should preserve the skill's focus and avoid adding instructions that only defend against unlikely misuse.

## Output

Report the review result in the user's language with fixed findings, remaining risks, unimplemented optional ideas, and checks run.

If no fresh subagent or independent reviewer is available or allowed, say that the review was an inline adversarial pass and lower confidence accordingly.
