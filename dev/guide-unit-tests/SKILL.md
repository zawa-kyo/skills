---
name: guide-unit-tests
description: Design, implement, and review unit tests when a unit boundary can credibly protect the requested behavior and risk. Use it directly to choose cases and assertions, handle test doubles, improve unit tests, or refactor hard-to-test behavior. It can also consume an assignment from guide-automated-tests. Use guide-automated-tests when the appropriate verification approach is unclear, the work spans test levels, or controlling dependencies would remove the mechanism at risk. This skill does not choose the overall strategy or cover detailed integration, E2E, CI, or framework setup work.
---

# Guide Unit Tests

## Responsibility

Turn a behavior and risk into a fast, deterministic, independently runnable test that protects observable behavior without unnecessary implementation coupling.
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

Clean, layered, or onion-style separation between decisions and effects is a reasonable starting hypothesis when no clearer design exists.
Do not impose it as a rewrite when the current design is coherent or the test does not justify that scope.

## Workflow

1. Confirm the behavior, regression risk, and reason a unit boundary is expected to be sufficient.
2. Inspect enough production and test context to understand the intended responsibilities.
3. Choose the behavior boundary, dependencies kept real or controlled, and observation style.
4. Design a small set of concrete cases with meaningful inputs and expected results.
5. Implement with local conventions, using test doubles only for clear roles.
6. Review behavior coverage, refactoring resistance, determinism, readability, and maintenance cost.

If controlling a dependency removes the mechanism whose failure matters, explain the gap and return the cross-level decision to `guide-automated-tests` when it is available.
Otherwise state the decision that must be reconsidered.

Read `references/guidance.md` for unit-specific boundary, dependency, case, implementation, and review guidance.
For Japanese output or Japanese documentation work, use `references-ja/guidance.md`.

## Review

Lead with findings that affect behavior, confidence, refactoring resistance, determinism, readability, or maintenance.
Do not present a testing-school preference or local style difference as a defect by itself.

## Output

Report the behavior and risk, inspected context, architecture assumptions confirmed with the user, chosen boundary, dependency treatment, observation style, cases, implementation changes, checks run, and remaining risks.
Keep the detail proportional to the task.

Use the user's language unless they ask otherwise.
