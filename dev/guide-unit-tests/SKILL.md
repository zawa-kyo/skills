---
name: guide-unit-tests
description: Design, implement, or review unit tests when a unit boundary can protect the relevant behavior and risk. Use it to choose cases and assertions, handle test doubles, improve existing tests, or refactor hard-to-test behavior. It can work directly from the request or from a guide-automated-tests handoff. Use guide-automated-tests when the verification approach is unclear, the work spans test levels, or controlling dependencies would remove the mechanism at risk. This skill does not choose the overall strategy or cover detailed integration, E2E, CI, or framework setup.
---

# Guide Unit Tests

## Responsibility

Turn a behavior and risk into a fast, deterministic, independently runnable test that avoids unnecessary implementation coupling.
Do not decide the overall test portfolio here.
Start from a clear user request or an assignment produced by `guide-automated-tests`.

## Respect The Existing Design

Inspect the production code, domain language, dependency structure, architecture, and existing tests before designing the unit boundary.
Follow an established architecture when it supports the behavior being tested.

If the architecture or its intent is unclear:

1. Describe the structure and responsibilities visible in the code.
2. Separate evidence from interpretation.
3. Explain how different interpretations affect the test boundary or proposed refactor.
4. Confirm consequential assumptions with the user.

When design intent remains unclear, prefer the smallest production change that makes dependencies and observable behavior explicit.
Do not use a test request to impose a new architecture on coherent code.

## Workflow

1. Confirm the behavior, regression risk, and reason a unit boundary is expected to be sufficient.
2. Inspect enough production and test context to understand the intended responsibilities.
3. Choose the behavior boundary, dependencies kept real or controlled, and observation style.
4. Design a small set of concrete cases with meaningful inputs and expected results.
5. Implement with local conventions, using test doubles only for clear roles.
6. Review behavior coverage, refactoring resistance, determinism, readability, and maintenance cost.

If controlling a dependency removes the mechanism whose failure matters, explain the gap and return the cross-level decision to `guide-automated-tests` when it is available.
Otherwise state what must be reconsidered.

Read `references/guidance.md` for unit-specific boundary, dependency, case, implementation, and review guidance.
For Japanese output or Japanese documentation work, use `references-ja/guidance.md`.

## Review

Lead with findings that affect behavior, confidence, refactoring resistance, determinism, readability, or maintenance.
Do not present a testing-school preference or local style difference as a defect by itself.

## Output

Report the behavior and risk, inspected context, architecture assumptions confirmed with the user, chosen boundary, dependency treatment, observation style, cases, implementation changes, checks run, and remaining risks.
Keep the detail proportional to the task.

Use the user's language unless they ask otherwise.
