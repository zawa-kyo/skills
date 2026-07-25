---
name: guide-e2e-tests
description: Design, implement, and review E2E test responsibilities assigned by guide-automated-tests. Apply this specialist after the head skill selects an E2E boundary and passes the behavior, risk, constraints, and intended confidence. Use it for representative journeys, external API or UI entry points, deployment smoke checks, E2E environments and test data, or slow and flaky E2E tests within that assignment. Start all testing requests with guide-automated-tests. This skill does not choose the overall strategy or cover CI configuration, load testing, security testing, or exhaustive UI coverage.
---

# Guide E2E Tests

## Responsibility

Turn an assigned system-wide or externally visible risk into a small, controlled, and trustworthy set of representative journeys.
Do not decide the overall test portfolio or repeat detailed cases already protected at narrower boundaries.
Start from the assignment produced by `guide-automated-tests`.

Treat E2E as a project-defined confidence boundary.
It may use a deployed environment, a separately started full system, or another externally driven arrangement.
State what is actually included instead of relying on the label.

## Workflow

1. Confirm the externally visible behavior and the system-wide failure the test must detect.
2. Inspect entry points, topology, external dependencies, identity, data ownership, observability, existing tests, and the project's E2E conventions.
3. If the intended architecture or E2E boundary is unclear, present the plausible interpretations and confirm them with the user.
4. Define the journey boundary, included systems, controlled or unavailable dependencies, and legitimate confidence claim.
5. Select a small set of critical representative journeys or smoke checks.
6. Implement through supported interfaces with owned state, observable completion, meaningful outcomes, and useful failure evidence.
7. Review distinct confidence, fidelity, isolation, flakiness, diagnosis, runtime, and cleanup.

When a narrower boundary can provide the same confidence at lower cost, explain the alternative.
Return cross-level allocation to `guide-automated-tests`.

Read `references/guidance.md` for level-specific journey, environment, reliability, and review guidance.
For Japanese output or Japanese documentation work, use `references-ja/guidance.md`.

## Review

Lead with concrete confidence or reliability problems.
Do not request more journeys merely to increase feature coverage, and do not reject a project boundary solely because it is not deployed like production.

## Output

Report the journey and risk, inspected context, actual E2E boundary, dependency exclusions, state and cleanup, completion condition, expected outcome, failure evidence, checks run, and remaining confidence gaps.
State important assumptions and alternatives discussed with the user.

Use the user's language unless they ask otherwise.
