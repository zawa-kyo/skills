# References

## Japanese Technical Writing Skill

### Source

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
- Reduce reader load by omitting incidental details the reader will not need later.
- Remove empty emphasis, theatrical setup, rhetorical questions, and AI-like posture words when they add no information.
- Use consistent formatting defaults for long-form Markdown, such as code fences, restrained bold, footnotes for side notes, and simple headings.

### Boundaries

- Do not force book-manuscript formatting on README entries, comments, labels, policies, or short guidance.
- Do not require one sentence per line when the surrounding repository uses another style.
- Do not ban punctuation or symbols mechanically when they are part of established notation, proper nouns, code, citations, or local style.
- Do not rewrite a document's structure unless the user asked for a larger edit or the current structure directly harms readability.
