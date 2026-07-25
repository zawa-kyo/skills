# E2E Test Guidance

## Boundary And Journeys

Use E2E when confidence depends on an external entry point, system-wide configuration or routing, identity across boundaries, communication across processes, or a critical externally visible outcome.
Define the actual arrangement and limit the confidence claim to account for replaced, sandboxed, or unavailable dependencies.

Choose a small set of journeys that protect high-impact outcomes and traverse important wiring.
Keep validation combinations and domain edge cases at narrower levels when possible.
Distinguish deployment or availability smoke checks from business journeys so their guarantees are not confused.

## Environment And State

Record assumptions about version, configuration, endpoints, identity, permissions, data isolation, clocks, asynchronous work, external sandboxes, and observability.
When a prerequisite is unavailable, report that condition distinctly from a product failure.

Arrange state through public or explicitly supported setup paths.
Lower-level setup is acceptable when it creates valid reachable state and remains separate from the behavior under test.
Use unique owned data and do not depend on state left by another test.

Contain payments, messages, destructive operations, and third-party effects with approved environments, accounts, sandboxes, or endpoints.
Record real contracts left unverified.

## Reliable Execution

- Drive the journey through the public interface represented by the test.
- Wait for an observable condition with a clear timeout instead of using fixed sleeps.
- Assert externally meaningful outcomes.
- Capture enough logs, responses, request identifiers, screenshots, or traces to identify the failing boundary.
- Redact secrets and sensitive data.
- Treat repeated flakiness as a defect. Use retries only where the external contract is explicitly retryable.
- Give every temporary quarantine an owner and an exit condition.
- Run cleanup after failures where possible without hiding the original failure.

One journey may contain several actions when they form one business or deployment purpose.
Do not combine unrelated journeys merely to save startup time.
