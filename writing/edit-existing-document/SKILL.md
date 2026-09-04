---
name: edit-existing-document
description: Use when editing an existing document, README, policy, AGENTS.md, CLAUDE.md, code comment, or similar text. Fits the change into the existing structure and avoids duplicating nearby explanations so the document stays coherent. Checks related language versions or companion files, and proposes section reorganization before editing when needed.
---

# Edit Existing Document

## Purpose

When revising existing prose, consider the whole document. Before editing, understand its purpose, audience, structure, and nearby explanations so the change fits the flow.

This skill handles structure and integration, not language-specific prose. When revising Japanese or English, also use:

- Japanese: `revise-japanese-writing`
- English: `revise-english-writing`, `stop-slop`

## Scope

Use this skill for existing text such as:

- `README.md`, guides, policies, design docs, and runbooks
- `AGENTS.md`, `CLAUDE.md`, prompts, and agent instructions
- Code comments and explanatory text inside configuration files
- Tasks that add, revise, move, merge, or reorganize prose in an existing document set

Also use it when creating a new document that must fit into an existing documentation structure.

## Non-Goals

Do not use this skill for:

- Detailed Japanese prose style. Use `revise-japanese-writing`.
- Detailed English prose style. Use `revise-english-writing` and `stop-slop`.
- Render verification for `.docx`, presentations, or spreadsheets. Use the relevant document, presentation, or spreadsheet skill.
- Non-document file changes, such as code quality reviews.
- Project-specific placement rules. Follow the nearest `AGENTS.md`, repository docs, and existing project conventions.

## Workflow

1. Identify the requested change and target files. If the target cannot be inferred safely, ask before editing.
2. Read the target section and enough surrounding text to understand the local flow.
3. Inspect the whole document's heading structure before deciding where the change belongs.
4. Check whether nearby sections already cover the same idea, conflict with it, or use a different level of detail or abstraction.
5. Decide whether to add, revise, move, merge, or reorganize.
6. Check for related files that must stay aligned, such as English and Japanese versions of the same document, generated metadata, or companion examples.
7. If no broader reorganization is needed, make the smallest edit that preserves the document's flow and avoids duplicate guidance.
8. Use the relevant language-specific prose skill for natural-language edits.
9. Run the repository formatter or validation command when the project provides one. If you do not run it, report why.

## Reorganization Gate

Ask for confirmation before structural reorganization when any of these conditions apply:

- The requested content would make the target section cover too many responsibilities.
- Similar guidance is already spread across multiple sections and another addition would increase duplication.
- The new content does not fit naturally under the current headings.
- Moving or merging existing sections would make the document clearer.
- The change would require coordinated restructuring across multiple files.
- The best edit would exceed the user's requested scope.

When this gate applies, briefly propose the reorganization first. Include the reason, affected files, target headings or moves, and the point that needs user confirmation. After confirmation, keep the edit scoped to the approved structure.

## Editing Principles

- Prefer integrating with existing wording over appending a new paragraph at the end of a section.
- Preserve the document's intent and purpose. Do not add operational detail to a high-level policy unless the document already carries that detail.
- Avoid repeating guidance that already exists nearby. Revise or point to the existing explanation instead.
- Keep terminology, heading style, list style, examples, and cross-references consistent with the surrounding document.
- Do not hard-code numbering in headings or prose when the order may change later; use Markdown lists when sequence matters.
- Leave unrelated sections alone unless they must change to keep the requested edit coherent.

## Output

When reporting the result, mention the files changed, whether related language versions or companion files were synchronized, and which formatter or validation command was run. If reorganization was proposed instead of edited, summarize the proposed structure and wait for the user's decision.
