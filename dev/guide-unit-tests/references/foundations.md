# Foundations

## Goal

Priority: Essential
Layer: Foundation
Applicability: Any unit test creation or review task.
Trade-offs: A test with no clear value should be improved, moved to another test type, or removed.
Sources: _Unit Testing: Principles, Practices, and Patterns_

Unit tests should support sustainable change. They are valuable when they detect meaningful regressions, enable refactoring, run quickly, and remain easy to understand.

Do not treat tests as free assets. Test code has ownership cost: it must be read, run, debugged, updated, and trusted.

## Quality Attributes

Priority: Essential
Layer: Foundation
Applicability: Any judgment about whether a unit test is good.
Trade-offs: No single test maximizes every attribute; choose based on the behavior's importance and risk.
Sources: _Unit Testing: Principles, Practices, and Patterns_

Evaluate unit tests with these attributes:

- Protection against regressions: the test fails when important behavior breaks.
- Resistance to refactoring: the test does not fail merely because implementation details changed.
- Fast feedback: the test is cheap enough to run frequently.
- Maintainability: the test is clear, focused, and low-cost to update.

## Coverage Metrics

Priority: Recommended
Layer: Foundation
Applicability: When discussing coverage, missing tests, or test suite health.
Trade-offs: Coverage can expose untested areas, but it cannot prove test quality.
Sources: _Unit Testing: Principles, Practices, and Patterns_

Use coverage as a warning signal, not as a target by itself. Low coverage may reveal important untested code. High coverage does not prove that behavior is asserted correctly.

Do not write tests only to satisfy a coverage number.

## Priority Terms

Use these priorities consistently:

| Priority    | Meaning                                                           |
| ----------- | ----------------------------------------------------------------- |
| Essential   | Follow by default. Exceptions need an explicit reason.            |
| Recommended | Strong default. Exceptions are acceptable with a clear trade-off. |
| Suggested   | Consistency default. Other choices are acceptable when justified. |
