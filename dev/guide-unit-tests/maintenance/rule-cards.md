# Rule Notes

Use this file as the maintenance note for adding, revising, or removing rules.
It is not runtime guidance. It helps maintainers decide which workflow step owns each rule.

Keep source mapping and adoption rationale in `sources.md`.
Do not carry source IDs or detailed bibliography links in this file.

## Format

When adding a rule, record these points:

- Workflow step: the step that should own the rule.
- Applicability: the situation where the rule is needed.
- Destination: the runtime reference file that should contain the rule.
- Priority: Essential / Recommended / Suggested.
- Rule: the rule the user should see.
- Exceptions or notes: valid exceptions or common misuses.

## Purpose

Destination: `references/01-purpose.md`

Priority: Essential

Unit tests should support sustainable change rather than maximize test count or coverage.
Low-value tests should be improved, moved to another test type, or removed.

## Context

Destination: `references/02-context.md`

Priority: Essential

Read enough domain, architecture, dependency, and existing-test context before designing tests for project code.
Hard-to-test valuable behavior can signal a design issue, but not every hard test means the domain model is wrong.

## Test Strategy

Destination: `references/03-test-strategy.md`

Priority: Essential

Choose the unit under test by behavior, not by class structure alone.
A single behavior can span multiple classes when the test remains fast and isolated from shared or volatile dependencies.

## Test Design

Destination: `references/04-test-design.md`

Priority: Essential

Prefer observable results over implementation details.
Verify only meaningful boundary communication, and do not verify stubs.

## Implementation

Destination: `references/05-implementation.md`

Priority: Recommended

Keep tests structured around Arrange, Act, and Assert.
Avoid test-only production code changes; prefer refactors that improve the production model as well.

## Self-Review

Destination: `references/06-self-review.md`

Priority: Essential

Review tests against the same workflow: purpose, context, strategy, design, and implementation.
For review requests, compress the workflow rather than switching to a separate checklist.
