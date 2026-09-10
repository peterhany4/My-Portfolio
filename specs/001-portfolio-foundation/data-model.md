# Data Model: Portfolio Foundation (Feature 001)

## Core Data Schemas

### 1. Project Schema
```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  technicalHighlights: string[];
  technologies: string[];
  projectType: 'featured' | 'additional';
  status: 'completed' | 'in-progress' | 'commercial';
  repositoryUrl?: string;
  demoUrl?: string;
  isPrivate?: boolean;
}
```

### 2. Skill Schema
```typescript
interface SkillCategory {
  category: 'Languages' | 'Frontend' | 'Backend' | 'Desktop / Other' | 'Tools';
  skills: {
    name: string;
    icon?: string;
    proficiencyLevel?: 'Current' | 'Exploring' | 'Learning' | 'Experienced';
  }[];
}
```

### 3. Education & Achievement Schema
```typescript
interface EducationItem {
  institution: string;
  degree: string;
  studyPeriod: string;
  expectedGraduation: string;
  gpa?: string;
}

interface AchievementItem {
  title: string;
  organization?: string;
  date: string;
  description: string;
}
```
