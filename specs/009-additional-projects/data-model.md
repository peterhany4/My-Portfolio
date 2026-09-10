# Data Model: Additional Projects (Feature 009)

## Additional Project Schema

```typescript
interface AdditionalProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  repositoryUrl?: string;
}
```
