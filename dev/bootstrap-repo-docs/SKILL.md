---
name: bootstrap-repo-docs
description: Bootstrap documentation and agent guidance for a new or nearly empty repository. Use when a repository has only minimal files such as README.md, .gitignore, or an empty root, and the user wants to establish README.md, AGENTS.md, and matching *-ja.md files with a clear bilingual synchronization rule.
---

# Bootstrap Repository Docs

## Overview

Set up the initial documentation structure for a new repository without assuming a full project scaffold already exists. This skill is for repositories that are empty or nearly empty, such as a repo with only `README.md`, `.gitignore`, or a few placeholder files.

The goal is to establish a small, durable documentation baseline:

- `README.md` and `README-ja.md`
- `AGENTS.md` and `AGENTS-ja.md`
- a clear rule in `AGENTS.md` that paired English and Japanese documents must be kept in sync

Prefer extending existing files over replacing them. Treat the repository's current text, names, and structure as the source of truth unless the user asks for a broader rewrite.

## When To Use

Use this skill when the user wants to:

- initialize documentation for a brand-new repository
- add `AGENTS.md` to a minimal repository
- create English and Japanese companion files for repository docs
- establish a lightweight documentation policy before substantial implementation begins
- bring a sparse repository up to a usable baseline for future agent work

Do not use this skill for mature repositories that already have a well-developed documentation structure unless the user explicitly wants to realign or simplify it.

## Assumptions

- The repository may be almost empty.
- Existing files may be incomplete rather than wrong.
- The user usually wants a minimal but operational setup, not a full documentation suite.
- The bilingual policy should be introduced early so later edits follow it consistently.

## Files To Inspect First

Before editing, inspect the repository root for:

- `README.md`
- `README-ja.md`
- `AGENTS.md`
- `AGENTS-ja.md`
- `.gitignore`
- any obvious project manifest or metadata file such as `package.json`, `pyproject.toml`, `go.mod`, `Cargo.toml`, `mise.toml`, or `apm.yml`
- top-level directories that reveal the repository purpose

Read enough existing content to determine:

- the repository name and purpose
- whether the project already implies a stack or toolchain
- whether bilingual files already exist
- whether any current wording should be preserved and expanded rather than rewritten

## Workflow

1. Inspect the repository state and identify which of the baseline files already exist.
2. Infer the repository purpose from the current files and directory names. If the purpose is unclear and guessing would mislead the documentation, ask the user.
3. Preserve useful existing text. Expand minimal placeholders instead of replacing them wholesale.
4. Ensure the repository has both English and Japanese versions of the core docs when those docs exist:
   - `README.md` and `README-ja.md`
   - `AGENTS.md` and `AGENTS-ja.md`
5. In `AGENTS.md`, add a durable instruction that paired English and Japanese documentation files must be updated together and kept aligned in meaning.
6. Write the Japanese files naturally in Japanese. Keep them equivalent in intent, but do not translate mechanically line by line.
7. Keep the first pass intentionally small. Prefer a clear baseline over a speculative, overbuilt policy set.
8. Report which files were created or updated and any assumptions used to shape the initial docs.

## What To Put In `README`

For a minimal repository, `README.md` and `README-ja.md` should usually cover only the essentials:

- what the repository is for
- the current status if the repository is still being initialized
- the top-level structure if it helps future contributors
- how to start working in the repository if that can be stated confidently
- any short note about where repository-specific agent guidance lives

Do not invent setup steps, architecture claims, or release workflows that are not supported by the repository contents or the user's request.

## What To Put In `AGENTS`

For a minimal repository, `AGENTS.md` and `AGENTS-ja.md` should establish only the durable guidance that future agents are likely to need. Typical content includes:

- instruction priority between user requests, project docs, and global defaults
- a rule to keep paired English and Japanese documentation synchronized
- a reminder to prefer small, scoped changes
- safety expectations around destructive operations, secrets, and Git actions
- a note to read existing files before making non-trivial edits

Keep `AGENTS.md` generic enough to survive the repository's early growth. Avoid embedding stack-specific rules unless the repository already clearly requires them.

## Editing Principles

- Prefer the smallest complete documentation baseline.
- Reuse existing names, terminology, and directory structure.
- Avoid creating extra files unless they solve a real problem in the current repository.
- Do not add large policy sections just because they are common in other repositories.
- If the repository already has a stronger documentation structure, integrate with it instead of forcing this baseline shape.

## Non-Goals

This skill does not, by itself:

- design a full contributing guide, ADR set, or onboarding handbook
- create issue templates, PR templates, CI workflows, or license files unless the user asks
- decide the project's technical stack without evidence
- reorganize a mature documentation set without confirmation

## Final Response

When reporting the result:

- list which baseline files were created or updated
- state whether bilingual pairs were added or synchronized
- mention any assumptions about the repository purpose or maturity
- mention any checks not run
