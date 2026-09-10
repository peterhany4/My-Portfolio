# Hero Data Model & Structure: Hero Section (Feature 004)

## Hero Content Schema

```typescript
interface HeroAction {
  label: string;
  href: string;
  isPrimary?: boolean;
}

interface HeroContent {
  identityBadge: string;
  headline: string;
  description: string;
  actions: HeroAction[];
}
```
