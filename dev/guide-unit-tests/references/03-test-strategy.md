# Test Strategy

## Choose The Test Level And Boundary

Priority: Essential.
Trade-off: Some risks are better covered by integration, contract, or E2E tests. Keep this skill focused on unit tests and name the boundary when another test type is more appropriate.

Design the test strategy before writing test code. Decide which behavior belongs in a unit test, where the unit boundary sits, and what the test should observe.

The unit is the behavior under test, not necessarily one class or one method. A single behavior may span several classes when the test remains fast, deterministic, and isolated from shared or volatile dependencies.

## Prefer Valuable Behavior

Priority: Essential.
Trade-off: Some low-complexity code may be covered indirectly by higher-value tests.

Focus unit tests on behavior whose regression would matter. Business rules, domain logic, important calculations, parsing, validation, and non-trivial decisions are usually strong candidates.

Avoid writing dedicated unit tests for trivial code that has little logic and is already exercised through more valuable behavior.

## Isolate Shared And Volatile Dependencies

Priority: Essential.
Trade-off: Stable in-process collaborators can often remain real objects.

Replace or control shared and volatile dependencies in unit tests. Examples include current time, randomness, shared databases, file systems, remote services, global mutable state, and process-external messaging.

Do not replace stable in-process collaborators only because they are separate classes.

## Choose The Observation Style

Priority: Recommended.
Trade-off: Output-based tests are usually easiest to maintain, but state-based tests are valid when state is the observable result.

Use this order as a default:

1. Output-based testing when the behavior can be represented as a return value or pure result.
2. State-based testing when the meaningful result is an observable state change.
3. Interaction-based testing when the meaningful result is communication with a boundary dependency.

## Strategy Output

Produce a short strategy before implementation:

- behavior to protect
- chosen unit boundary
- dependencies to keep real
- dependencies to control or replace
- observation style: output, state, or interaction
- risks that need another test type instead of a unit test
