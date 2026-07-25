# Sources

This file records source use for maintainers. Runtime guidance lives in `references/guidance.md`.

## Primary Source

Vladimir Khorikov, _Unit Testing: Principles, Practices, and Patterns_.

Adopted ideas:

- focus tests on observable behavior rather than implementation details
- treat the unit as a behavior boundary rather than one class by definition
- control shared and volatile dependencies while keeping stable collaborators real when practical
- do not verify stubs; verify communication only when it is meaningful behavior
- treat hard-to-test code as possible design feedback
- prefer production improvements over test-only accommodations

## Adaptations

- Classical unit testing is one useful option for many domain-heavy systems, not a default that overrides project evidence.
- When design intent remains unclear, make dependencies and observable behavior explicit with the smallest justified change rather than introducing a preferred architecture.
- Agents inspect existing architecture first and confirm ambiguous design intent with the user before consequential changes.
- The specialist owns a scoped boundary check for a clear unit-test request; shared purpose, coverage policy, and cross-level allocation belong to `guide-automated-tests`.
- Project context is read before strategy so guidance can adapt to local responsibilities and constraints.
- Review is a compressed pass over behavior, context, boundary, cases, and implementation.

Add another source when it materially changes or challenges these rules. Do not create rule IDs or a second copy of runtime guidance only for traceability.
