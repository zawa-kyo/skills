# Rule Notes

Use this file as the maintenance note for adding, revising, or removing rules.
It is not end-user guidance. It helps maintainers decide which situation owns each rule.

Keep source mapping and adoption rationale in `sources.md`.
Do not carry source IDs or detailed bibliography links in this file.

## Format

When adding a rule, record these points:

- Applicability: the situation where the rule is needed.
- Destination: the reference file that should contain the rule.
- Priority: Essential / Recommended / Suggested.
- Rule: the rule the user should see.
- Exceptions or notes: valid exceptions or common misuses.

## General Unit Test Work

Destination: `references/foundations.md`

Priority: Essential

Unit tests should support sustainable change rather than maximize test count.
Low-value tests should be improved or removed.

## Choosing Test Boundaries

Destination: `references/test-target-selection.md`

Priority: Essential

Choose the unit under test by behavior, not by class structure alone.
A single behavior can span multiple classes.

## Choosing Verification Strategy

Destination: `references/observation-and-oracles.md`

Priority: Essential

Prefer observable results over implementation details.
Boundary interactions may need mocks.

## Writing Test Code

Destination: `references/test-construction.md`

Priority: Recommended

Keep tests structured around Arrange, Act, and Assert.
Tiny tests may not need section comments when the structure is obvious.

## Discussing Testability

Destination: `references/design-feedback.md`

Priority: Recommended

Treat hard-to-test valuable behavior as design feedback.
Not every hard test means the domain design is wrong.
