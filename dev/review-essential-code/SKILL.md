---
name: review-essential-code
description: Review whether code changes solve the root cause or add an AI-style ad hoc workaround. Check bugs, regressions, missing tests, excessive branching or error handling, and duplicated logic, then report concrete risks and the smallest useful fix. Use for code reviews.
---

# Review Essential Code

## Purpose

Review whether a code change solves the root problem within the existing design.
Look for AI-style patches that hide an observed failure with special cases, duplicated logic, broad guards, or needless abstraction.

## Workflow

1. Identify the review target and scope. If none is given, inspect current Git changes separately for staged and unstaged files. Do not modify the worktree or index while reviewing.
2. Read surrounding code, tests, and documentation to understand the behavior, invariants, public contracts, ownership boundaries, and local design patterns.
3. Identify the problem the change is meant to solve, the path it changes, and the boundary that should own the behavior.
4. Check ordinary risks: bugs, regressions, data loss, security, performance, API contracts, and missing tests.
5. Check whether the change is essential:
   - Does it fix the root cause rather than suppress the failure?
   - Does it use existing rules and ownership boundaries rather than special-casing an input?
   - Does it reduce complexity and duplication rather than adding branches, flags, retries, waits, broad error handling, or type workarounds?
   - Is the behavior clear at the call site, and is the maintenance rationale clear?
6. Report only concrete, evidence-backed problems. Put assumptions that remain hypothetical into open questions, and say clearly when no issues were found.

## Tests

When the test boundary or test-level choice is itself the issue, use `guide-automated-tests` or the matching specialist. Do not report preferences about test style.

## Output

Report findings in severity order with file and line, concrete risk, evidence, and the smallest useful fix.
Put non-blocking assumptions, open questions, and unrun checks after the findings when relevant. Do not change code unless explicitly asked. Write the review in the user's language.
