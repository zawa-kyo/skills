# Sources

## Primary Source

Vladimir Khorikov, _Unit Testing: Principles, Practices, and Patterns_.

Relevant material:

- Chapter 8: integration responsibilities, managed and unmanaged dependencies, scenario selection
- Chapter 9: interaction verification at system edges and owned adapters
- Chapter 10: production-faithful databases, test data lifecycle, and reusable setup

## Adopted Ideas

- Integration tests should cover real collaboration that narrower tests cannot prove.
- Dependencies should be production-faithful when their real behavior is in scope and their effects can be contained.
- Externally visible communication should be verified at an owned system edge.
- Test state must be independent and production behavior should not be distorted for cleanup.

## Adaptations

- "Mocks are for integration tests only" is not a universal rule.
  The skill allows unit-test doubles where appropriate while keeping integration interaction checks at meaningful boundaries.
- Managed and unmanaged dependencies are optional context-sensitive vocabulary, not the required classification model.
- Inability to run a real dependency is recorded as a confidence gap, not a categorical reason to reject all integration tests.
- Containers, parallel execution, and cleanup strategies are selected by project cost and fidelity rather than one universal prescription.
