# Data Model: Featured Projects (Feature 008)

## Featured Project Schema

```typescript
interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  problem: string;
  technicalHighlights: string[];
  technologies: string[];
  status: 'Completed' | 'Commercial' | 'Hackathon';
  repositoryUrl?: string;
  demoUrl?: string;
  isPrivate?: boolean;
}
```
