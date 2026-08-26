---
name: review-multi-perspective
description: Coordinate independent reviews by multiple agents using distinct perspectives, then consolidate evidence-backed findings without hiding disagreements. Use when the user explicitly asks for multiple agents, independent reviewers, or a multi-perspective review. Do not use for an ordinary review.
---

# Review from Multiple Perspectives

## Workflow

1. Choose at least two review lenses that address different risks in the target. Use no more reviewers than those lenses require.
2. Assign each lens to a separate subagent.
   - Give each reviewer the same target, goal, and constraints, but do not share other reviewers' findings.
   - Give each reviewer a distinct question or scope.
   - Apply relevant specialist skills without further delegation.
   - Ask for evidence, impact, and the smallest useful correction.
3. Run the reviews concurrently when tools allow.
4. Consolidate the findings.
   - Order findings by priority.
   - Merge only findings with the same cause and impact.
   - Preserve supported disagreements instead of treating reviewer votes as confidence.
5. Mark a lens as unverified when delegation is unavailable or its reviewer does not finish. Do not claim a multi-agent review in that case.

Limit this skill to perspective selection, delegation, and consolidation. Do not add domain-specific criteria or make an acceptance decision.
