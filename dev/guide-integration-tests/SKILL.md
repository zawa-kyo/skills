---
name: guide-integration-tests
description: Design, implement, and review integration tests when the requested boundary must exercise real collaboration, infrastructure, or a controlled process-external dependency. Use it directly for component collaboration, infrastructure semantics, test data, or slow and brittle integration tests. It can also consume an assignment from guide-automated-tests. Use guide-automated-tests when the appropriate verification approach is unclear, the work spans test levels, or the requested integration boundary may be wrong. This skill does not choose the overall strategy or cover full user journeys, CI configuration, or framework installation.
---

# Guide Integration Tests

## Responsibility

Turn an integration risk into a test that includes the real collaboration needed for confidence while keeping the environment controlled and failures diagnosable.
Do not decide the overall test portfolio here.
Start from a clear user request or an assignment produced by `guide-automated-tests`.

Describe the actual entry point, included components, process-external dependencies, and observations instead of defining integration testing by class count or a universal taxonomy.

## Workflow

1. Confirm the behavior, integration failure, and confidence that narrower tests cannot provide.
2. Inspect the production boundary, adapters, infrastructure, external contracts, existing tests, and available environment.
3. Compare credible boundaries when ownership, fidelity, runtime, or isolation constraints make the choice ambiguous.
4. Choose which dependencies must be real, controlled, replaced, or recorded as unavailable.
5. Design representative scenarios, independent state, and meaningful observations.
6. Implement with local conventions and verify confidence, fidelity, diagnosis, runtime, and maintenance cost.

When the requested boundary removes the mechanism at risk, explain the gap and return the cross-level decision to `guide-automated-tests` when it is available.
Otherwise state the decision that must be reconsidered.
Do not simulate away the reason for the test.

Read `references/guidance.md` for level-specific dependency, scenario, implementation, and review guidance.
For Japanese output or Japanese documentation work, use `references-ja/guidance.md`.

## Review

Lead with concrete findings.
Check whether the real mechanism at risk is included, replaced dependencies narrow the confidence claim, state is independent, observations are meaningful, and the added confidence justifies the environment cost.

Do not criticize a test merely for being slower than a unit test or for using a project-specific boundary name.

## Output

Report the behavior and integration risk, inspected context, chosen boundary, dependency treatment, scenarios, state management, observations, checks run, and remaining risks.
State important assumptions and alternatives discussed with the user.

Use the user's language unless they ask otherwise.
