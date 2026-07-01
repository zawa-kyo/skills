# References

## Japanese Technical Writing Skill

[k16shikano/SKILL.md](https://gist.github.com/k16shikano/fd287c3133457c4fd8f5601d34aa817d)

### Summary

This `japanese-tech-writing` skill informed the long-form prose guidance in `revise-japanese-writing`.
This file is a maintenance reference, not part of the runtime workflow.

The skill focuses on Japanese technical manuscripts, articles, and explanatory prose.
It covers more than wording: paragraph structure, argument rigor, reader load, point of view, restrained emphasis, AI-like empty phrasing, and redundancy.

Those concerns fit `revise-japanese-writing` when the target is long-form prose.
The existing skill already handles Japanese fluency, terminology, translationese, and technical artifacts.
This reference adds checks for argument flow and reader load.

### Incorporated Ideas

- Make each paragraph move the argument one step.
- Match claims to the examples, evidence, and stated conditions.
- Explain the mechanism behind causal claims instead of only asserting the outcome.
- Preserve justified uncertainty, such as unverified possibilities, reader doubts, character perceptions, and counterfactuals.
- Separate distinct decisions, causes, and problem types instead of merging them into one vague category.
- Reduce reader load by omitting incidental details the reader will not need later.
- Remove empty emphasis, theatrical setup, rhetorical questions, and AI-like posture words when they add no information.
- Remove repeated claims, duplicate section roles, and summary sentences that restate what the reader can infer.
- Use consistent formatting defaults for long-form Markdown, such as code fences, restrained bold, footnotes for side notes, and simple headings.

### Boundaries

- Do not force book-manuscript formatting on README entries, comments, labels, policies, or short guidance.
- Do not require one sentence per line when the surrounding repository uses another style.
- Do not ban punctuation or symbols mechanically when they are part of established notation, proper nouns, code, citations, or local style.
- Do not rewrite a document's structure unless the user asked for a larger edit or the current structure directly harms readability.

## その文章、AIに書かせただろ

[その文章、AIに書かせただろ](https://note.com/ikora/n/n0bbb2828b91e)

### Summary

This article informed the anti-AI-writing checks for Japanese prose.
It treats surface markers such as dashes, excessive quotation marks, emoji, slogan-like headings, favored abstract words, stacked intensifiers, grand metaphors, and generic claims as symptoms rather than the whole problem.

### Incorporated Ideas

- Treat surface markers as review signals, not mechanical bans.
- Remove meaningless quotation marks, emoji, inflated metaphors, and stacked intensifiers when they do not serve the document.
- Replace generalized claims with the writer's concrete experience, observed behavior, or specific constraint.

## Forest-Project-Lab Japanese Writing Skills

- [`jp-style-check`](https://github.com/Forest-Project-Lab/jp-writing-skills/blob/main/plugin/skills/jp-style-check/SKILL.md)
- [`logic-jp-check`](https://github.com/Forest-Project-Lab/jp-writing-skills/blob/main/plugin/skills/logic-jp-check/SKILL.md)

License: MIT, copyright 2026 Forest-Project-Lab.

### Summary

These skills informed the defect-detection framing for Japanese prose review.
`jp-style-check` focuses on clarity, consistency, calques, and translationese.
`logic-jp-check` uses the same Japanese prose checks and adds argument checks for claims, grounds, induction, deduction, classification, and causality.

The relevant ideas fit `revise-japanese-writing` as review criteria rather than as a separate output format.
This skill already rewrites prose directly, so the incorporated guidance is phrased as internal judgment criteria and checklist items.

### Incorporated Ideas

- Treat style review as concrete defect detection, not aesthetic scoring.
- Check whether a sentence has one plausible interpretation, rather than mechanically treating every long sentence as unclear.
- Detect calques by asking whether the Japanese phrase traces an English idiom, metaphor, or marked construction.
- Use one name for one concept; do not vary key terms merely to avoid repetition.
- Treat rhythm-related issues as lower-confidence signals, not definitive defects.
- Check that claims and grounds are both present, meaningfully connected, and scoped to the available evidence.
- Distinguish causality from correlation, and make comparison dimensions or classification criteria explicit when they matter.

### Boundaries

- Do not copy the source skills' output format into this skill. `revise-japanese-writing` still reports edits and wording categories concisely.
- Do not make all rhythm or taste observations mandatory findings.
- Do not flag ordinary grammar, established loanwords, or locally accepted technical terms as calques.
- Keep the English and Japanese skill files synchronized; this reference file records the source and maintenance rationale.
