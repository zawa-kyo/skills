# User repository

Production uses PostgreSQL and creates this index:

```sql
CREATE UNIQUE INDEX users_email_ci ON users (lower(email));
```

`UserRepository.save()` writes through the production ORM mapping.
The current test uses SQLite in memory and asserts that the ORM `insert` method was called once.
CI can start a PostgreSQL container, but the suite must support parallel workers.
