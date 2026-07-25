# Strategy Guidance

## Define The Needed Evidence

Start with the relevant failure and the evidence that would distinguish it from success.
Do not assume that an automated example-based test or one of the three specialists is the answer.

Describe each credible option by:

- entry point
- behavior, components, processes, and infrastructure included
- dependencies kept real, controlled, replaced, or unavailable
- in-process, separately started, or deployed arrangement
- observable result
- confidence and diagnostic value
- practical execution frequency
- creation, environment, and maintenance cost

Unit, integration, and E2E are useful profiles over these dimensions, not a complete taxonomy.
Use the project's terminology after making the actual boundary explicit.

## Select For Value

Choose an option or combination that provides enough evidence for the important risk and balances the user's priorities.
A narrower boundary is useful when it preserves the mechanism at risk and improves feedback or diagnosis.
A broader boundary is useful when it provides necessary fidelity or costs less overall than reproducing the same confidence through narrower tests.

Do not require every risk to be automated.
Record what remains covered by another control, accepted temporarily, or unverified.

## Decide The Outcome

Delegate when the work clearly matches a specialist:

- Unit tests protect behavior through a fast, deterministic boundary without uncontrolled shared or process-external state.
- Integration tests include real collaboration, infrastructure semantics, serialization, framework wiring, or a controlled process-external dependency that matters to the risk.
- E2E tests exercise a representative externally visible journey or system-wide wiring through the project's E2E boundary.

When the appropriate approach does not clearly match these profiles, continue from the evidence, constraints, and user priorities.
Do not invent a universal category list or force the work into the nearest specialist.

## Review A Portfolio

1. List important behaviors and failure risks.
2. Map each risk to the test or other control intended to detect it.
3. Check whether that verification includes the mechanism that can fail.
4. Identify missing risks and confidence claims that exceed the exercised boundary.
5. Identify overlap that adds no useful timing, fidelity, diagnostic, or defense-in-depth value.
6. Check whether feedback time, environment cost, and diagnosis fit the development workflow.

Counts, duration, and coverage can reveal areas to investigate.
They do not establish whether the protected risks are valuable.

## Prepare A Test Assignment

Use this section as the sole definition of the handoff contract.
Pass the specialist:

- behavior and failure risk
- selected boundary and reason
- entry point and included scope
- dependency treatment
- observable result
- required scenarios
- execution and maintenance constraints
- risks assigned elsewhere

The specialist inspects local code and framework conventions before implementing.
