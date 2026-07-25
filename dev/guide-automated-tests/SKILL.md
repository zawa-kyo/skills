---
name: guide-automated-tests
description: Choose an automated verification strategy when the right method or boundary is unclear, the work spans test levels, or the user wants to review a test portfolio. Start from product risk and production context. Delegate clear unit, integration, or E2E work to the matching specialist; evaluate other approaches without forcing them into those labels. Use this skill to select or challenge boundaries and coordinate work across test levels. It does not cover framework setup, CI configuration, or detailed performance, security, or exploratory testing.
---

# Guide Automated Tests

## Responsibility

Make decisions that precede or span test levels:

- why verification is needed and which failure matters
- what evidence would detect that failure
- which boundary or verification approach can provide that evidence
- how confidence, diagnosis, execution frequency, creation cost, and maintenance cost trade off
- which risks another test or control covers, and which remain knowingly unverified

Use a specialist directly when the user names a unit, integration, or E2E task and that boundary can detect the relevant failure.
Use this skill when the boundary is uncertain, crosses levels, or needs to be challenged.

Do not begin with a preferred test shape, coverage target, architecture, or three-level classification.
Treat Test Pyramid, Testing Trophy, and test counts as evidence or comparison aids, not required outcomes.

## Work With The User

Inspect production code, architecture, dependencies, existing tests and controls, delivery constraints, and failure history when available.
Separate observed facts from assumptions.

When more than one approach is credible:

1. Present the viable approaches or boundaries.
2. Explain what each option demonstrates, omits, and costs.
3. Recommend one based on the repository and the user's priorities.
4. Confirm consequential assumptions or broad changes before implementation.

Match the depth of strategy work to the request.

## Workflow

1. Name the behavior, regression, or change risk that matters.
2. Inspect the repository and identify relevant constraints and unknowns.
3. Define the evidence needed to detect the failure.
4. Compare credible verification approaches using confidence, diagnosis, execution frequency, and creation and maintenance cost.
5. Choose the approach or combination that best balances the stated priorities.
6. Review the existing portfolio for gaps, unsupported confidence claims, wasteful overlap, slow feedback concentration, and brittle implementation coupling when the request requires it.
7. Delegate work that clearly matches a specialist. Evaluate other approaches here without inventing a new taxonomy or forcing a three-level label.

Read `references/guidance.md` for detailed decision, portfolio review, and handoff guidance.
For Japanese output or Japanese documentation work, use `references-ja/guidance.md`.

## Specialist Delegation

Delegate a clear unit, integration, or E2E assignment to `guide-unit-tests`, `guide-integration-tests`, or `guide-e2e-tests`.
Use the selection criteria and prepare the test assignment defined in `references/guidance.md` before delegating.
If the work does not clearly fit one of these specialists, decide from the inspected context without delegating it.

## Output

Report the evidence and assumptions, selected verification approach or compared options, confidence and cost trade-offs, delegated work, and remaining risks.
Keep the detail proportional to the task.

Use the user's language unless they ask otherwise.
