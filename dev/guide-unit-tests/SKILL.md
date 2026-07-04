---
name: guide-unit-tests
description: Guide unit test design while coding or reviewing. Use this skill when the user wants to write unit tests, improve existing tests, review test quality, choose test boundaries, decide what to assert, use mocks/stubs/test doubles, refactor hard-to-test code, or turn project context into a unit test strategy. This skill focuses on unit tests and design feedback, not detailed integration, E2E, CI, or framework setup work.
---

# Guide Unit Tests

## Overview

Use this skill while designing, implementing, or reviewing unit tests. The goal is not to maximize test count or coverage. The goal is to keep the codebase safe to change by protecting important behavior at a reasonable maintenance cost.

Treat this skill as a workflow, not a topic index. Move from abstract purpose to concrete implementation, then review the result against the original purpose.

## Scope

Use this skill to:

- turn a testing request into a clear purpose and risk
- read enough domain and architecture context to avoid generic tests
- design the unit test strategy before writing code
- choose concrete test cases, assertions, and test double roles
- implement readable tests and refactor hard-to-test production code when needed
- review tests by checking purpose, context, strategy, design, and implementation fit

Do not use this skill as the source of truth for integration tests, E2E tests, database tests, CI, coverage tooling, or framework-specific setup details. Mention those topics only when they help define the unit test boundary.

## Runtime References

`references/` contains runtime guidance for using this skill. Read the files in workflow order unless the task is small enough to skip directly to the relevant later step.

| Step | Reference                          | Purpose                                      |
| ---- | ---------------------------------- | -------------------------------------------- |
| 1    | `references/01-purpose.md`         | Clarify why the test should exist.           |
| 2    | `references/02-context.md`         | Read domain, architecture, and test context. |
| 3    | `references/03-test-strategy.md`   | Choose test level, boundary, and observation. |
| 4    | `references/04-test-design.md`     | Design concrete cases and assertions.        |
| 5    | `references/05-implementation.md`  | Implement tests and safe testability refactors. |
| 6    | `references/06-self-review.md`     | Review the result against purpose and design. |

For Japanese output or Japanese documentation work, use the matching file under `references-ja/` when available.

`maintenance/` and `maintenance-ja/` contain maintainer notes for this skill. Do not read them during ordinary unit test guidance. Use them only when editing this skill, changing its rule structure, checking source mapping, or reviewing its design background.

When editing this skill, keep paired files aligned in meaning:

- `references/` and `references-ja/` for runtime guidance
- `maintenance/` and `maintenance-ja/` for maintainer guidance

## Core Workflow

1. Establish purpose: identify the behavior, risk, or maintenance goal. Translate coverage-driven requests into a concrete reason for the test to exist.
2. Read context: inspect enough project domain, architecture, existing tests, and dependency structure to avoid tests that are locally correct but project-inappropriate.
3. Design strategy: decide the test level, unit boundary, dependencies to keep real or replace, and observation style before writing code.
4. Design cases: list the concrete cases, inputs, actions, expected observable results, and test double roles.
5. Implement: write the tests using local conventions while preserving behavior-focused intent. If the code is hard to test, prefer production refactors that improve the model over test-only seams.
6. Self-review: check whether the implemented tests still match the purpose, context, strategy, and design.

## Review Mode

When the user asks for a review, use the same workflow in compressed form instead of switching to a separate checklist:

1. Infer the test purpose from the request, diff, code, or existing tests.
2. Read enough production and test context to understand the behavior and boundary.
3. Check whether the chosen strategy fits the behavior and risk.
4. Check whether assertions observe behavior rather than implementation details.
5. Check whether the implementation is readable, deterministic, and maintainable.
6. Report findings first when there are real issues. Include the violated principle, risk, and smallest useful correction.

If no blocking issue is found, say so clearly and mention only confidence-affecting gaps such as missing context, unclear production contracts, or unrun tests.

## Output

For new or changed tests, provide the testing purpose, relevant project context, test strategy, concrete test cases, implementation changes, and review result. Keep the level of detail proportional to the task.

For reviews, lead with findings ordered by severity. Do not present a stylistic preference as a defect unless it affects behavior, refactoring resistance, readability, determinism, or maintenance cost.

Use the user's language unless they ask otherwise.
