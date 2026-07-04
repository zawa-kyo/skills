# Test Design

## Design Concrete Cases Before Coding

Priority: Essential.
Trade-off: For very small pure functions, the design can be brief. Still identify the behavior and expected result before choosing assertions.

Turn the strategy into concrete cases before writing test code. Each case should name the behavior, the important input or precondition, and the expected observable result.

Prefer a small set of meaningful examples over many cases that only enumerate implementation branches.

## Prefer Observable Results

Priority: Essential.
Trade-off: Interaction checks are sometimes necessary at system boundaries.

Prefer assertions about observable results: returned values, externally visible state, emitted domain events, or other outcomes that express the behavior's meaning.

Avoid assertions about intermediate state, private algorithms, call order, or helper calls unless those details are themselves the public contract.

## Do Not Verify Stubs

Priority: Essential.
Trade-off: A single test double can act as both a stub and a mock; only verify the output side that represents behavior.

Do not assert interactions with stubs. A stub feeds the system under test; verifying how it was queried usually checks implementation details rather than behavior.

## Mock Only Meaningful Boundary Communication

Priority: Essential.
Trade-off: Some adapter code is better covered by integration tests instead of unit tests with heavy mocking.

Use mocks to verify communication that is meaningful at a system boundary, such as sending a message, publishing an event, or calling an unmanaged dependency.

Avoid mocking ordinary domain collaborators only to force one-class-at-a-time tests.

## Do Not Test Private Details Directly

Priority: Recommended.
Trade-off: If private logic is complex and valuable, extract a testable concept with a public contract rather than exposing internals just for tests.

Test private behavior through observable public behavior. Direct private tests usually couple tests to implementation details and make refactoring harder.

## Case Design Output

For each test case, specify:

- behavior name
- given state or input
- action
- expected observable result
- test double role, if any: stub, fake, spy, or mock
- reason the case is valuable
