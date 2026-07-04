# Design Background

## Why This Skill Exists

This skill exists to help agents and humans work with unit tests as a design and maintenance practice, not merely as a way to increase coverage.

Unit tests are useful when they protect important behavior while keeping maintenance cost low. They become harmful when they lock onto implementation details, overuse mocks, duplicate production logic, or make ordinary refactoring expensive.

## Initial Source

The initial source is Vladimir Khorikov's _Unit Testing: Principles, Practices, and Patterns_. The book is valuable because it gives a coherent vocabulary for test value, refactoring resistance, observable behavior, test doubles, and the trade-offs between output, state, and interaction testing.

This skill does not treat that book as the only source of truth. The skill should remain open to other books, local team practices, language constraints, and lessons learned from real projects.

## Design Choice

Organize the skill by the thinking sequence used when designing, implementing, or reviewing unit tests, not by source chapter, testing school, or isolated use case:

- `01-purpose.md` covers why the test should exist and what risk it protects.
- `02-context.md` covers domain, architecture, dependency, and existing-test context.
- `03-test-strategy.md` covers test level, unit boundary, dependency handling, and observation style.
- `04-test-design.md` covers concrete cases, assertions, and test double roles.
- `05-implementation.md` covers test code shape and safe testability refactors.
- `06-self-review.md` covers self-review and compressed external review.

This structure keeps the skill extensible. A new source should strengthen, refine, or challenge the relevant workflow step instead of creating a parallel chapter summary or a separate use-case silo.

Review is not a separate branch of the skill. It uses the same workflow in compressed form: infer purpose, read enough context, check strategy, inspect concrete assertions, inspect implementation quality, then report findings.

## Runtime And Maintenance Files

`references/` and `references-ja/` contain runtime guidance. Agents should read those files while using the skill for unit test creation, review, boundary selection, assertion strategy, or design feedback.

`maintenance/` and `maintenance-ja/` contain maintainer guidance. Agents should not read those files during ordinary unit test guidance. Use them when editing this skill, changing its rule structure, tracing source mapping, or reviewing its design background.

Files in each English/Japanese pair must stay aligned by filename and meaning. The English and Japanese versions do not need to be line-by-line translations, but they must express the same rules, priorities, applicability, and exceptions.

When adding `references/example.md`, also add `references-ja/example.md` in the same change. When adding `maintenance/example.md`, also add `maintenance-ja/example.md` in the same change.

## Source Management

Use `maintenance/sources.md` for source mapping, adopted ideas, rejected ideas, and pending questions. Do not turn runtime reference files into a book index.
