---
name: guide-unit-tests
description: Guide unit test design while coding or reviewing. Use this skill when the user wants to write unit tests, improve existing tests, review test quality, choose test boundaries, decide what to assert, use mocks/stubs/test doubles, or interpret code that is hard to unit test. This skill focuses on unit tests and design feedback, not detailed integration, E2E, CI, or framework setup work.
---

# Guide Unit Tests

## Overview

Use this skill while writing or reviewing unit tests. The goal is not to maximize test count or coverage. The goal is to keep the codebase safe to change by protecting important behavior at a reasonable maintenance cost.

Use this skill as a companion when creating unit tests, reviewing unit tests, deciding whether a behavior belongs in a unit test, or using test difficulty as design feedback.

## Scope

Use this skill to:

- select valuable unit test targets
- decide what behavior to observe and assert
- choose between output, state, and interaction checks
- use test doubles, stubs, and mocks
- write clear test names, setup, actions, and assertions
- review brittle, over-specified, or low-value tests
- identify design changes suggested by hard-to-test code

Do not use this skill as the source of truth for integration tests, E2E tests, database tests, CI, coverage tooling, or framework-specific setup details. Mention those topics only when they help define the unit test boundary.

## Reference Selection

Read only the references the task needs:

| Situation                                                 | Read                                    |
| --------------------------------------------------------- | --------------------------------------- |
| Need the purpose, quality bar, priorities, or terminology | `references/foundations.md`             |
| Need to decide what should be unit tested                 | `references/test-target-selection.md`   |
| Need to decide what to assert or how to use mocks/stubs   | `references/observation-and-oracles.md` |
| Need help writing or improving test code structure        | `references/test-construction.md`       |
| Code is hard to unit test or suggests design problems     | `references/design-feedback.md`         |
| User asks for a review of tests or testability            | `references/review-heuristics.md`       |
| Need to understand why this skill is structured this way  | `references/design-background.md`       |

For Japanese output or Japanese documentation work, use the matching file under `references-ja/` when available. When editing this skill, keep `references/` and `references-ja/` aligned in meaning.

## Workflow

1. Classify the request as test creation, test review, boundary selection, assertion strategy, or design feedback.
2. Read the relevant reference files before giving detailed guidance.
3. Identify the behavior the user cares about before talking about classes, methods, mocks, or assertions.
4. Prefer tests that observe externally meaningful behavior over tests coupled to implementation details.
5. Treat low-value or high-maintenance tests as liabilities, not automatic assets.
6. When a rule has exceptions, explain the applicability and trade-off instead of presenting it as universal.
7. If the issue is broader than unit testing, say where the unit test boundary ends and what other test type or design work should cover the gap.

## Output

For new tests, provide:

- the behavior to test
- the recommended test boundary
- the preferred observation style
- the test cases to write
- any design change that would make the test simpler or more valuable

For review, lead with findings when there are real issues. Include the rule being violated, the risk, and the smallest useful correction. If there is no blocking issue, say so and mention any remaining context or verification gap.

Use the user's language unless they ask otherwise.
