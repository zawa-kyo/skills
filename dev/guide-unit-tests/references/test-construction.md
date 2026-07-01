# Test Construction

## Name Tests By Behavior

Priority: Recommended
Layer: Construction
Applicability: When writing or renaming a unit test.
Trade-offs: Follow local naming conventions when they already communicate behavior clearly.
Sources: _Unit Testing: Principles, Practices, and Patterns_

Name tests so a reader can understand the behavior and expected outcome. Avoid names that only repeat method names or implementation structure.

## Use Arrange Act Assert

Priority: Recommended
Layer: Construction
Applicability: Most unit tests.
Trade-offs: Very small tests may not need section comments when the structure is obvious.
Sources: _Unit Testing: Principles, Practices, and Patterns_

Structure tests as Arrange, Act, and Assert:

- Arrange prepares inputs, dependencies, and starting state.
- Act performs the behavior once.
- Assert checks the observable result.

Avoid multiple Arrange-Act-Assert flows in one test. That usually means the test covers multiple behaviors.

## Keep Tests Straight-Line

Priority: Recommended
Layer: Construction
Applicability: When test logic contains conditionals, loops, or calculated expectations.
Trade-offs: Parameterized tests are acceptable when each case still has clear fixed inputs and expected results.
Sources: _Unit Testing: Principles, Practices, and Patterns_

Keep unit tests simple and mostly linear. Avoid `if`, `switch`, loops, or production-like logic in test assertions.

If a test calculates the expected value with logic similar to production code, it may be duplicating the bug instead of detecting it.

## Reuse Setup Explicitly

Priority: Suggested
Layer: Construction
Applicability: When setup code starts to repeat.
Trade-offs: Over-shared fixtures hide relevant inputs and couple tests together.
Sources: _Unit Testing: Principles, Practices, and Patterns_

Prefer explicit factory functions or builders that each test calls with the values that matter. Avoid shared setup that makes a test's preconditions invisible.
