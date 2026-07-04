# 📚 skills

Reusable agent skills maintained by zawa-kyo for [apm](https://github.com/microsoft/apm).

Each directory under `dev/`, `thinking/`, or `writing/` is a standalone skill package.

## Install

Install one skill globally. For example:

```sh
apm install -g zawa-kyo/skills/dev/guide-unit-tests
apm install -g zawa-kyo/skills/thinking/refine-reasoning-logic
apm install -g zawa-kyo/skills/writing/revise-japanese-writing
```

Or add one or more skills to `apm.yml`. For example:

```yaml
dependencies:
  apm:
    - zawa-kyo/skills/dev/guide-unit-tests
    - zawa-kyo/skills/thinking/refine-reasoning-logic
    - zawa-kyo/skills/writing/revise-japanese-writing
```

## Skill Details

## `dev`

| Skill                     | Description                                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------------------------- |
| `bootstrap-repo-docs`     | Set up bilingual README and AGENTS docs for a new or minimally scaffolded repository.                   |
| `guide-unit-tests`        | Guide unit test workflow from purpose and project context through strategy, implementation, and review. |
| `review-essential-code`   | Review code changes for bugs, regressions, missing tests, and essential maintainability.                |
| `suggest-commit-messages` | Suggest concise English Conventional Commit messages from staged or unstaged Git diffs.                 |

## `thinking`

| Skill                    | Description                                                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| `refine-reasoning-logic` | Deepen developing thinking, proposals, or unease through structured sounding-board dialogue. |

## `writing`

| Skill                             | Description                                                                                                                           |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `edit-existing-document`          | Fit edits into an existing document structure without adding duplicate or conflicting guidance.                                       |
| `revise-english-writing`          | Make English technical prose direct and natural while preserving commands, paths, and identifiers.                                    |
| `revise-japanese-writing`         | Review and revise Japanese technical prose while preserving commands, paths, and identifiers.                                         |
| `summarize-discussion-coherently` | Turn personal discussion logs into coherent structured summaries with the right organizing framework and unresolved points preserved. |
