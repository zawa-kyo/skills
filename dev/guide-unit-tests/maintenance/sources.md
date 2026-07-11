# Sources

This file records how external and local sources are used. It is for maintainers, not for runtime guidance.

## Source Groups

Use source groups to map runtime rules back to their origin without putting citation blocks in `references/`.

### `khorikov-core`

Author: Vladimir Khorikov.

Rules:

- `UT-PUR-001` to `UT-PUR-004`
- `UT-CTX-002` to `UT-CTX-004`
- `UT-STR-001` to `UT-STR-005`
- `UT-DES-002` to `UT-DES-005`
- `UT-IMP-002` to `UT-IMP-006`

Role: Initial source for the skill's core vocabulary and default rule set.

## Overall Policy

- Unit tests should support sustainable project growth.
- Good tests balance regression protection, refactoring resistance, fast feedback, and maintainability.
- Coverage is a weak positive signal and a useful negative signal.
- Tests should focus on observable behavior rather than implementation details.
- Stubs should not be verified.
- Mocks are most valuable at meaningful system boundaries.
- Hard-to-test code can reveal design problems.

### `workflow-adaptations`

Primary source: local skill design for workflow-oriented guidance, built on top of the core testing ideas above

Rules:

- `UT-CTX-001`
- `UT-DES-001`
- `UT-IMP-001`
- `UT-REV-001` to `UT-REV-003`

Role: Local adaptation that turns topic guidance into a purpose-to-review workflow for agents and maintainers.

## Adapted Policy

- The classical school is treated as a useful default for many domain-heavy systems, not as the only valid approach.
- Domain logic is treated as a high-value target, not as the only unit-testable target.
- Integration and database testing material is used only to clarify unit test boundaries.
- Project context is read before strategy so agents do not generate locally correct but repo-inappropriate tests.
- Review is modeled as a compressed pass over the same workflow, not as a separate heuristic tree.
- Short examples such as sample code are allowed when they clarify a rule without limiting the skill's behavior to a specific framework.
