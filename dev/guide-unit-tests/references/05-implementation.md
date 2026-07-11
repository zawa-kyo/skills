# Implementation

## Implement The Designed Cases

Priority: Essential.
Trade-off: Follow local framework conventions when they preserve the same behavior-focused intent.

Implement the cases produced by the design step. Do not let framework convenience or mocking tools redefine what the test is meant to protect.

If the code is not testable, include refactoring in the options you consider. Do not make inessential changes such as adding test-only getters. Untestable code always indicates a design problem.

## Name Tests By Behavior

Priority: Recommended.
Trade-off: Follow local naming conventions when they already communicate behavior clearly.

Name tests so a reader can understand the behavior and expected outcome. Avoid names that only repeat method names or implementation structure.

Prefer names that read like a scenario:

```typescript
it("rejects an expired coupon without changing the cart total", () => {
  // ...
});
```

Avoid names that only mirror code shape, such as `applyCoupon_returns_false`.

## Use Arrange Act Assert

Priority: Recommended.
Trade-off: Very small tests with obvious structure may not need section comments.

Structure tests as Arrange, Act, and Assert:

| Phase   | Role                                              |
| ------- | ------------------------------------------------- |
| Arrange | Prepare inputs, dependencies, and starting state. |
| Act     | Perform the behavior once.                        |
| Assert  | Check the observable result.                      |

Avoid multiple Arrange-Act-Assert flows in one test. That indicates the test covers multiple behaviors and is unsuitable as a unit test.

```typescript
it("rejects an expired coupon without changing the cart total", () => {
  const cart = aCart({ total: Money.usd(40) });
  const coupon = aCoupon({ expiresAt: new Date("2026-01-01") });

  const result = applyCoupon(cart, coupon, new Date("2026-02-01"));

  expect(result).toEqual({
    accepted: false,
    reason: "coupon_expired",
    total: Money.usd(40),
  });
});
```

The test has one behavior execution and asserts the externally meaningful result.

## Keep Tests Straight-Line

Priority: Recommended.
Trade-off: Parameterized tests are acceptable when each case still has clear fixed inputs and expected results.

Unit tests should be simple and branch-free. Avoid `if`, `switch`, loops, or production-code-like logic in test assertions.

If a test calculates the expected value with logic similar to production code, it may be duplicating the bug instead of detecting it.

Parameterized tests are useful when only the examples vary:

```typescript
it.each([
  [0, false],
  [5, false],
  [6, true],
])("treats length %i as long: %s", (length, expected) => {
  expect(isLong("x".repeat(length))).toBe(expected);
});
```

Avoid parameterized tests when each row needs different branching, mocks, or expectation logic. Split those into named scenarios.

## Reuse Setup Explicitly

Priority: Suggested.
Trade-off: Over-shared fixtures can hide relevant inputs and couple tests together.

Prefer explicit factory functions or builders that each test calls with the values that matter. Avoid setup that makes a test's preconditions invisible.

```typescript
function aCoupon(overrides: Partial<Coupon> = {}): Coupon {
  return {
    code: "SAVE10",
    discountPercent: 10,
    expiresAt: new Date("2026-12-31"),
    ...overrides,
  };
}
```

The test should pass the values that matter for the scenario. Defaults should be valid but uninteresting.

## Avoid Polluting Production Code For Tests

Priority: Essential.
Trade-off: Improving design for testability is valid; adding switches or public state only for tests is not.

Do not add test-only branches, public setters, mutable globals, or relaxed contracts just to make unit tests pass. Prefer design changes that improve the production model as well.

## Implementation Output

When reporting implementation work, include the following. Omit items that are irrelevant or redundant for the task.

- tests added or changed
- production code refactors made for testability, if any
- behavior each test should protect
- commands or checks run
- remaining risks, such as untested integration boundaries
