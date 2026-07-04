# 📚 skills

Reusable agent skills maintained by zawa-kyo for [apm](https://github.com/microsoft/apm).

Each directory under `dev/` or `writing/` is a standalone skill package.

## 🚀 Install

Install one skill globally:

```sh
apm install -g zawa-kyo/skills/dev/bootstrap-repo-docs
apm install -g zawa-kyo/skills/dev/guide-unit-tests
apm install -g zawa-kyo/skills/dev/review-essential-code
apm install -g zawa-kyo/skills/dev/suggest-commit-messages
apm install -g zawa-kyo/skills/writing/edit-existing-document
apm install -g zawa-kyo/skills/writing/revise-english-writing
apm install -g zawa-kyo/skills/writing/revise-japanese-writing
apm install -g zawa-kyo/skills/writing/summarize-discussion-coherently
```

Or add one or more skills to `apm.yml`:

```yaml
dependencies:
  apm:
    - zawa-kyo/skills/dev/bootstrap-repo-docs
    - zawa-kyo/skills/dev/guide-unit-tests
    - zawa-kyo/skills/dev/review-essential-code
    - zawa-kyo/skills/dev/suggest-commit-messages
    - zawa-kyo/skills/writing/edit-existing-document
    - zawa-kyo/skills/writing/revise-english-writing
    - zawa-kyo/skills/writing/revise-japanese-writing
    - zawa-kyo/skills/writing/summarize-discussion-coherently
```

## 🎒 Skill Details

## 👨‍💻 `dev`

| Skill                     | Description                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------ |
| `bootstrap-repo-docs`     | Set up bilingual README and AGENTS docs for a new or minimally scaffolded repository.                  |
| `guide-unit-tests`        | Guide unit test strategy, implementation, and review from purpose and project context.                 |
| `review-essential-code`   | Review code changes for bugs, regressions, missing tests, and essential maintainability.               |
| `suggest-commit-messages` | Suggest concise English Conventional Commit messages from staged or unstaged Git diffs.                |

## ✏️ `writing`

| Skill                             | Description                                                                                                                           |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `edit-existing-document`          | Fit edits into an existing document structure without adding duplicate or conflicting guidance.                                       |
| `revise-english-writing`          | Make English technical prose direct and natural while preserving commands, paths, and identifiers.                                    |
| `revise-japanese-writing`         | Review and revise Japanese technical prose while preserving commands, paths, and identifiers.                                         |
| `summarize-discussion-coherently` | Turn personal discussion logs into coherent structured summaries with the right organizing framework and unresolved points preserved. |
