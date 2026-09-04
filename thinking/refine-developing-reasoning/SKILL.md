---
name: refine-developing-reasoning
description: Refine a user's thinking or proposal through structured dialogue until the claim, assumptions, tradeoffs, and next questions become clear. Use for sounding-board discussion, organizing or deepening thoughts, reviewing a proposal's reasoning, or surfacing unstated assumptions.
---

# Refine Developing Reasoning

## Overview

Help the user refine thinking through dialogue. Separate the material into claims, assumptions, causal links, stakes, preserved value, tradeoffs, and unresolved questions.
The skill should sharpen the user's reasoning without replacing the user's judgment.

## When To Use

Use this skill when the user:

- Wants to organize scattered thoughts, notes, a proposal, or meeting material.
- Says they want to "think through", "use a sounding board", "pressure test", "整理する", "壁打ちする", or "深める" an idea.
- Has unease, disagreement, or intuition they cannot yet explain.
- Wants to improve a document's reasoning rather than only revise wording.
- Needs questions that reveal unstated assumptions, untested causal links, hidden tradeoffs, or the deeper conclusion.

Use a more specific skill for copyediting, factual research, code review, or simple summarization unless the user also wants reasoning refinement.

## Core Frame

Use two complementary lenses.
Do not require every output to show both lenses, but use them to decide what to ask and how to organize the result.

### Fact-Analysis Lens

Use this lens when the user is making or evaluating a positive claim, proposal, or improvement idea.
Clarify what is happening, how serious it is, and which intervention would solve or reduce it.
If one of these checks is missing, or if the claimed event may not be happening, call that out and ask about it.

| Check             | Meaning                                                  | Question                                                      |
| ----------------- | -------------------------------------------------------- | ------------------------------------------------------------- |
| Problem existence | Confirm the problem that is actually happening now.      | What is happening, and why should it be treated as a problem? |
| Impact            | Assess the size of the problem and the cost of inaction. | How serious is the problem if left alone?                     |
| Intervention fit  | Confirm how the proposed move would solve or reduce it.  | Which move would solve or reduce the problem, and why?        |

### Critical Preservation Lens

Use this lens when the user feels resistance, sees risk, or has not yet accounted for the value of the current state.
Use it not only for objections, but also to clarify what a stronger proposal must preserve.

| Check          | Meaning                                                 | Question                                                       |
| -------------- | ------------------------------------------------------- | -------------------------------------------------------------- |
| Current value  | Identify the good thing or value in the current state.  | What good thing exists in the current state?                   |
| Loss process   | Trace how that value would be affected or lost.         | How would the proposed change affect or remove that value?     |
| Impact if lost | Assess the impact if that value changed or disappeared. | How much would it matter if that value changed or disappeared? |

Use the critical preservation lens not only for objections, but also to identify the value that a stronger proposal must protect.

## Workflow

1. Identify what the user is trying to refine: a claim, proposal, decision, document, concern, or developing intuition.
2. Decide whether the immediate need is exploration, structure, challenge, or synthesis.
3. If the intent is unclear enough to miss the point, ask up to three concise questions. Otherwise continue with stated assumptions.
4. Restate the current position briefly so the user can correct it.
5. Split the reasoning into claim, grounds, assumptions, causal links, stakes, tradeoffs, and unresolved points.
6. Use the fact-analysis lens to test problem existence, impact, and intervention fit.
7. Use the critical preservation lens to test current value, loss process, and impact if lost.
8. Ask focused questions that would materially change the conclusion. Avoid long generic question lists.
9. When enough signal exists, synthesize the refined reasoning into a clearer conclusion, updated position, or decision-ready memo.
10. End with the most useful next move: confirm the conclusion, collect missing evidence, rewrite the material, compare options, or continue the dialogue.

## Dialogue Behavior

- Be direct but collaborative.
- Do not debate to win. Question incomplete reasoning to improve it.
- Distinguish what the user has already supported from what is inferred.
- Preserve useful ambiguity when the evidence is still incomplete.
- Name the real tension when the user is mixing multiple problems, such as urgency versus quality, autonomy versus alignment, or speed versus maintainability.
- Prefer a few high-leverage questions over many broad questions.
- If the user wants iterative sounding-board dialogue, keep the response short enough that they can answer and continue.
- If the user provides a document, separate wording issues from reasoning issues before proposing edits.

## Output Shapes

Choose the lightest structure that helps the user move forward.
Do not apply one template to every case.

### Quick Sounding Board

Use when the user is still exploring.

```md
## Current Read

[A compact restatement of what the user seems to be saying.]

## The Main Tension

[The core conflict or missing decision.]

## Questions That Matter

- [Question that would change the conclusion.]
- [Question that surfaces an untested assumption.]

## Provisional Direction

[A cautious synthesis, clearly marked as provisional.]
```

### Reasoning Map

Use when the material is complex enough to need structure.

```md
## Working Conclusion

[The current best conclusion or claim.]

## Fact-Analysis Checks

| Check             | Current State | Gap |
| ----------------- | ------------- | --- |
| Problem existence | ...           | ... |
| Impact            | ...           | ... |
| Intervention fit  | ...           | ... |

## Critical Preservation Checks

| Check          | Current State | Gap |
| -------------- | ------------- | --- |
| Current value  | ...           | ... |
| Loss process   | ...           | ... |
| Impact if lost | ...           | ... |

## Refined Version

[A clearer version of the user's claim, proposal, or position.]

## Next Questions

- [Question or evidence needed next.]
```

### Decision-Ready Synthesis

Use when the user needs a sharpened conclusion or document direction.

```md
## Refined Conclusion

[A clear conclusion that follows from the discussion.]

## Why This Is The Conclusion

[The reasoning, scoped to what is known.]

## What This Must Preserve

[Existing value or constraint that should not be lost.]

## Remaining Risk

[What could still overturn the conclusion.]

## Next Move

[The concrete next step.]
```

## Final Response

Respond in the user's language unless they ask otherwise.
When the user is still thinking, return questions and a provisional structure rather than pretending the conclusion is settled.
When the user's material is already rich enough, return a refined synthesis and the next move.
If assumptions were necessary, state them briefly.
