# Context

## Read Domain And Architecture Context

Priority: Essential.
Trade-off: For a small isolated function, minimal context may be enough. For domain behavior, skipping context often creates misleading tests.

Do not design unit tests from a class or method in isolation when the behavior depends on domain meaning, architectural boundaries, or existing test conventions.

Inspect enough project context to answer:

- Which domain behavior or invariant is involved?
- Which layer owns the decision: domain, application, adapter, UI, infrastructure, or another project-specific layer?
- Which dependencies are stable in-process collaborators, and which are shared, volatile, or process-external?
- What conventions do existing tests use for naming, fixtures, builders, and test doubles?
- Are there architecture rules that make a direct unit test inappropriate?

## Treat Test Difficulty As Design Feedback

Priority: Recommended.
Trade-off: Some difficulty is inherent in infrastructure or concurrency; not every hard test means the domain model is wrong.

Hard-to-test code can reveal design problems such as hidden dependencies, mixed responsibilities, global state, excessive orchestration, or domain rules trapped behind infrastructure.

Use the difficulty as a prompt to inspect the design before adding more mocks, flags, or test-only accessors.

## Separate Decisions From Effects

Priority: Recommended.
Trade-off: Do not over-abstract simple code that has no meaningful decision logic.

Move important decisions into a small, deterministic core when practical. Keep side effects in an outer layer that can be tested with integration tests or a small number of boundary-focused unit tests.

## Extract Concepts, Not Private Methods

Priority: Recommended.
Trade-off: Extraction is useful only when the new concept has a real responsibility and public contract.

If private behavior is important and complex, extract a meaningful concept rather than testing the private method directly.

## Context Output

Before moving to test strategy, summarize the context in practical terms:

- the behavior and domain meaning
- the owning layer or boundary
- dependencies that should remain real
- dependencies that should be controlled, faked, or mocked
- design issues that may need refactoring before or during test implementation
