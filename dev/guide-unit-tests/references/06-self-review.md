# Review

## Recheck The Work Against The Purpose

Priority: Essential.
Trade-off: Very small changes may omit some checks, but do not skip the purpose and behavior checks.

Review is not a separate activity from the design process. It repeats the same reasoning in reverse: purpose, context, strategy, case design, implementation.

For unit test reviews, use this same process as an external review. Do not jump into line-level style checks. Start from whether the tests protect the right behavior at the right level.

## Review Flow

Priority: Essential.
Trade-off: Inspect line-level style only after behavior, risk, and boundary are clear.

Inspect in this order:

1. What behavior is the test protecting?
2. Does that behavior match the original testing purpose?
3. Is the project context and architecture reflected correctly?
4. Is the test boundary based on behavior rather than implementation structure?
5. Does the test observe a meaningful result?
6. Are test doubles used only where they reduce volatility or verify meaningful boundary communication?
7. Is the test readable, straight-line, and low-maintenance?
8. Does hard-to-test code suggest a design change?

Do not assume every test that fails these checks should be fixed in place. If a test protects no meaningful behavior, duplicates a stronger test, or mainly exists for coverage, the smallest useful correction may be removal or replacement by a better-scoped test.

## Review Request Flow

Priority: Essential.
Trade-off: Keep the review proportional to the request, but do not skip purpose, context, and behavior checks.

When the user asks only for a review, use a flow like this:

1. Infer the likely purpose of the test from the diff, code, or user request.
2. Read enough production and test context to understand the behavior and architecture boundary.
3. Check whether the test strategy fits the behavior and risk.
4. Check whether the test code observes behavior rather than implementation details.
5. Check whether the implementation is readable and maintainable.
6. Report findings with concrete severity, the violated principle, risk, and smallest useful correction.

## Findings

Priority: Recommended.
Trade-off: Do not present a stylistic preference as a defect unless it affects behavior, refactoring resistance, readability, or maintenance cost.

When reporting a problem, include the following. Omit items that are irrelevant or redundant for the task.

- the rule or principle being violated
- the concrete maintenance or regression risk
- the smallest useful correction
- any applicability assumption

## Anti-Patterns

Treat these symptoms as review leads:

- the test asserts helper calls or call order without a boundary contract
- the test verifies a stub
- the test name only mirrors a class or method name
- the test needs private access
- the test duplicates the production algorithm
- domain behavior needs many mocks
- production code contains accommodations for test code
- the test exists only to raise coverage and does not protect meaningful behavior

Also watch for tests whose failure report would not help a maintainer decide what behavior broke. A readable failure should point to a scenario and expected result, not merely to a method name or a mocked call count.

## No Findings

If no blocking issue is found, say so clearly. Mention remaining risks only when they affect confidence, such as incomplete context, unrun tests, or unclear contracts.
