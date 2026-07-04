# Agent Guide

## Repository Structure

This repository publishes reusable agent skills with `apm`. Each directory under `dev/` or `writing/` is an independent skill package.

Each skill contains:

- `SKILL.md` is the English skill definition.
- `SKILL-ja.md` is the Japanese skill definition for the same behavior.
- `agents/openai.yaml` defines OpenAI display metadata and the default prompt.

## Document Sync

When you generate or edit text in this repository, check whether an English Markdown file and a corresponding Japanese `*-ja.md` file exist for the same content. When one exists, update both files in the same change so they stay aligned.

Also check whether the content lives under paired directories where the Japanese side is expressed by adding a `-ja` suffix to the directory name, such as `references/`/`references-ja/` or `maintenance/`/`maintenance-ja/`. Treat those directory pairs as English/Japanese counterparts too. When editing content in one side, update the matching file in the paired directory in the same change when it represents the same content.

Keep the versions equivalent in meaning, but write each one naturally in its own language. Do not make the Japanese file a mechanical line-by-line translation when a more natural Japanese expression preserves the same intent.

This applies especially to:

- `README.md` and `README-ja.md`
- `AGENTS.md` and `AGENTS-ja.md`
- each `dev/<skill>/SKILL.md`, `dev/<skill>/SKILL-ja.md`, `writing/<skill>/SKILL.md`, and `writing/<skill>/SKILL-ja.md`
- matching files under paired directories such as `<dir>/...` and `<dir>-ja/...`

## Maintenance

When you add, rename, or remove a skill, update every repository file that mentions the skill:

- the relevant `dev/<skill>/` or `writing/<skill>/` directory contents
- `README.md` and `README-ja.md` install examples and skill table
- `apm.yml` metadata if package-level information changes
- `agents/openai.yaml` when the displayed name, short description, or default prompt should change

Keep skill instructions operational and specific. Prefer concrete workflows, trigger conditions, output expectations, and verification steps over broad advice.

For paired `SKILL.md` and `SKILL-ja.md` files, keep the frontmatter `name` identical. Localize `description` naturally, but preserve the same activation intent and behavioral scope.

## `SKILL.md` Guidance

- Keep `SKILL.md` at or below 300 lines when practical. If the content would exceed that size, propose splitting supporting material into separate files before expanding the main file.
- Treat `SKILL.md` as the orchestrator for the overall workflow. Move detailed procedures, templates, reference material, and similar supporting content into `references/`. Keeping everything in one file is fine when `SKILL.md` is not bloated.
- Structure `SKILL.md` so both agents and humans can read it easily. Prefer a flow from abstract guidance to concrete instructions.
- Write Japanese skill definitions in plain form by default, using `である` / `する` style instead of polite `です` / `ます` style. Keep the prose readable rather than stiff; prefer natural plain-form verb endings or `だ` when repeated `である` would sound heavy. Preserve polite wording only inside examples where the user-facing output itself should be polite.
