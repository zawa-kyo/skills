# Sources

## Primary Source

Vladimir Khorikov, _Unit Testing: Principles, Practices, and Patterns_.

Relevant material:

- Chapter 2: E2E as broad integration from an end-user perspective
- Chapter 4: high regression protection, refactoring resistance, feedback cost, and Test Pyramid placement
- Chapter 8: deployed entry point, included dependencies, longest happy path, and post-deployment sanity checks

## Adopted Ideas

- E2E tests exercise a broad system boundary from an external client perspective.
- They should focus on critical representative journeys.
- Their broad regression protection must justify slow feedback and high maintenance cost.
- Managed state should be observed through the application when representing a real client.

## Local Adaptations

The source does not provide enough detail for reliable environment operation.
The skill adds conservative framework-neutral guidance:

- inspect and respect the project's E2E boundary instead of requiring one deployment model
- declare environment assumptions and dependency exclusions
- use isolated state
- wait for observable conditions with a timeout
- capture diagnostic evidence
- treat persistent flakiness as a defect

These are workflow adaptations, not claims that the source covers specific browser or distributed-test techniques.
