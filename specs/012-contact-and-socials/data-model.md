# Data Model: Contact and Social Links (Feature 012)

## Contact Data Schema

```typescript
interface ContactChannel {
  label: string;
  href: string;
  icon: string;
  isExternal?: boolean;
}
```
