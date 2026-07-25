# Unit Test Guidance

## Assignment And Context

State the behavior, regression risk, reason a unit test is credible, and risks assigned elsewhere.
A unit test should run quickly enough for frequent feedback, remain independent from other tests, avoid uncontrolled shared or process-external state, and expose a meaningful result.

Inspect enough context to identify:

- domain behavior and invariants
- the code responsible for the decision
- established architecture and test conventions
- stable in-process collaborators
- shared, volatile, and process-external dependencies
- design problems that materially obstruct testing

Hard-to-test code can reveal hidden dependencies, mixed responsibilities, global state, or decisions trapped behind effects.
It is evidence to investigate, not automatic proof that the architecture is wrong.

When no architecture is explicit, first infer responsibilities from names, dependencies, call direction, and existing tests.
If the intent remains ambiguous and affects production changes, discuss the interpretations with the user.

## Boundary And Dependencies

The unit is the behavior under test, not necessarily one class or method.
For domain-heavy code, keeping stable collaborators real is a useful default because it tests a coherent behavior.
Narrow one-class tests are also valid when local conventions, framework constraints, fault localization, or collaborator volatility justify them.

Control shared and volatile dependencies such as current time, randomness, shared databases, filesystems, remote services, mutable global state, and process-external messaging.
Do not replace stable in-process collaborators merely because they are separate classes.

Treat these as defaults to test against project evidence, not rules that override a coherent local design.

Prefer observation in this order when each option expresses the same contract:

1. returned output or pure result
2. externally visible state
3. communication with a meaningful boundary

Use interaction assertions when communication itself is the behavior.
Do not verify how a stub was queried unless that query is part of the contract.

## Cases And Assertions

Design a small set of cases that name the behavior, relevant input or precondition, action, and expected observable result.
Prefer contracts, requirements, invariants, boundaries, and meaningful examples over enumerating implementation branches.

Avoid assertions about private algorithms, helper calls, intermediate state, or call order unless they are public contracts.
If valuable private logic has a distinct responsibility, consider extracting a concept with a public contract instead of exposing private members for tests.

Mock communication at a meaningful boundary when the externally visible effect is what must be protected.
Do not mock ordinary domain collaborators only to force one-class-at-a-time tests.

## Implementation

- Follow local framework and naming conventions when they communicate behavior.
- Keep each test focused on one coherent behavior execution.
- Use Arrange, Act, Assert when it clarifies the flow; comments are optional when the structure is obvious.
- Keep assertion logic simple and independent from the production algorithm.
- Use parameterized tests when only fixed inputs and expected results vary.
- Use builders or factories for technical setup while keeping scenario-relevant values visible.
- Do not add test-only branches, public setters, mutable globals, or relaxed production contracts.

Refactoring for testability is appropriate when it also improves the production design.
Explain larger alternatives and choose a scoped compromise with the user when the ideal refactor exceeds the task.

## Review

Review in this order:

1. Does the test protect the assigned behavior and risk?
2. Does the boundary fit the production responsibilities and confirmed design intent?
3. Does controlling dependencies preserve the mechanism being tested?
4. Do assertions observe meaningful behavior rather than implementation steps?
5. Are test doubles limited to useful roles?
6. Is the test deterministic, readable, and independently runnable?
7. Would removal, reassignment, or a production refactor be better than fixing the test in place?

Report the violated principle, concrete risk, applicability assumption, and smallest useful correction.
