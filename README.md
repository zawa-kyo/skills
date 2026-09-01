# 📚 skills

Reusable agent skills and hooks maintained by zawa-kyo for [apm](https://github.com/microsoft/apm).

## Repository Layout

Skills are grouped under category directories. Each skill package lives at `<category>/<skill>`.

| Category   | Use for                                                                                 |
| ---------- | --------------------------------------------------------------------------------------- |
| `dev`      | Development and coding work, including design, implementation, and review.              |
| `thinking` | Thinking support, including reasoning, decision-making, and structured discussion.      |
| `writing`  | Writing support, including prose editing, document maintenance, summaries, and linting. |

Each skill directory contains the English and Japanese skill definitions plus agent metadata.
Hook packages use the same category directories but remain independent APM packages.

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
| `challenge-completed-work`       | Challenge completed work against its stated goal before accepting it.                         |
| `compare-distinct-approaches`    | Verify assumptions and compare at least three distinct approaches before making changes.      |
| `coordinate-independent-reviews` | Coordinate independent reviewers across distinct perspectives and consolidate their findings. |
| `refine-developing-reasoning`    | Deepen developing ideas and reasoning through structured sounding-board dialogue.             |

## `writing`

| Skill                             | Description                                                                                                                           |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `edit-existing-document`          | Fit edits into an existing document structure without adding duplicate or conflicting guidance.                                       |
| `revise-english-writing`          | Make English technical prose direct and natural while preserving commands, paths, and identifiers.                                    |
| `revise-japanese-writing`         | Review and revise Japanese technical prose while preserving commands, paths, and identifiers.                                         |
| `rewrite-final-plan`              | Rewrite an iteratively revised plan as a self-contained final design for readers without the preceding conversation.                  |
| `summarize-discussion-coherently` | Turn personal discussion logs into coherent structured summaries with the right organizing framework and unresolved points preserved. |

## Hook Packages

| Package                 | Location                        | Description                                                               |
| ----------------------- | ------------------------------- | ------------------------------------------------------------------------- |
| `japanese-writing-lint` | `writing/japanese-writing-lint` | Run Japanese textlint after Claude Code or Codex changes a Markdown file. |

## Install

Install one skill globally with `zawa-kyo/skills/<category>/<skill>`. For example:

```sh
apm install -g zawa-kyo/skills/dev/guide-automated-tests
apm install -g zawa-kyo/skills/thinking/refine-developing-reasoning
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
    - zawa-kyo/skills/thinking/refine-developing-reasoning
    - zawa-kyo/skills/writing/revise-japanese-writing
```

### Markdown Lint Hook

The `japanese-writing-lint` hook requires Node.js 22.18 or later. Install it into a project for the harnesses you use:

```sh
apm install zawa-kyo/skills/writing/japanese-writing-lint --target claude,codex
```

APM deploys one hook bundle for each target. Run the setup script in each deployed bundle to install the dependencies pinned by its lock file:

```sh
node .claude/hooks/japanese-writing-lint/runtime/setup.ts
node .codex/hooks/japanese-writing-lint/runtime/setup.ts
```

Run only the setup command for each target you enabled. The hook reads `PostToolUse` payloads, lints changed `*.md` files, and returns diagnostics without applying fixes.

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
