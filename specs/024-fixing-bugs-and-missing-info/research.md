# Research: 024 — Fixing Bugs and Missing Information

## Research Topics & Decisions

### 1. Mobile Navigation Close Control & Theme Toggle
- **Decision**: Update `MobileMenu.tsx` to include an explicit, keyboard-accessible close button (using `X` icon from Lucide React) and include the `ThemeToggle` component within the mobile drawer/header area so it is fully accessible on mobile viewports. Connect `aria-controls` and `aria-expanded` properly in `Header.tsx`.
- **Rationale**: Solves mobile usability gaps without altering desktop navigation or introducing duplicate state.

### 2. Achievement & Project Data Corrections
- **Decision**: Update `achievementsData.ts` to set DeepX Hackathon year to `2026`. Review `featuredProjectsData.ts` and `additionalProjectsData.ts` to ensure Cashier App and other projects are factual, private-safe, and free of inflated marketing claims.
- **Rationale**: Enforces Constitution Rule I (Authentic Representation).

### 3. Copywriting Audit
- **Decision**: Audit data files (`aboutData.ts`, `heroData.ts`, section components) to remove hyperbolic terms ("expert", "mastered", "production-grade", "industry-leading") while preserving confident student developer framing ("Computer Science Student & Software Developer").
- **Rationale**: Aligns portfolio voice with honest, professional student representation.
