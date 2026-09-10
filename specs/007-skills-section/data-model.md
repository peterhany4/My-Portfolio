# Data Model: Skills Section (Feature 007)

## Skills Data Schema

```typescript
interface SkillItem {
  name: string;
}

interface SkillCategoryData {
  category: string;
  skills: SkillItem[];
}
```
