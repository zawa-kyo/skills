# Rule Cards

Use this file as the working ledger when adding, revising, or removing rules.

## Template

| Field         | Description                                                                   |
| ------------- | ----------------------------------------------------------------------------- |
| Rule ID       | Stable identifier for the rule.                                               |
| Summary       | One or two sentences stating the rule.                                        |
| Layer         | Foundation / Target Selection / Observation / Construction / Design Feedback. |
| Priority      | Essential / Recommended / Suggested.                                          |
| Destination   | The reference file that owns the rule.                                        |
| Applicability | When the rule applies.                                                        |
| Trade-offs    | What the rule costs or when exceptions are valid.                             |
| Sources       | Supporting sources or project experience.                                     |
| Status        | Adopted / Pending / Rejected / Superseded.                                    |
| Notes         | Duplicate candidates, open questions, or migration notes.                     |

## Initial Cards

| Rule ID    | Summary                                                                       | Layer            | Priority    | Destination                             | Applicability            | Trade-offs                                        | Sources  | Status  | Notes         |
| ---------- | ----------------------------------------------------------------------------- | ---------------- | ----------- | --------------------------------------- | ------------------------ | ------------------------------------------------- | -------- | ------- | ------------- |
| UT-FND-001 | Unit tests should support sustainable change rather than maximize test count. | Foundation       | Essential   | `references/foundations.md`             | Any unit test work.      | Low-value tests should be improved or removed.    | Khorikov | Adopted | Initial rule. |
| UT-TGT-001 | Choose test units by behavior, not by class structure alone.                  | Target Selection | Essential   | `references/test-target-selection.md`   | Test boundary selection. | Some behaviors span several classes.              | Khorikov | Adopted | Initial rule. |
| UT-OBS-001 | Prefer observable results over implementation details.                        | Observation      | Essential   | `references/observation-and-oracles.md` | Assertion selection.     | Boundary interactions may need mocks.             | Khorikov | Adopted | Initial rule. |
| UT-CNS-001 | Keep tests structured around Arrange, Act, and Assert.                        | Construction     | Recommended | `references/test-construction.md`       | Most unit tests.         | Tiny tests may not need comments.                 | Khorikov | Adopted | Initial rule. |
| UT-DFB-001 | Treat hard-to-test valuable behavior as design feedback.                      | Design Feedback  | Recommended | `references/design-feedback.md`         | Testability concerns.    | Not every hard test means domain design is wrong. | Khorikov | Adopted | Initial rule. |
