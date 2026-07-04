# Implementation

## Implement The Designed Cases

Priority: Essential.
Trade-off: Follow local framework conventions when they preserve the same behavior-focused intent.

Implement the cases produced by the design step. Do not let framework convenience or mocking tools redefine what the test is meant to protect.

If the code is not testable, consider a production refactor that improves the model. Do not add test-only seams that weaken production behavior.

## Name Tests By Behavior

Priority: Recommended.
Trade-off: Follow local naming conventions when they already communicate behavior clearly.

Name tests so a reader can understand the behavior and expected outcome. Avoid names that only repeat method names or implementation structure.

## Use Arrange Act Assert

Priority: Recommended.
Trade-off: Very small tests may not need section comments when the structure is obvious.

Structure tests as Arrange, Act, and Assert:

- Arrange prepares inputs, dependencies, and starting state.
- Act performs the behavior once.
- Assert checks the observable result.

Avoid multiple Arrange-Act-Assert flows in one test. That usually means the test covers multiple behaviors.

## Keep Tests Straight-Line

Priority: Recommended.
Trade-off: Parameterized tests are acceptable when each case still has clear fixed inputs and expected results.

Keep unit tests simple and mostly linear. Avoid `if`, `switch`, loops, or production-like logic in test assertions.

If a test calculates the expected value with logic similar to production code, it may be duplicating the bug instead of detecting it.

## Reuse Setup Explicitly

Priority: Suggested.
Trade-off: Over-shared fixtures hide relevant inputs and couple tests together.

Prefer explicit factory functions or builders that each test calls with the values that matter. Avoid shared setup that makes a test's preconditions invisible.

## Avoid Test-Induced Code Pollution

Priority: Essential.
Trade-off: Improving design for testability is valid; adding switches or public state only for tests is not.

Do not add test-only branches, public setters, mutable globals, or relaxed contracts just to make unit tests pass. Prefer design changes that improve the production model as well.

## Implementation Output

When reporting implementation work, include:

- tests added or changed
- production refactors made for testability, if any
- behavior each test protects
- commands or checks run
- remaining risks, such as untested integration boundaries
