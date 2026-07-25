---
name: guide-integration-tests
description: Design, implement, or review integration tests when confidence depends on real collaboration, infrastructure behavior, or a controlled process-external dependency. Use it for component collaboration, infrastructure semantics, test data, or slow and brittle integration tests. It can work directly from the request or from a guide-automated-tests handoff. Use guide-automated-tests when the verification approach is unclear, the work spans test levels, or the proposed integration boundary needs reconsideration. This skill does not choose the overall strategy or cover full user journeys, CI configuration, or framework installation.
---

# Guide Integration Tests

## Responsibility

Turn an integration risk into a test that includes the collaboration needed to expose that risk.
Keep the environment controlled and make failures traceable to the affected boundary.
Do not decide the overall test portfolio here.
Start from a clear user request or an assignment produced by `guide-automated-tests`.

Describe the actual entry point, included components, process-external dependencies, and observations instead of defining integration testing by class count or a universal taxonomy.

## Workflow

1. Confirm the behavior, integration failure, and evidence that depends on the integration.
2. Inspect the production boundary, adapters, infrastructure, external contracts, existing tests, and available environment.
3. Compare credible boundaries when ownership, fidelity, runtime, or isolation constraints make the choice ambiguous.
4. Choose which dependencies must be real, controlled, replaced, or recorded as unavailable.
5. Design representative scenarios, independent state, and meaningful observations.
6. Implement with local conventions and verify confidence, fidelity, diagnosis, runtime, and maintenance cost.

When the requested boundary removes the mechanism at risk, explain the gap and return the cross-level decision to `guide-automated-tests` when it is available.
Otherwise state what must be reconsidered.
Do not replace the mechanism that gives the test its purpose.

Read `references/guidance.md` for level-specific dependency, scenario, implementation, and review guidance.
For Japanese output or Japanese documentation work, use `references-ja/guidance.md`.

## Review

Lead with concrete findings about the exercised mechanism, confidence limits, state independence, observations, and environment cost.

Do not criticize a test merely for being slower than a unit test or for using a project-specific boundary name.

## Output

Report the behavior and integration risk, inspected context, chosen boundary, dependency treatment, scenarios, state management, observations, checks run, and remaining risks.
State important assumptions and alternatives discussed with the user.

Use the user's language unless they ask otherwise.
