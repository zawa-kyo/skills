# Observation And Oracles

## Prefer Observable Results

Priority: Essential
Layer: Observation
Applicability: When choosing assertions for a unit test.
Trade-offs: Interaction checks are sometimes necessary at system boundaries.
Sources: _Unit Testing: Principles, Practices, and Patterns_

Prefer assertions about observable results: returned values, externally visible state, emitted domain events, or other outcomes that express the behavior's meaning.

Avoid assertions about intermediate state, private algorithms, call order, or helper calls unless those details are themselves the public contract.

## Choose the Observation Style Deliberately

Priority: Recommended
Layer: Observation
Applicability: When a behavior can be checked several ways.
Trade-offs: Output-based tests are usually easiest to maintain, but state-based tests are valid when state is the observable result.
Sources: _Unit Testing: Principles, Practices, and Patterns_

Use this order as a default:

1. Output-based testing when the behavior can be represented as a return value or pure result.
2. State-based testing when the meaningful result is an observable state change.
3. Interaction-based testing when the meaningful result is communication with a boundary dependency.

## Do Not Verify Stubs

Priority: Essential
Layer: Observation
Applicability: When using test doubles that only provide input to the system under test.
Trade-offs: A single test double can act as both a stub and a mock; only verify the output side that represents behavior.
Sources: _Unit Testing: Principles, Practices, and Patterns_

Do not assert interactions with stubs. A stub feeds the system under test; verifying how it was queried usually checks implementation details rather than behavior.

## Mock Only Meaningful Boundary Communication

Priority: Essential
Layer: Observation
Applicability: When verifying interactions with dependencies.
Trade-offs: Some adapter code is better covered by integration tests instead of unit tests with heavy mocking.
Sources: _Unit Testing: Principles, Practices, and Patterns_

Use mocks to verify communication that is meaningful at a system boundary, such as sending a message, publishing an event, or calling an unmanaged dependency.

Avoid mocking ordinary domain collaborators only to force one-class-at-a-time tests.
