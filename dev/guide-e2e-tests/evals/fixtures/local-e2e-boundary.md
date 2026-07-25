# Project E2E convention

The team calls a test E2E when it starts the web app, API, worker, and PostgreSQL with Docker Compose, then drives the public browser interface.
Pull requests cannot access a separately deployed environment.
Third-party payment is replaced by a local contract-compatible fake.
A nightly smoke test checks the deployed production route without creating an order.
