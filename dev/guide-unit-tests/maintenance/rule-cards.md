# Rule Notes

Use this file as the maintenance note for adding, revising, or removing rules.
It is not runtime guidance. It helps maintainers decide which workflow step owns each rule.

Keep source mapping and adoption rationale in `sources.md`.
Do not carry detailed bibliography links in this file.

## Format

When adding a rule, record these points:

- Rule ID: a stable identifier used in maintenance notes and source mapping.
- Destination: the runtime reference file that should contain the rule.
- Priority: Essential / Recommended / Suggested.
- Source group: the source section that owns the rule's origin or adaptation.
- Rule: the runtime rule or checklist item the user should see.
- Notes: maintainer-only rationale, exceptions, or migration notes.

Applicability should normally be inferred from the workflow file and heading. If a rule needs extra applicability notes to stay understandable, the file structure is probably carrying too little meaning.

## Purpose (`references/01-purpose.md`)

### UT-PUR-001

Priority: Essential
Source group: `khorikov-core`
Rule: Unit tests should support sustainable change rather than maximize test count or coverage.
Notes: Use to reframe coverage-only requests.

### UT-PUR-002

Priority: Essential
Source group: `khorikov-core`
Rule: Tests are worth keeping only when they protect meaningful behavior at an acceptable ownership cost.
Notes: Covers the "tests are not free assets" point.

### UT-PUR-003

Priority: Essential
Source group: `khorikov-core`
Rule: Evaluate unit tests by regression protection, refactoring resistance, fast feedback, and maintainability.
Notes: Runtime file presents these as evaluation attributes, not metadata.

### UT-PUR-004

Priority: Recommended
Source group: `khorikov-core`
Rule: Use coverage as a warning signal, not as the reason a test should exist.
Notes: Applies when requests are phrased in coverage terms.

## Context (`references/02-context.md`)

### UT-CTX-001

Priority: Essential
Source group: `workflow-adaptations`
Rule: Read enough domain, architecture, dependency, and existing-test context before designing tests for project code.
Notes: Workflow-specific addition for project-aware test guidance.

### UT-CTX-002

Priority: Recommended
Source group: `khorikov-core`
Rule: Treat hard-to-test valuable behavior as a possible design signal before adding more test doubles or test-only access.
Notes: Keep the caveat that infrastructure and concurrency can still be inherently hard.

### UT-CTX-003

Priority: Recommended
Source group: `khorikov-core`
Rule: Separate important decisions from side effects when practical.
Notes: Runtime wording should stay concrete rather than abstract architecture talk.

### UT-CTX-004

Priority: Recommended
Source group: `khorikov-core`
Rule: Extract concepts instead of testing private methods directly.
Notes: Belongs in context because it is usually a design-reading problem before it is a test-design problem.

## Test Strategy (`references/03-test-strategy.md`)

### UT-STR-001

Priority: Essential
Source group: `khorikov-core`
Rule: Design the test level and unit boundary before writing cases.
Notes: File ownership already implies when this applies.

### UT-STR-002

Priority: Essential
Source group: `khorikov-core`
Rule: Choose the unit under test by behavior, not by class structure alone.
Notes: A single behavior can span multiple classes if the test stays fast and isolated.

### UT-STR-003

Priority: Essential
Source group: `khorikov-core`
Rule: Focus unit tests on behavior whose regression would matter.
Notes: Trivial code may be covered indirectly.

### UT-STR-004

Priority: Essential
Source group: `khorikov-core`
Rule: Replace or control shared and volatile dependencies, but keep stable in-process collaborators real when practical.
Notes: Helps keep mocking decisions in strategy, not implementation.

### UT-STR-005

Priority: Recommended
Source group: `khorikov-core`
Rule: Prefer output-based observation by default, then state-based, then interaction-based as needed.
Notes: Runtime file should phrase this as a default order, not a rigid law.

## Test Design (`references/04-test-design.md`)

### UT-DES-001

Priority: Essential
Source group: `workflow-adaptations`
Rule: Turn the strategy into concrete cases before coding.
Notes: Added to make the workflow explicit between strategy and implementation.

### UT-DES-002

Priority: Essential
Source group: `khorikov-core`
Rule: Prefer observable results over implementation details.
Notes: Includes the public-contract exception.

### UT-DES-003

Priority: Essential
Source group: `khorikov-core`
Rule: Do not verify stubs.
Notes: Keep separated from mock guidance because the maintenance discussion differs.

### UT-DES-004

Priority: Essential
Source group: `khorikov-core`
Rule: Mock only meaningful boundary communication.
Notes: Adapter-heavy code may still be better covered by integration tests.

### UT-DES-005

Priority: Recommended
Source group: `khorikov-core`
Rule: Test private behavior through public behavior rather than direct private access.
Notes: Related to `UT-CTX-004` but belongs here as a case-design check.

## Implementation (`references/05-implementation.md`)

### UT-IMP-001

Priority: Essential
Source group: `workflow-adaptations`
Rule: Implement the designed cases without letting framework convenience redefine the testing purpose.
Notes: Guards the strategy-to-code handoff.

### UT-IMP-002

Priority: Recommended
Source group: `khorikov-core`
Rule: Name tests by behavior and expected outcome.
Notes: Avoid method-name mirroring.

### UT-IMP-003

Priority: Recommended
Source group: `khorikov-core`
Rule: Structure tests as Arrange, Act, Assert.
Notes: Tiny tests may omit labels when the structure is obvious.

### UT-IMP-004

Priority: Recommended
Source group: `khorikov-core`
Rule: Keep tests straight-line and avoid production-like logic in assertions.
Notes: Parameterized tests are fine when each case stays explicit.

### UT-IMP-005

Priority: Suggested
Source group: `khorikov-core`
Rule: Reuse setup explicitly through builders or factories instead of opaque shared fixtures.
Notes: This is a consistency default, not a hard rule.

### UT-IMP-006

Priority: Essential
Source group: `khorikov-core`
Rule: Avoid test-induced production code pollution; prefer design improvements that help production too.
Notes: Includes test-only branches, public state, and weakened contracts.

## Self-Review (`references/06-self-review.md`)

### UT-REV-001

Priority: Essential
Source group: `workflow-adaptations`
Rule: Review tests against the same workflow: purpose, context, strategy, design, and implementation.
Notes: Review is a compressed pass over the same sequence, not a separate discipline.

### UT-REV-002

Priority: Essential
Source group: `workflow-adaptations`
Rule: In review mode, start from behavior and risk rather than line-level style.
Notes: Keeps review findings tied to test value.

### UT-REV-003

Priority: Recommended
Source group: `workflow-adaptations`
Rule: Report findings with the violated principle, concrete risk, and smallest useful correction.
Notes: Runtime file also includes anti-pattern prompts and no-findings guidance.
