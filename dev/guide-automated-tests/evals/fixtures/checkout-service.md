# Checkout service

- The application is a modular monolith.
- `CheckoutService` calculates discounts in process, writes orders to PostgreSQL, and calls a payment provider through `PaymentGateway`.
- Pull requests run in-process tests and PostgreSQL containers. A browser environment is available only nightly.
- Recent escaped defects include a transaction rollback error and a missing production route.
- The payment provider offers a sandbox, but its rate limit and CI availability are unknown.

Existing tests cover discount examples with real value objects and mock `PaymentGateway`.
