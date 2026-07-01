# Review Heuristics

## Review Flow

For unit test reviews, inspect in this order:

1. What behavior is the test protecting?
2. Is that behavior valuable enough for a unit test?
3. Is the test boundary based on behavior rather than implementation structure?
4. Does the test observe a meaningful result?
5. Are test doubles used only where they reduce volatility or verify meaningful boundary communication?
6. Is the test readable, straight-line, and low-maintenance?
7. Does hard-to-test code suggest a design change?

## Findings

When reporting a problem, include:

- the rule or principle being violated
- the concrete maintenance or regression risk
- the smallest useful correction
- any applicability assumption

Do not present a stylistic preference as a defect unless it affects behavior, refactoring resistance, readability, or maintenance cost.

## Anti-Pattern Index

| Symptom                                   | Likely reference                                     |
| ----------------------------------------- | ---------------------------------------------------- |
| Test asserts helper calls or call order   | `observation-and-oracles.md`                         |
| Test verifies a stub                      | `observation-and-oracles.md`                         |
| Test only mirrors a class or method name  | `test-target-selection.md`, `test-construction.md`   |
| Test needs private access                 | `test-target-selection.md`, `design-feedback.md`     |
| Test duplicates production algorithm      | `observation-and-oracles.md`, `test-construction.md` |
| Many mocks are needed for domain behavior | `test-target-selection.md`, `design-feedback.md`     |
| Production code has test-only switches    | `design-feedback.md`                                 |

## No Findings

If no blocking issue is found, say so clearly. Mention remaining risks only when they affect confidence, such as incomplete context, unrun tests, or unclear production contracts.
