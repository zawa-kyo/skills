---
name: edit-existing-document
description: Use when editing an existing document, README, policy, guide, AGENTS.md, CLAUDE.md, prompt, or code comment. Ensures the change fits the existing structure, avoids duplicating nearby content, preserves the document's purpose and audience, checks related language versions or companion files, and proposes section reorganization before making structural changes.
---

# Edit Existing Document

## Purpose

Edit existing prose without treating the requested change as an isolated patch. Before changing a document or comment, understand the document's purpose, audience, section structure, and nearby explanations so the edit fits the whole text.

This skill handles structure and integration decisions. It does not replace language-specific prose skills: use `revise-japanese-writing` for Japanese prose, and use `cleanup-english-writing` or `stop-slop` for English prose when those skills are available and relevant.

## Scope

Use this skill for existing text such as:

- `README.md`, guides, policies, design docs, and runbooks.
- `AGENTS.md`, `CLAUDE.md`, prompts, and agent instructions.
- Code comments and explanatory text inside configuration files.
- Tasks that add, revise, move, merge, or reorganize prose in an existing document set.

Also use it when creating a new document that must fit into an existing documentation structure.

## Non-Goals

Do not use this skill as the source of truth for:

- Detailed Japanese prose style. Use `revise-japanese-writing`.
- Detailed English prose style. Use `cleanup-english-writing` and `stop-slop`.
- Render verification for `.docx`, presentations, or spreadsheets. Use the relevant document, presentation, or spreadsheet skill.
- Code quality review. Use `review-essential-code`.
- Project-specific placement rules. Follow the nearest `AGENTS.md`, repository docs, and existing project conventions.

## Workflow

1. Identify the requested change and the target file or files. If the target is unclear and cannot be inferred safely, ask before editing.
2. Read the target section and enough surrounding text to understand the local flow.
3. Inspect the whole document's heading structure before deciding where the change belongs.
4. Check whether nearby sections already cover the same idea, conflict with it, or operate at a different level of detail.
5. Decide whether the right edit is a small addition, a revision of existing text, a move, a merge, or a broader reorganization.
6. Check for related files that must stay aligned, such as English and Japanese versions of the same document, generated metadata, or companion examples.
7. If no broader reorganization is needed, make the smallest edit that preserves the document's flow and avoids duplicate guidance.
8. Use the relevant language-specific prose skill for edited natural language when available.
9. Run the repository formatter or validation command when the project provides one. If you do not run it, report why.

## Reorganization Gate

Do not start a structural reorganization without user confirmation when any of these conditions apply:

- The requested content would make the target section cover too many responsibilities.
- Similar guidance is already spread across multiple sections and another addition would increase duplication.
- The new content does not fit naturally under the current headings.
- Moving or merging existing sections would make the document clearer.
- The change would require coordinated restructuring across multiple files.
- The best edit would exceed the user's requested scope.

When this gate applies, briefly propose the reorganization first. Include the reason, affected files, target headings or moves, and the point that needs user confirmation. After confirmation, keep the edit scoped to the approved structure.

## Editing Principles

- Prefer integrating with existing wording over appending a new paragraph at the end of a section.
- Preserve the document's purpose and reader. Do not add operational detail to a high-level policy unless the document already carries that detail.
- Avoid repeating guidance that already exists nearby. Revise or point to the existing explanation instead.
- Keep terminology, heading style, list style, examples, and cross-references consistent with the surrounding document.
- Do not hard-code numbering in headings or prose when the order may change later; use Markdown lists when sequence matters.
- Leave unrelated sections alone unless they must change to keep the requested edit coherent.

## Output

When reporting the result, mention the files changed, whether related language versions or companion files were synchronized, and which formatter or validation command was run. If reorganization was proposed instead of edited, summarize the proposed structure and wait for the user's decision.
