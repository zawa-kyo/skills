# 📚 skills

Reusable agent skills maintained by zawa-kyo for [apm](https://github.com/microsoft/apm).

## Repository Layout

Skills are grouped under category directories. Each skill package lives at `<category>/<skill>`.

| Category   | Use for                                                                            |
| ---------- | ---------------------------------------------------------------------------------- |
| `dev`      | Development and coding work, including design, implementation, and review.         |
| `thinking` | Thinking support, including reasoning, decision-making, and structured discussion. |
| `writing`  | Writing support, including prose editing, document maintenance, and summaries.     |

Each skill directory contains the English and Japanese skill definitions plus agent metadata.

## Skill Details

## `dev`

| Skill                     | Description                                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------------------------- |
| `bootstrap-repo-docs`     | Set up bilingual README and AGENTS docs for a new or minimally scaffolded repository.                   |
| `guide-unit-tests`        | Guide unit test workflow from purpose and project context through strategy, implementation, and review. |
| `review-essential-code`   | Review code changes for bugs, regressions, missing tests, and essential maintainability.                |
| `suggest-commit-messages` | Suggest concise English Conventional Commit messages from staged or unstaged Git diffs.                 |

## `thinking`

| Skill                              | Description                                                                                  |
| ---------------------------------- | -------------------------------------------------------------------------------------------- |
| `apply-adversarial-verification`   | Review plans, designs, diffs, documents, or skills from a fresh skeptical context.            |
| `refine-reasoning-logic`           | Deepen developing thinking, proposals, or unease through structured sounding-board dialogue. |

## `writing`

| Skill                             | Description                                                                                                                           |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `edit-existing-document`          | Fit edits into an existing document structure without adding duplicate or conflicting guidance.                                       |
| `revise-english-writing`          | Make English technical prose direct and natural while preserving commands, paths, and identifiers.                                    |
| `revise-japanese-writing`         | Review and revise Japanese technical prose while preserving commands, paths, and identifiers.                                         |
| `summarize-discussion-coherently` | Turn personal discussion logs into coherent structured summaries with the right organizing framework and unresolved points preserved. |

## Install

Install one skill globally with `zawa-kyo/skills/<category>/<skill>`. For example:

```sh
apm install -g zawa-kyo/skills/dev/guide-unit-tests
apm install -g zawa-kyo/skills/thinking/refine-reasoning-logic
apm install -g zawa-kyo/skills/writing/revise-japanese-writing
```

The examples above are representative. Choose other skill paths from the tables above as needed.

Or add one or more skills to `apm.yml`. For example:

```yaml
dependencies:
  apm:
    - zawa-kyo/skills/dev/guide-unit-tests
    - zawa-kyo/skills/thinking/refine-reasoning-logic
    - zawa-kyo/skills/writing/revise-japanese-writing
```
