# Test Target Selection

## Prefer Valuable Behavior

Priority: Essential
Layer: Target Selection
Applicability: When deciding whether to write or keep a unit test.
Trade-offs: Some low-complexity code may be covered indirectly by higher-value tests.
Sources: _Unit Testing: Principles, Practices, and Patterns_

Focus unit tests on behavior whose regression would matter. Business rules, domain logic, important calculations, parsing, validation, and non-trivial decisions are usually strong candidates.

Avoid writing dedicated unit tests for trivial code that has little logic and is already exercised through more valuable behavior.

## Keep the Unit Behavioral

Priority: Essential
Layer: Target Selection
Applicability: When choosing the boundary of a test.
Trade-offs: A single behavior may span several classes; that can still be a unit test if it is fast and isolated from shared or volatile dependencies.
Sources: _Unit Testing: Principles, Practices, and Patterns_

The unit is the behavior under test, not necessarily one class or one method. Prefer a boundary that lets the test express what the user or domain cares about.

Do not split tests only to mirror production class structure when doing so makes tests less meaningful or more coupled to implementation.

## Isolate Shared and Volatile Dependencies

Priority: Essential
Layer: Target Selection
Applicability: When dependencies can make tests slow, non-deterministic, order-dependent, or environment-dependent.
Trade-offs: Stable in-process collaborators can often remain real objects.
Sources: _Unit Testing: Principles, Practices, and Patterns_

Replace or control shared and volatile dependencies in unit tests. Examples include current time, randomness, shared databases, file systems, remote services, global mutable state, and process-external messaging.

Do not replace stable in-process collaborators only because they are separate classes.

## Do Not Test Private Details Directly

Priority: Recommended
Layer: Target Selection
Applicability: When the only way to test logic seems to be a private method or private state.
Trade-offs: If private logic is complex and valuable, extract a testable concept with a public contract rather than exposing internals just for tests.
Sources: _Unit Testing: Principles, Practices, and Patterns_

Test private behavior through observable public behavior. Direct private tests usually couple tests to implementation details and make refactoring harder.
