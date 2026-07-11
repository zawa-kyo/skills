# Purpose

## Establish The Testing Purpose

Priority: Essential.
Trade-off: A test with no clear value should be improved, moved to another test type, or removed.

Automated tests as a whole support sustainable product growth. Unit tests contribute by checking small behaviors quickly, deterministically, and in a way that supports refactoring.

Integration tests check whether components or external boundaries work together correctly. E2E tests check whether representative user journeys work through the whole system. Do not ask unit tests to provide every guarantee; choose the test type that matches the risk.

Unit tests are valuable when they detect meaningful regressions, enable refactoring, run quickly, and remain easy to understand.

Do not treat tests as free assets. Like production code, test code has ownership cost:

- Tests must be read, run, debugged, and updated as behavior changes.
- Tests that are not kept trustworthy slow down maintainer judgment.
- Tests with no explainable value tend to become liabilities rather than assets.

Before designing or reviewing tests, state what the tests are meant to protect. "Increase coverage" or "add tests because tests are missing" is not enough reason to add a test. Add a test only when you can name the behavior, regression risk, or maintenance benefit it protects.

Good purpose statements are specific enough to choose test cases and assertions:

- BAD: Add coverage for `DiscountService`.
- GOOD: Protect the rule that expired coupons are rejected without changing the cart total.
- BAD: Test the user repository.
- GOOD: Protect the application behavior when an existing email address is registered again.

If you cannot name the failure that would matter, pause before writing tests. The next useful step may be reading domain context, moving the check to another test type, or deciding that the code does not need a dedicated unit test.

## Quality Attributes

Priority: Essential.
Trade-off: No single test maximizes every attribute; choose based on the behavior's importance and risk.

Evaluate unit tests with these attributes:

- Protection against regressions: the test fails when important behavior breaks.
- Resistance to refactoring: the test does not fail merely because implementation details changed.
- Fast feedback: the test is cheap enough to run frequently.
- Maintainability: the test is clear, focused, and low-cost to update.

Use these attributes as trade-offs, not slogans. A low-risk accessor may not deserve a dedicated unit test. A business rule with high regression cost may deserve multiple examples even when coverage is already high.

Use the four attributes to explain trade-offs in concrete terms:

- A pure pricing rule can have high regression protection, high refactoring resistance, fast feedback, and low maintenance cost, so it is a strong unit-test target.
- A controller test with many mocks may run quickly, but it often loses refactoring resistance and maintainability.
- A test that only checks a getter may be fast and maintainable, but it usually offers little regression protection.

## Coverage Metrics

Priority: Recommended.
Trade-off: Coverage can expose untested areas, but it cannot prove test quality.

Use coverage as a warning signal, not as a target by itself. Low coverage may indicate that important code is not tested. High coverage does not prove that behavior is asserted correctly.

Do not write tests only to satisfy a coverage number.

When a user asks for coverage, use coverage to find candidates, then choose tests by behavior. A test that executes a branch without verifying its observable result has increased coverage but has not protected a behavior.

## Purpose Checklist

Use these questions before moving to context or design:

- What behavior, rule, or risk is worth protecting?
- What failure would matter to a user, domain expert, maintainer, or dependent system?
- Is a unit test the right level, or should another test type cover this risk?
- What maintenance cost is acceptable for this behavior?
- What would make the proposed test a liability rather than an asset?
