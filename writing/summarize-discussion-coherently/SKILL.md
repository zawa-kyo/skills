---
name: summarize-discussion-coherently
description: Summarize a discussion into a coherent structure that preserves its conclusion, background, intent, unresolved points, and next steps. Choose a fitting organizing framework when the user wants more than a shorter version, such as a structured summary or clarified open issues.
---

# Summarize Discussion Coherently

## Overview

Turn a personal discussion log, rough back-and-forth, or scattered notes into a coherent structured summary. Reconstruct its purpose, conclusion, reasoning, and unresolved points rather than merely shortening it.

Write the summary so it can stand on its own. Do not assume the reader has the original chat, direct access to the referenced materials, or familiarity with local paths, personal shorthand, or thread-internal context.

## Workflow

1. Read enough of the conversation to identify the main objective, the current state of agreement, and whether the discussion is explanatory, exploratory, or decision-oriented.
2. Infer the most suitable organizing framework before drafting. Prefer the framework that makes the discussion easiest to understand, not the one that sounds most formal.
3. If critical information is missing and the ambiguity would materially change the summary, ask up to three concise clarification questions. Otherwise continue and mark uncertain points explicitly.
4. Reconstruct the content by issue, rationale, and outcome. Do not simply replay the conversation in chronological order unless the sequence itself is necessary to explain the result.
5. Preserve both the conclusion and the context that led to it. Include the user's purpose, relevant constraints, tradeoffs, and unresolved points when they matter.
6. When the source is incomplete, paraphrased, or already summarized rather than a raw transcript, preserve only supported facts. Mark inferred details conservatively instead of filling gaps with confident specifics.
7. Normalize references that would be unclear to a third party. Replace thread-internal wording, raw local file paths, and overly specific document links with reader-oriented descriptions. Keep exact paths, URLs, IDs, or labels only when they are necessary for the decision, verification, reproduction, or next action.
8. Omit or generalize details that are private, machine-specific, or irrelevant to the reader's understanding.
9. Write the result as a clearly structured summary.
10. Self-check that the summary is coherent, self-contained, decision-useful, and faithful to the source discussion.

## Framework Selection

Choose one primary framework and say which one you used.

| Framework                | Use it when                                                                                                                    | What it is good at                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| `PREP`                   | The discussion mainly needs to land one clear claim with supporting reasoning and a concise example or illustration.           | Producing a short, persuasive summary with a clear throughline. |
| `TAPS`                   | The note should move from topic or tension to analysis, proposal, and next steps.                                              | Turning a messy discussion into an actionable progression.      |
| `SCQA`                   | The discussion needs a narrative flow from context to complication, key question, and answer.                                  | Explaining why the issue matters before stating the conclusion. |
| `Chronological recap`    | The order of the exchange materially affects the meaning, such as when later turns revise or overturn earlier assumptions.     | Preserving sequence without losing coherence.                   |
| `Issue-structuring memo` | The discussion contains multiple mixed concerns, assumptions, objections, or open questions that need to be separated clearly. | Cutting tangled dialogue into distinct issues and statuses.     |
| `Decision memo`          | The conversation compares options, criteria, tradeoffs, and a recommended direction.                                           | Making a recommendation and preserving the basis for it.        |

You may blend techniques, but the final note should still have one dominant organizing frame.
State the chosen framework explicitly inside the note itself, near the top, using a visible label such as `Framework: Decision memo`. Do not treat framework choice as internal reasoning only.

## Output Contract

Do not force one fixed template for every case. The exact section order and headings may vary with the chosen framework, but the note must include all of the following somewhere in the document:

- The chosen organizing framework
- A concise conclusion or current best summary
- The purpose or intent behind the discussion
- Background, constraints, or assumptions that materially shaped the discussion
- The main issues, arguments, or options that were considered
- Unresolved points, missing information, or areas still requiring judgment
- Concrete next steps when the conversation implies them

The note must also satisfy these reader-facing constraints:

- A third party should be able to understand the note without reading the original discussion log.
- References to materials should be understandable on their own, even when the original link or path is not available.
- If the source mentions something like an absolute path, an internal folder layout, a private document URL, or a thread-local shorthand, convert it into a descriptive label such as the document's role, topic, or relevance unless the exact reference is required.
- Omit or generalize concrete references that expose private, machine-specific, or irrelevant detail.

## Style

- Write for clarity, not completeness-by-default.
- Prefer structure over chronology.
- Separate confirmed conclusions from interpretation, assumptions, and open questions.
- When details are inferred from partial source material, signal that uncertainty plainly instead of inventing specifics.
- When the source discussion is messy, make that mess legible rather than hiding it.
- Prefer reader-oriented labels over raw paths, links, IDs, or shorthand when the literal reference is not important.
- Use direct headings and concise prose.
- Keep the output structured and easy to scan. Use Markdown headings and lists when they help clarity, but do not treat file output as part of the task.

## Final Response

Respond in the user's language unless they ask otherwise. Return the structured summary directly. If any important uncertainty remains, mark it explicitly inside the summary instead of burying it in side commentary.
