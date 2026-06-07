---
name: summarize-discussion-coherently
description: Summarize a discussion into a coherent Markdown note that preserves the conclusion, background, intent, unresolved points, and next steps. Choose an appropriate organizing framework such as PREP, TAPS, SCQA, a chronological recap, an issue-structuring memo, or a decision memo based on the conversation itself. Use when the user asks to "summarize what we've discussed so far", organize a personal conversation log, turn rough dialogue into a structured note, or wants the summary to clarify purpose and unresolved issues instead of only compressing text.
---

# Summarize Discussion Coherently

## Overview

Turn a personal discussion log, rough back-and-forth, or scattered notes into a coherent Markdown document. Do not merely shorten the text. Reconstruct the discussion so the reader can understand what the conversation was trying to achieve, what was concluded, what reasoning mattered, and what remains unresolved.

## Workflow

1. Read enough of the conversation to identify the main objective, the current state of agreement, and whether the discussion is explanatory, exploratory, or decision-oriented.
2. Infer the most suitable organizing framework before drafting. Prefer the framework that makes the discussion easiest to understand, not the one that sounds most formal.
3. If critical information is missing and the ambiguity would materially change the summary, ask up to three concise clarification questions. Otherwise continue and mark uncertain points explicitly.
4. Reconstruct the content by issue, rationale, and outcome. Do not simply replay the conversation in chronological order unless the sequence itself is necessary to explain the result.
5. Preserve both the conclusion and the context that led to it. Include the user's purpose, relevant constraints, tradeoffs, and unresolved points when they matter.
6. Write the result as a Markdown note that can be saved directly as an `.md` file.
7. At the end, quickly self-check whether the summary is coherent, decision-useful, and faithful to the source discussion.

## Framework Selection

Choose one primary framework and say which one you used.

| Framework | Use it when | What it is good at |
| --- | --- | --- |
| `PREP` | The discussion mainly needs to land one clear claim with supporting reasoning and a concise example or illustration. | Producing a short, persuasive summary with a clear throughline. |
| `TAPS` | The note should move from topic or tension to analysis, proposal, and next steps. | Turning a messy discussion into an actionable progression. |
| `SCQA` | The discussion needs a narrative flow from context to complication, key question, and answer. | Explaining why the issue matters before stating the conclusion. |
| `Chronological recap` | The order of the exchange materially affects the meaning, such as when later turns revise or overturn earlier assumptions. | Preserving sequence without losing coherence. |
| `Issue-structuring memo` | The discussion contains multiple mixed concerns, assumptions, objections, or open questions that need to be separated clearly. | Cutting tangled dialogue into distinct issues and statuses. |
| `Decision memo` | The conversation compares options, criteria, tradeoffs, and a recommended direction. | Making a recommendation and preserving the basis for it. |

You may blend techniques, but the final note should still have one dominant organizing frame.

## Output Contract

Do not force one fixed template for every case. The exact section order and headings may vary with the chosen framework, but the note must include all of the following somewhere in the document:

- The chosen organizing framework
- A concise conclusion or current best summary
- The purpose or intent behind the discussion
- Background, constraints, or assumptions that materially shaped the discussion
- The main issues, arguments, or options that were considered
- Unresolved points, missing information, or areas still requiring judgment
- Concrete next steps when the conversation implies them

## Style

- Write for clarity, not completeness-by-default.
- Prefer structure over chronology.
- Separate confirmed conclusions from interpretation, assumptions, and open questions.
- When the source discussion is messy, make that mess legible rather than hiding it.
- Use direct headings and concise prose.
- Keep the output in Markdown and avoid decorative formatting.

## Final Response

Respond in the user's language unless they ask otherwise. Return the Markdown note directly. If any important uncertainty remains, mark it explicitly inside the note instead of burying it in side commentary.

## Example Shapes

### Example shape: PREP

```md
# Why we should create a wrapper skill

## Framework
PREP

## Point
The best path is to build a wrapper on top of an existing meeting-summary skill.

## Reason
Existing skills already handle Markdown summaries well, but they do not reliably reorganize personal discussions by purpose, rationale, and unresolved points.

## Example
The current discussion asked not only for a conclusion, but also for background and issue clarification. That is beyond a plain meeting-minutes output.

## Restated point
Build the wrapper and make framework selection part of the workflow.

## Open questions
- Which framework names should be exposed to the user?
```

### Example shape: Decision memo

```md
# Discussion summary for the new skill

## Framework
Decision memo

## Current conclusion
Use `summarize-discussion-coherently` as the skill name and keep the output contract fixed while letting the internal structure vary by framework.

## Purpose
Define a reusable skill that turns personal dialogue into a coherent Markdown summary.

## Options considered
### Fixed template
Easy to standardize, but it undermines the value of choosing a framework.

### Minimum contract plus framework-specific structure
Preserves consistency while keeping the chosen framework meaningful.

## Recommendation
Adopt the minimum contract approach.

## Unresolved points
- How opinionated the default heading structure should be

## Next steps
- Draft `SKILL.md` and `SKILL-ja.md`
```
