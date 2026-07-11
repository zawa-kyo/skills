# Design

## Motivation

Automated tests are not automatically assets. A test becomes a liability when it protects behavior that does not matter, locks onto implementation details, duplicates production logic, or makes ordinary refactoring expensive. In that state, more tests or higher coverage can make the codebase harder to change and the test suite harder to trust.

This skill exists to keep test writing from becoming the goal. Start by asking why the test should exist, then decide the behavior, risk, unit boundary, and observation style before choosing test code shape or test double usage. That sequence gives agents and humans a guardrail for treating unit tests as a design and maintenance practice rather than a coverage exercise.

## Primary Source

The primary source is Vladimir Khorikov's _Unit Testing: Principles, Practices, and Patterns_. The book is useful because it gives a coherent vocabulary for test value, refactoring resistance, observable behavior, test doubles, and the trade-offs between output, state, and interaction testing.

This skill does not treat that book as the only source of truth. The skill should remain open to other books, local team practices, language constraints, and lessons learned from real projects.

## Design Approach

Organize the skill by the thinking sequence used when designing, implementing, or reviewing unit tests, not by source chapter, testing school, or isolated use case.

| Step | File | Role |
| ---- | ---- | ---- |
| Purpose | `01-purpose.md` | Covers why the test should exist and what risk it protects. |
| Context | `02-context.md` | Covers domain, architecture, dependency, and existing-test context. |
| Test strategy | `03-test-strategy.md` | Covers test level, unit boundary, dependency handling, and observation style. |
| Test design | `04-test-design.md` | Covers concrete cases, assertions, and test double roles. |
| Implementation | `05-implementation.md` | Covers test code shape and safe testability refactors. |
| Self-review | `06-self-review.md` | Covers self-review and compressed external review. |

This structure keeps the skill extensible. A new source should strengthen, refine, or challenge the relevant workflow step instead of creating a parallel chapter summary or a separate use-case silo.

Review is not a separate branch of the skill. It uses the same workflow in compressed form: infer purpose, read enough context, check strategy, inspect concrete assertions, inspect implementation quality, then report findings.

## Runtime And Maintenance Files

`references/` and `references-ja/` contain runtime guidance. Agents should read those files while using the skill for unit test creation, review, boundary selection, assertion strategy, or design feedback. Keep them focused on rules, checklists, priority, and trade-offs needed at execution time.

`maintenance/` and `maintenance-ja/` contain maintainer guidance. Agents should not read those files during ordinary unit test guidance. Use them when editing this skill, changing its rule structure, tracing source mapping, reviewing its design, or discussing IDs and priorities.

Files in each English/Japanese pair must stay aligned by filename and meaning. The English and Japanese versions do not need to be line-by-line translations, but they must express the same runtime rules and maintainer metadata.

When adding `references/example.md`, also add `references-ja/example.md` in the same change. When adding `maintenance/example.md`, also add `maintenance-ja/example.md` in the same change.

## Source Management

Use `maintenance/sources.md` for source mapping, rule IDs, adopted ideas, rejected ideas, and pending questions. Do not turn runtime reference files into a book index, source map, or rule ID ledger.
