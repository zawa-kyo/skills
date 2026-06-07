# 📚 skills

Reusable agent skills maintained by zawa-kyo and distributed with [apm](https://github.com/microsoft/apm).

Each directory under `dev/` or `writing/` is a standalone skill package.

## 🚀 Install

Install an individual skill globally:

```sh
apm install -g zawa-kyo/skills/dev/review-essential-code
apm install -g zawa-kyo/skills/dev/suggest-commit-messages
apm install -g zawa-kyo/skills/writing/revise-japanese-writing
apm install -g zawa-kyo/skills/writing/revise-english-writing
apm install -g zawa-kyo/skills/writing/edit-existing-document
```

Or add them to an `apm.yml`:

```yaml
dependencies:
  apm:
    - zawa-kyo/skills/dev/review-essential-code
    - zawa-kyo/skills/dev/suggest-commit-messages
    - zawa-kyo/skills/writing/revise-japanese-writing
    - zawa-kyo/skills/writing/revise-english-writing
    - zawa-kyo/skills/writing/edit-existing-document
```

## 🎒 Skill Details

## 👨‍💻 `dev`

| Skill                   | Install path                  | Description                                                                              |
| ----------------------- | ----------------------------- | ---------------------------------------------------------------------------------------- |
| Review Essential Code   | `dev/review-essential-code`   | Review code changes for bugs, regressions, missing tests, and essential maintainability. |
| Suggest Commit Messages | `dev/suggest-commit-messages` | Suggest concise English Conventional Commit messages from staged or unstaged Git diffs.  |

## ✏️ `writing`

| Skill                   | Install path                      | Description                                                                                             |
| ----------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Revise Japanese Writing | `writing/revise-japanese-writing` | Review and revise Japanese technical prose while preserving commands, paths, and identifiers.           |
| Revise English Writing  | `writing/revise-english-writing`  | Make English technical prose direct and less AI-like while preserving commands, paths, and identifiers. |
| Edit Existing Document  | `writing/edit-existing-document`  | Fit edits into existing document structure while avoiding duplicate or conflicting guidance.            |
