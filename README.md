# zawa-kyo/skills

A collection of reusable agent skills maintained by zawa-kyo, distributed via [apm](https://github.com/microsoft/apm).

Each directory under `meta/` is a standalone skill.

## Install

Install an individual skill globally:

```sh
apm install -g zawa-kyo/skills/meta/review-essential-code
apm install -g zawa-kyo/skills/meta/suggest-commit-messages
apm install -g zawa-kyo/skills/meta/fluent-japanese-writing
apm install -g zawa-kyo/skills/meta/cleanup-english-writing
```

Or add them to an `apm.yml`:

```yaml
dependencies:
  apm:
    - zawa-kyo/skills/meta/review-essential-code
    - zawa-kyo/skills/meta/suggest-commit-messages
    - zawa-kyo/skills/meta/fluent-japanese-writing
    - zawa-kyo/skills/meta/cleanup-english-writing
```

## Skills

| Skill                   | Install path                   | Description                                                                                                        |
| ----------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| Review Essential Code   | `meta/review-essential-code`   | Review code changes for bugs, regressions, missing tests, and essential maintainability.                           |
| Suggest Commit Messages | `meta/suggest-commit-messages` | Suggest concise English Conventional Commit messages from staged or unstaged Git diffs.                            |
| Fluent Japanese Writing | `meta/fluent-japanese-writing` | Rewrite Japanese technical prose into fluent, readable Japanese while preserving commands, paths, and identifiers. |
| Cleanup English Writing | `meta/cleanup-english-writing` | Clean up English technical prose so it reads direct, human, and less AI-like while preserving technical meaning.   |
