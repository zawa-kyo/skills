# Design Feedback

## Treat Test Difficulty As A Signal

Priority: Recommended
Layer: Design Feedback
Applicability: When a valuable behavior is hard to unit test.
Trade-offs: Some difficulty is inherent in infrastructure or concurrency; not every hard test means the domain model is wrong.
Sources: _Unit Testing: Principles, Practices, and Patterns_

Hard-to-test code can reveal design problems such as hidden dependencies, mixed responsibilities, global state, excessive orchestration, or domain rules trapped behind infrastructure.

Use the difficulty as a prompt to inspect the design before adding more mocks, flags, or test-only accessors.

## Separate Decisions From Effects

Priority: Recommended
Layer: Design Feedback
Applicability: When behavior mixes domain decisions with I/O, persistence, logging, messaging, or UI concerns.
Trade-offs: Do not over-abstract simple code that has no meaningful decision logic.
Sources: _Unit Testing: Principles, Practices, and Patterns_

Move important decisions into a small, deterministic core when practical. Keep side effects in an outer layer that can be tested with integration tests or a small number of boundary-focused unit tests.

## Avoid Test-Induced Code Pollution

Priority: Essential
Layer: Design Feedback
Applicability: When production code is changed only to make tests easier.
Trade-offs: Improving design for testability is valid; adding switches or public state only for tests is not.
Sources: _Unit Testing: Principles, Practices, and Patterns_

Do not add test-only branches, public setters, mutable globals, or relaxed contracts just to make unit tests pass. Prefer design changes that improve the production model as well.

## Extract Concepts, Not Private Methods

Priority: Recommended
Layer: Design Feedback
Applicability: When private logic is complex enough to deserve direct testing.
Trade-offs: Extraction is useful only when the new concept has a real responsibility and public contract.
Sources: _Unit Testing: Principles, Practices, and Patterns_

If private behavior is important and complex, extract a meaningful concept rather than testing the private method directly.
