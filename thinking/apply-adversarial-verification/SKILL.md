---
name: apply-adversarial-verification
description: Add an adversarial review loop before treating a plan, design, document, code change, skill, or other deliverable as done. Use when the user wants a fresh skeptical check, asks for adversarial review or verification, wants to stress-test work against stated criteria, or has completed a long autonomous run and needs gaps reported without style preferences.
---

# Apply Adversarial Verification

## Purpose

Use adversarial review before treating important work as done. The reviewer should examine the result from a fresh, skeptical perspective and try to find correctness gaps, requirement misses, weak assumptions, unsafe scope creep, or evaluation holes. This is not a style review and not a prompt-expansion exercise.

The goal is to make the conclusion or deliverable stronger by testing whether it satisfies the stated goal, not by adding defensive work for every imaginable case.

## When To Use This

Use this skill when a result should be checked independently before being accepted, especially:

- reviewing a plan against its stated success criteria
- checking a design, architecture proposal, or decision memo for gaps
- checking a document or policy against the user's intent
- checking a code or repository diff after implementation
- reviewing a skill, prompt, eval set, or agent instruction before publishing it
- finishing a long autonomous run where the implementing context may be biased toward its own result

If the user asks for a domain-specific review, use the relevant skill as the primary lens and this skill as the independent gap-checking step. For example, use `review-essential-code` for code correctness and maintainability, `guide-unit-tests` for unit test design, and `skill-creator` for skill creation. This skill adds the skeptical verification loop around that work.

## Review Inputs

Collect the smallest set of inputs that lets the reviewer judge the result on its own terms:

- the stated goal, plan, or acceptance criteria
- the result to review, such as a diff, document, proposal, or generated artifact
- the expected output, behavior, or decision standard
- eval prompts, assertions, or acceptance criteria when they exist
- constraints such as repository rules, bilingual sync requirements, safety requirements, budgets, or scope boundaries

Do not give the reviewer the implementation reasoning unless it is part of the acceptance criteria. A fresh review is valuable because it sees the artifact, not the path that produced it.

## Workflow

1. State what work is being reviewed.
2. State the criteria that count as findings.
3. Run an independent review, preferably in a fresh subagent context if available.
4. Ask the reviewer to report only gaps that affect correctness, stated requirements, assumptions, safety, maintainability, or evaluation quality.
5. Treat style preferences, speculative edge cases, and broader redesign ideas as optional unless they affect the stated goal.
6. Fix actionable findings that are within scope.
7. Re-run the adversarial review after meaningful fixes.
8. Report any remaining accepted risks or unverified checks.

## Reviewer Prompt Template

Use a prompt like this for a fresh subagent or independent reviewer:

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

Report the review result in the user's language:

- findings fixed
- findings accepted as remaining risk
- optional ideas not implemented
- checks run, including whether a fresh subagent review was actually used

If no fresh subagent or independent reviewer is available, say that the review was an inline adversarial pass and lower confidence accordingly.
