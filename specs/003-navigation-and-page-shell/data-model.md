# Navigation Data Model & Structure: Navigation and Page Shell (Feature 003)

## Navigation & Landmark Schemas

### 1. Navigation Link Item
```typescript
interface NavItem {
  label: string;
  href: string; // e.g., '#hero', '#about', '#projects', '#contact'
  isExternal?: boolean;
}
```

### 2. Semantic Landmarks Structure
| Landmark Tag | Role / Purpose | Contents |
|--------------|----------------|----------|
| `<header>` | Global Header | Top navigation bar, logo/name, desktop nav links, theme toggle, mobile menu button |
| `<nav>` | Navigation | Container for primary section navigation links |
| `<main>` | Main Content | Wraps all primary portfolio sections in defined order |
| `<section>` | Section Landmark | Individual portfolio sections (Hero, About, Skills, Projects, etc.) with unique IDs |
| `<footer>` | Global Footer | Copyright, copyright year, quick links, creator identity |
