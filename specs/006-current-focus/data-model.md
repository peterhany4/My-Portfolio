# Data Model: Current Focus (Feature 006)

## Current Focus Schema

```typescript
interface FocusArea {
  title: string;
  description: string;
  status: 'Current' | 'Exploring' | 'Learning';
}
```
