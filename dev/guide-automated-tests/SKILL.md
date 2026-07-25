---
name: guide-automated-tests
description: Lead any automated testing request, including one framed specifically as unit, integration, or E2E test work. Use general practices across test levels and inspect the product context to build an appropriate test strategy with the user, then delegate assigned responsibilities to the matching specialist. Use this skill for test design, implementation, review, boundary selection, portfolio analysis, or questions about what to test. This skill does not prescribe a fixed Test Pyramid or cover framework setup, CI configuration, performance testing, security testing, or exploratory testing.
---

# Guide Automated Tests

## Responsibility

Own the decisions that apply before or across test levels:

- why a test should exist and which failure matters
- what boundary must be exercised to detect that failure
- how confidence, feedback speed, diagnosis, and maintenance cost trade off
- which test level or combination should carry each responsibility
- which risks remain with another test level or another form of verification

Do not begin with a preferred test shape, coverage target, or architecture.
Treat Test Pyramid, Testing Trophy, and test counts as evidence or comparison aids, not required outcomes.

## Shared Principles

- Protect valuable observable behavior, not implementation structure or coverage numbers.
- Limit each confidence claim to the mechanisms and dependencies the test actually exercises.
- Prefer the least costly credible test, considering execution, environment, diagnosis, and maintenance together.
- Use broader tests only when they add confidence that narrower tests cannot provide.
- Keep intentional gaps explicit. Automating every risk is rarely economical.

## Work With The User

Inspect production code, architecture, dependencies, existing tests, delivery constraints, and failure history when available.
Separate observed facts from assumptions.

When more than one strategy is credible:

1. Present the viable boundaries or allocations.
2. Explain what each option proves, omits, and costs.
3. Recommend one based on the repository and the user's priorities.
4. Confirm consequential assumptions or broad changes with the user before implementation.

Keep the strategy step proportional to the request.
When the requested test level exercises the mechanism needed to detect the relevant failure, confirm the behavior, risk, and boundary briefly.
Then delegate without forcing a full portfolio analysis.

## Workflow

1. Name the behavior, regression, or change risk that matters.
2. Inspect the repository and identify relevant constraints and unknowns.
3. Describe the candidate boundary by entry point, included scope, dependency fidelity, deployment arrangement, observable result, and operating cost.
4. Allocate the risk to the smallest credible boundary, or compare alternatives when the answer depends on user priorities.
5. Review the portfolio for gaps, redundant confidence, slow feedback concentration, and brittle implementation coupling.
6. Produce a test assignment and delegate detailed work to the matching specialist.

Read `references/guidance.md` for detailed selection, portfolio review, and handoff guidance.
For Japanese output or Japanese documentation work, use `references-ja/guidance.md`.

## Specialist Delegation

- Use `guide-unit-tests` for a fast, deterministic behavior boundary that can avoid uncontrolled shared or process-external state.
- Use `guide-integration-tests` when confidence depends on real component collaboration, infrastructure, serialization, framework wiring, or a controlled process-external dependency.
- Use `guide-e2e-tests` for a representative externally visible journey or system-wide wiring through the project's E2E boundary.

Delegate only after stating the behavior, risk, boundary, dependencies, observation, constraints, and excluded guarantees.
If one request spans levels, coordinate the assignments and use each specialist only for its level-specific work.

## Output

Report:

- facts, assumptions, and relevant unknowns
- behavior and risk to protect
- selected boundary or compared options
- dependencies kept real, controlled, replaced, or unavailable
- observable result and confidence gained
- operating and maintenance trade-offs
- responsibilities delegated to each specialist
- risks intentionally left elsewhere

Use the user's language unless they ask otherwise.
