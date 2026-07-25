# Sources

This file records how source material informs the skill.
It is maintainer guidance, not runtime guidance.

## Primary Source

Vladimir Khorikov, _Unit Testing: Principles, Practices, and Patterns_.

Relevant material:

- Chapter 1: sustainable growth, test value, and coverage limitations
- Chapter 4: shared test quality attributes, black-box testing, and Test Pyramid trade-offs
- Chapter 8: allocation between unit, integration, and E2E tests

## Adopted Ideas

- Automated tests should protect meaningful behavior at an acceptable maintenance cost.
- Regression protection, resistance to refactoring, feedback speed, and maintainability apply across test levels.
- Test boundaries should provide evidence worth their total creation, execution, diagnosis, and maintenance cost.
- Test shape depends on project architecture and complexity.

## Adaptations

- Test Pyramid is treated as a comparison model, not a prescribed ratio.
- Integration tests are not defined as every test that fails the book's unit-test definition.
  The skill describes actual boundaries so team terminology does not hide scope.
- Unit, integration, and E2E are represented as profiles over stable boundary dimensions, not an exhaustive taxonomy.
- Verification that does not clearly match a specialist is selected from product evidence and user priorities instead of being forced into the nearest level.
- Testing Trophy is acknowledged only as another portfolio model.
  No rule is derived from it without an added source.
