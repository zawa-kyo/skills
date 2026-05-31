# Repository Instructions

## Repository Shape

This repository publishes reusable agent skills through `apm`. Each directory under `meta/` is an independent skill package.

For each skill:

- `SKILL.md` is the English skill definition.
- `SKILL-ja.md` is the Japanese skill definition for the same behavior.
- `agents/openai.yaml` defines the OpenAI-facing display metadata and default prompt.

## Language Versions

When generating or editing text in this repository, check whether an English Markdown file and a corresponding Japanese `*-ja.md` file exist for the same content. If either side exists, update both files in the same change so they stay aligned.

Keep the versions equivalent in meaning, but write each one naturally in its own language. Do not make the Japanese file a mechanical line-by-line translation when a more natural Japanese expression preserves the same intent.

This applies especially to:

- `README.md` and `README-ja.md`
- `AGENTS.md` and `AGENTS-ja.md`
- each `meta/<skill>/SKILL.md` and `meta/<skill>/SKILL-ja.md`

## Skill Maintenance

When adding, renaming, or removing a skill, update all repository surfaces that mention the skill:

- the `meta/<skill>/` directory contents
- `README.md` and `README-ja.md` install examples and skill table
- `apm.yml` metadata if package-level information changes
- `agents/openai.yaml` when the displayed name, short description, or default prompt should change

Keep skill instructions operational and specific. Prefer concrete workflows, trigger conditions, output expectations, and verification steps over broad advice.

For paired `SKILL.md` and `SKILL-ja.md` files, keep the frontmatter `name` identical. Localize `description` naturally, but preserve the same activation intent and behavioral scope.
