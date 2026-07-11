# Rule Index

Use this file as a compact index from rule IDs to the runtime reference files that contain those rules.
It is not runtime guidance and should not become a second explanation of the skill's design.

Keep the actual guidance in `references/`.
Keep source mapping and adoption rationale in `sources.md`.
Keep design intent in `design.md`.

## Format

When adding a rule, record only the fields needed to keep the runtime references traceable:

- Rule ID: an identifier used in source mapping and maintenance discussions.
- Destination: the runtime reference file that should contain the rule.
- Priority: Essential / Recommended / Suggested.
- Source group: the source section that owns the rule's origin or adaptation.
- Rule: the runtime rule or checklist item the user should see.

Do not add rationale, drafting history, or long exception notes here.
If a rule needs explanation to be understandable, improve the runtime reference or `sources.md` instead.
Applicability should normally be clear from the destination file and heading.

## Purpose (`references/01-purpose.md`)

### UT-PUR-001

Priority: Essential
Source group: `khorikov-core`
Rule: Unit tests should support sustainable change rather than maximize test count or coverage.

### UT-PUR-002

Priority: Essential
Source group: `khorikov-core`
Rule: Tests are worth keeping only when they protect meaningful behavior at an acceptable ownership cost.

### UT-PUR-003

Priority: Essential
Source group: `khorikov-core`
Rule: Evaluate unit tests by regression protection, refactoring resistance, fast feedback, and maintainability.

### UT-PUR-004

Priority: Recommended
Source group: `khorikov-core`
Rule: Use coverage as a warning signal, not as the reason a test should exist.

## Context (`references/02-context.md`)

### UT-CTX-001

Priority: Essential
Source group: `workflow-adaptations`
Rule: Read enough domain, architecture, dependency, and existing-test context before designing tests for project code.

### UT-CTX-002

Priority: Recommended
Source group: `khorikov-core`
Rule: Treat hard-to-test valuable behavior as a possible design signal before adding more test doubles or test-only access.

### UT-CTX-003

Priority: Recommended
Source group: `khorikov-core`
Rule: Separate important decisions from side effects when practical.

### UT-CTX-004

Priority: Recommended
Source group: `khorikov-core`
Rule: Extract concepts instead of testing private methods directly.

## Test Strategy (`references/03-test-strategy.md`)

### UT-STR-001

Priority: Essential
Source group: `khorikov-core`
Rule: Design the test level and unit boundary before writing cases.

### UT-STR-002

Priority: Essential
Source group: `khorikov-core`
Rule: Choose the unit under test by behavior, not by class structure alone.

### UT-STR-003

Priority: Essential
Source group: `khorikov-core`
Rule: Focus unit tests on behavior whose regression would matter.

### UT-STR-004

Priority: Essential
Source group: `khorikov-core`
Rule: Replace or control shared and volatile dependencies, but keep stable in-process collaborators real when practical.

### UT-STR-005

Priority: Recommended
Source group: `khorikov-core`
Rule: Prefer output-based observation by default, then state-based, then interaction-based as needed.

## Test Design (`references/04-test-design.md`)

### UT-DES-001

Priority: Essential
Source group: `workflow-adaptations`
Rule: Turn the strategy into concrete cases before coding.

### UT-DES-002

Priority: Essential
Source group: `khorikov-core`
Rule: Prefer observable results over implementation details.

### UT-DES-003

Priority: Essential
Source group: `khorikov-core`
Rule: Do not verify stubs.

### UT-DES-004

Priority: Essential
Source group: `khorikov-core`
Rule: Mock only meaningful boundary communication.

### UT-DES-005

Priority: Recommended
Source group: `khorikov-core`
Rule: Test private behavior through public behavior rather than direct private access.

## Implementation (`references/05-implementation.md`)

### UT-IMP-001

Priority: Essential
Source group: `workflow-adaptations`
Rule: Implement the designed cases without letting framework convenience redefine the testing purpose.

### UT-IMP-002

Priority: Recommended
Source group: `khorikov-core`
Rule: Name tests by behavior and expected outcome.

### UT-IMP-003

Priority: Recommended
Source group: `khorikov-core`
Rule: Structure tests as Arrange, Act, Assert.

### UT-IMP-004

Priority: Recommended
Source group: `khorikov-core`
Rule: Keep tests straight-line and avoid production-code-like logic in assertions.

### UT-IMP-005

Priority: Suggested
Source group: `khorikov-core`
Rule: Reuse setup explicitly through builders or factories instead of opaque shared fixtures.

### UT-IMP-006

Priority: Essential
Source group: `khorikov-core`
Rule: Avoid polluting production code only for tests; prefer design changes that also improve the production model.

## Self-Review (`references/06-self-review.md`)

### UT-REV-001

Priority: Essential
Source group: `workflow-adaptations`
Rule: Review tests against the same workflow: purpose, context, strategy, design, and implementation.

### UT-REV-002

Priority: Essential
Source group: `workflow-adaptations`
Rule: In review mode, start from behavior and risk rather than line-level style.

### UT-REV-003

Priority: Recommended
Source group: `workflow-adaptations`
Rule: Report findings with the violated principle, concrete risk, and smallest useful correction.
