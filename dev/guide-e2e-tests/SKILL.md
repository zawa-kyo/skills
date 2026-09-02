---
name: guide-e2e-tests
description: Design, implement, or review E2E tests when the boundary can detect system-wide or externally visible failures. Use it for representative journeys, external APIs or UIs, deployment smoke checks, environments, and test data. Use `guide-automated-tests` when the boundary is unclear.
---

# Guide E2E Tests

## Responsibility

Turn a system-wide or externally visible risk into representative journeys whose scope, state, and results can be trusted.
Do not decide the overall test portfolio or repeat detailed cases that other verification already protects.
Start from a clear user request or an assignment produced by `guide-automated-tests`.

Treat E2E as a project-defined confidence boundary.
The boundary may be a deployed environment, a separately started full system, or another externally driven arrangement.
State what is actually included instead of relying on the label.

## Workflow

1. Confirm the externally visible behavior and the system-wide failure the test must detect.
2. Inspect entry points, topology, external dependencies, identity, data ownership, observability, existing tests, and the project's E2E conventions.
3. If the intended architecture or E2E boundary is unclear, present the plausible interpretations and confirm them with the user.
4. Define the journey boundary, included systems, controlled or unavailable dependencies, and supported confidence claim.
5. Select a small set of critical representative journeys or smoke checks.
6. Implement through supported interfaces with owned state, observable completion, meaningful outcomes, and useful failure evidence.
7. Review distinct confidence, fidelity, isolation, flakiness, diagnosis, runtime, and cleanup.

When another boundary better fits the risk and constraints, explain why the requested E2E boundary is insufficient or costs more than it contributes.
Return the cross-level decision to `guide-automated-tests` when it is available; otherwise state what must be reconsidered.

Read `references/guidance.md` for level-specific journey, environment, reliability, and review guidance.
For Japanese output or Japanese documentation work, use `references-ja/guidance.md`.

## Review

Lead with concrete confidence or reliability problems.
Do not request more journeys merely to increase feature coverage, and do not reject a project boundary solely because it is not deployed like production.

## Output

Report the journey and risk, inspected context, actual E2E boundary, dependency exclusions, state and cleanup, completion condition, expected outcome, failure evidence, checks run, and remaining confidence gaps.
State important assumptions and alternatives discussed with the user.

Use the user's language unless they ask otherwise.
