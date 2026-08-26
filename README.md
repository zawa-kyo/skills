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

| Skill                     | Description                                                                                          |
| ------------------------- | ---------------------------------------------------------------------------------------------------- |
| `bootstrap-repo-docs`     | Set up bilingual README and AGENTS docs for a new or minimally scaffolded repository.                |
| `guide-automated-tests`   | Choose verification across test levels and delegate clear unit, integration, or E2E work.            |
| `guide-e2e-tests`         | Design, implement, and review E2E tests for externally visible behavior and system-wide operation.   |
| `guide-integration-tests` | Design, implement, and review integration tests for behavior spanning multiple components or layers. |
| `guide-unit-tests`        | Design, implement, and review unit tests focused on one behavior.                                    |
| `review-essential-code`   | Review code changes for bugs, regressions, missing tests, and essential maintainability.             |
| `suggest-commit-messages` | Suggest concise English Conventional Commit messages from staged or unstaged Git diffs.              |

## `thinking`

| Skill                            | Description                                                                                   |
| -------------------------------- | --------------------------------------------------------------------------------------------- |
| `apply-adversarial-verification` | Review plans, designs, diffs, documents, or skills from a fresh skeptical context.            |
| `consider-alternatives-first`    | Verify assumptions and compare at least three approaches before making changes.               |
| `refine-reasoning-logic`         | Deepen developing thinking, proposals, or unease through structured sounding-board dialogue.  |
| `review-multi-perspective`       | Coordinate independent reviewers across distinct perspectives and consolidate their findings. |

## `writing`

| Skill                             | Description                                                                                                                           |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `edit-existing-document`          | Fit edits into an existing document structure without adding duplicate or conflicting guidance.                                       |
| `revise-english-writing`          | Make English technical prose direct and natural while preserving commands, paths, and identifiers.                                    |
| `revise-japanese-writing`         | Review and revise Japanese technical prose while preserving commands, paths, and identifiers.                                         |
| `rewrite-final-plan`              | Rewrite an iteratively revised plan as a self-contained final design for readers without the preceding conversation.                  |
| `summarize-discussion-coherently` | Turn personal discussion logs into coherent structured summaries with the right organizing framework and unresolved points preserved. |

## Install

Install one skill globally with `zawa-kyo/skills/<category>/<skill>`. For example:

```sh
apm install -g zawa-kyo/skills/dev/guide-automated-tests
apm install -g zawa-kyo/skills/thinking/refine-reasoning-logic
apm install -g zawa-kyo/skills/writing/revise-japanese-writing
```

The examples above are representative. Choose other skill paths from the tables above as needed.
Install `guide-automated-tests` for cross-level strategy and all three testing specialists.
Install a specialist directly when you only need clear unit, integration, or E2E work.

Or add one or more skills to `apm.yml`. For example:

```yaml
dependencies:
  apm:
    - zawa-kyo/skills/dev/guide-automated-tests
    - zawa-kyo/skills/thinking/refine-reasoning-logic
    - zawa-kyo/skills/writing/revise-japanese-writing
```

If you want the full public skill collection, use `zawa-kyo/skills` instead:

```sh
apm install -g zawa-kyo/skills
```

Or add the collection to `apm.yml`:

```yaml
dependencies:
  apm:
    - zawa-kyo/skills
```
