# Integration Test Guidance

## Boundary And Dependencies

State the integration behavior and risk, then specify the entry point, included components, process-external dependencies, exclusions, and observations.
The confidence claim must not extend beyond that boundary.

Classify dependencies by the role they play in the risk, not only by technology or organizational ownership:

- Keep a dependency real when its behavior or contract is part of the confidence claim and the environment can contain its effects.
- Control or replace a dependency when real effects are unsafe, unavailable, or outside the claim.
- Record the remaining gap when a substitute cannot reproduce relevant production behavior.

Managed and unmanaged dependencies are useful vocabulary when the project uses it, not a required model.
When vendor, protocol, transaction, query, or persistence behavior is at risk, preserve the relevant production product and configuration semantics.

Verify interactions only when communication itself is externally meaningful.
Observe the owned boundary closest to the external system instead of mocking internal collaborator chains.

## Scenarios And State

Start with a representative successful path across the integration.
Add failure cases when they depend on real integration behavior, such as a constraint, transaction boundary, serialization mismatch, adapter mapping, infrastructure ordering, or framework configuration.
Keep combinatorial domain cases in narrower tests when possible.

Each test must establish its own state and remain independent of execution order.
Choose unique data, cleanup before tests, isolated namespaces, or disposable environments according to production fidelity and cost.
Do not rely only on cleanup after successful tests.

Keep business-relevant inputs visible.
Use helpers for technical setup without hiding the scenario.

## Implementation And Review

- Keep one coherent scenario rather than combining unrelated checks to save setup time.
- Assert meaningful output, persisted state, or boundary contracts without reproducing production logic.
- Use condition-based bounded waiting instead of fixed sleeps.
- Distinguish environment, arrangement, product, and observation failures.
- Provide failure evidence that identifies the affected boundary.

If the real dependency cannot be exercised, keep any useful narrower test and state what remains unverified.
