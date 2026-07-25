# Subscription service

```typescript
export class SubscriptionService {
  constructor(
    private readonly repository: SubscriptionRepository,
    private readonly clock: Clock,
  ) {}

  renew(id: string): RenewalResult {
    const subscription = this.repository.find(id);
    if (subscription.cancelled || subscription.expiresAt <= this.clock.now()) {
      return { renewed: false };
    }
    subscription.expiresAt = addYear(subscription.expiresAt);
    this.repository.save(subscription);
    return { renewed: true };
  }
}
```

There is no architecture document.
Other services in the repository follow the same transaction-script style.
The user asks for unit tests and is open to a small refactor, but has not requested an architectural rewrite.
