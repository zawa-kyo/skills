# Strategy Guidance

## Describe Boundaries Before Labels

Describe each proposed test by:

- entry point
- behavior, components, processes, and infrastructure included
- dependencies kept real, controlled, replaced, or unavailable
- in-process, separately started, or deployed arrangement
- observable result
- execution, environment, diagnosis, and maintenance cost

Unit, integration, and E2E are useful profiles over these dimensions, not a complete taxonomy.
Use the project's terminology after making the actual boundary explicit.

## Allocate Distinct Confidence

Choose a boundary that includes the mechanism whose failure matters.

- Unit tests are credible when behavior can be checked quickly and independently without uncontrolled shared or process-external state.
- Integration tests are credible when real collaboration, infrastructure semantics, serialization, framework wiring, or a controlled process-external dependency is the risk.
- E2E tests are credible when an externally visible journey, external entry point, or system-wide wiring is the risk.

Do not repeat the same detail at every level.
Broader tests should add a distinct kind of confidence.

## Review A Portfolio

1. List important behaviors and failure risks.
2. Map each risk to the test or other control intended to detect it.
3. Check whether that verification includes the mechanism that can fail.
4. Identify missing risks and guarantees that exceed the exercised boundary.
5. Identify duplicate tests that add no distinct confidence.
6. Check whether feedback time, environment cost, and diagnosis fit the development workflow.

Counts, duration, and coverage can reveal areas to investigate.
They do not establish whether the protected risks are valuable.

## Prepare A Test Assignment

Pass the specialist:

- behavior and failure risk
- selected boundary and reason
- entry point and included scope
- dependency treatment
- observable result
- required scenarios
- execution and maintenance constraints
- risks assigned elsewhere

Let the specialist inspect local code and framework conventions before implementing.
