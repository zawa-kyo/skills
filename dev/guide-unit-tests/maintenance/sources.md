# Sources

This file records how external and local sources are used. It is for maintainers, not for end-user guidance.

## Unit Testing: Principles, Practices, and Patterns

Author: Vladimir Khorikov

Role: Initial source for the skill's core vocabulary and first rule set.

Adopted ideas:

- Unit tests should support sustainable project growth.
- Good tests balance regression protection, refactoring resistance, fast feedback, and maintainability.
- Coverage is a weak positive signal and a useful negative signal.
- Tests should focus on observable behavior rather than implementation details.
- Stubs should not be verified.
- Mocks are most valuable at meaningful system boundaries.
- Hard-to-test code can reveal design problems.

Scoped or adapted ideas:

- The classical school is treated as a useful default for many domain-heavy systems, not as the only valid approach.
- Domain logic is treated as a high-value target, not as the only unit-testable target.
- Integration and database testing material is used only to clarify unit test boundaries.

Rejected or not yet adopted:

- Framework-specific examples are not carried into the core references.
- Long examples and historical explanations are not copied into user-facing references.

Open questions:

- Whether to add references from _xUnit Test Patterns_ for fixture and test data patterns.
- Whether to add language-specific notes later without weakening the framework-neutral core.
