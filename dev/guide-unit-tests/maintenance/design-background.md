# Design Background

## Why This Skill Exists

This skill exists to help agents and humans work with unit tests as a design and maintenance practice, not merely as a way to increase coverage.

Unit tests are useful when they protect important behavior while keeping maintenance cost low. They become harmful when they lock onto implementation details, overuse mocks, duplicate production logic, or make ordinary refactoring expensive.

## Initial Source

The initial source is Vladimir Khorikov's _Unit Testing: Principles, Practices, and Patterns_. The book is valuable because it gives a coherent vocabulary for test value, refactoring resistance, observable behavior, test doubles, and the trade-offs between output, state, and interaction testing.

This skill does not treat that book as the only source of truth. The skill should remain open to other books, local team practices, language constraints, and lessons learned from real projects.

## Design Choice

Organize the skill by judgment layer, not by source chapter or testing school:

- `foundations.md` covers purpose, quality attributes, terminology, and priorities.
- `test-target-selection.md` covers what should and should not be unit tested.
- `observation-and-oracles.md` covers what a test observes and how it decides correctness.
- `test-construction.md` covers the shape of test code.
- `design-feedback.md` covers design problems revealed by hard-to-test code.
- `review-heuristics.md` provides review-oriented navigation back to the rules.

This structure keeps the skill extensible. A new source should strengthen, refine, or challenge existing rules instead of creating a parallel chapter summary.

## Runtime And Maintenance Files

`references/` and `references-ja/` contain runtime guidance. Agents should read those files while using the skill for unit test creation, review, boundary selection, assertion strategy, or design feedback.

`maintenance/` and `maintenance-ja/` contain maintainer guidance. Agents should not read those files during ordinary unit test guidance. Use them when editing this skill, changing its rule structure, tracing source mapping, or reviewing its design background.

Files in each English/Japanese pair must stay aligned by filename and meaning. The English and Japanese versions do not need to be line-by-line translations, but they must express the same rules, priorities, applicability, and exceptions.

When adding `references/example.md`, also add `references-ja/example.md` in the same change. When adding `maintenance/example.md`, also add `maintenance-ja/example.md` in the same change.

## Source Management

Use `maintenance/sources.md` for source mapping, adopted ideas, rejected ideas, and pending questions. Do not turn runtime reference files into a book index.
