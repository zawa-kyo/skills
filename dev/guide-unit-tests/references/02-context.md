# Context

## Read Domain And Architecture Context

Priority: Essential
Layer: Context
Applicability: Before designing tests for existing project code.
Trade-offs: For a small isolated function, minimal context may be enough. For domain behavior, skipping context often creates misleading tests.
Sources: Local project structure and _Unit Testing: Principles, Practices, and Patterns_

Do not design unit tests from a class or method in isolation when the behavior depends on domain meaning, architectural boundaries, or existing test conventions.

Inspect enough project context to answer:

- Which domain behavior or invariant is involved?
- Which layer owns the decision: domain, application, adapter, UI, infrastructure, or another project-specific layer?
- Which dependencies are stable in-process collaborators, and which are shared, volatile, or process-external?
- What conventions do existing tests use for naming, fixtures, builders, and test doubles?
- Are there architecture rules that make a direct unit test inappropriate?

## Treat Test Difficulty As Design Feedback

Priority: Recommended
Layer: Context
Applicability: When a valuable behavior is hard to unit test.
Trade-offs: Some difficulty is inherent in infrastructure or concurrency; not every hard test means the domain model is wrong.
Sources: _Unit Testing: Principles, Practices, and Patterns_

Hard-to-test code can reveal design problems such as hidden dependencies, mixed responsibilities, global state, excessive orchestration, or domain rules trapped behind infrastructure.

Use the difficulty as a prompt to inspect the design before adding more mocks, flags, or test-only accessors.

## Separate Decisions From Effects

Priority: Recommended
Layer: Context
Applicability: When behavior mixes domain decisions with I/O, persistence, logging, messaging, or UI concerns.
Trade-offs: Do not over-abstract simple code that has no meaningful decision logic.
Sources: _Unit Testing: Principles, Practices, and Patterns_

Move important decisions into a small, deterministic core when practical. Keep side effects in an outer layer that can be tested with integration tests or a small number of boundary-focused unit tests.

## Extract Concepts, Not Private Methods

Priority: Recommended
Layer: Context
Applicability: When private logic is complex enough to deserve direct testing.
Trade-offs: Extraction is useful only when the new concept has a real responsibility and public contract.
Sources: _Unit Testing: Principles, Practices, and Patterns_

If private behavior is important and complex, extract a meaningful concept rather than testing the private method directly.

## Context Output

Before moving to test strategy, summarize the context in practical terms:

- the behavior and domain meaning
- the owning layer or boundary
- dependencies that should remain real
- dependencies that should be controlled, faked, or mocked
- design issues that may need refactoring before or during test implementation
