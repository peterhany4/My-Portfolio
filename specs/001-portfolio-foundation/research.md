# Research: Portfolio Foundation (Feature 001)

## 1. Build Tooling & Framework
- **Decision**: React + Vite + TypeScript
- **Rationale**: Vite provides extremely fast HMR (Hot Module Replacement), instant server start, and optimized production builds. TypeScript ensures type safety for structured portfolio data (projects, skills, education).
- **Alternatives Considered**: Create React App (deprecated/slow), Next.js (unnecessary server-side complexity for a static portfolio violating Purposeful Simplicity).

## 2. Styling & Theme System
- **Decision**: Tailwind CSS + CSS Variables for Theme Management
- **Rationale**: Tailwind offers utility-first responsive design, excellent performance, and easy dark/light mode switching via class toggling or attribute mapping.
- **Alternatives Considered**: Styled Components (runtime overhead), Vanilla CSS (slower development velocity).

## 3. Content Separation Strategy
- **Decision**: TypeScript data modules / JSON files located in `src/data/`
- **Rationale**: Separates content (projects, skills, education items) from React components (`src/components/`), ensuring that updating portfolio content requires zero changes to UI presentation logic.
- **Alternatives Considered**: Hardcoding content inside JSX components (poor maintainability).

## 4. Iconography & Animation
- **Decision**: Lucide React + Tailwind CSS transitions / Framer Motion (as needed)
- **Rationale**: Lucide provides clean, tree-shakeable SVG icons. Tailwind / Framer Motion handles lightweight, restrained animations respecting `prefers-reduced-motion`.
- **Alternatives Considered**: Heavy icon libraries, complex 3D libraries (violates scope discipline).
