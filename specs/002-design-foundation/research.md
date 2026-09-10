# Research: Design Foundation (Feature 002)

## 1. Theme Strategy & Anti-Flash
- **Decision**: Class-based dark mode (`darkMode: 'class'` in Tailwind) with an inline head script checking `localStorage` and `window.matchMedia`.
- **Rationale**: Prevents any white/dark flash on initial page load by setting the `dark` class on the `<html>` root before React hydration.
- **Alternatives Considered**: React-only useEffect state initialization (causes visible theme flash on reload).

## 2. Color Token Architecture
- **Decision**: Semantic color tokens (`bg-background`, `text-primary`, `text-secondary`, `border-color`, `surface-color`, `accent-color`) mapped to Tailwind CSS theme extension.
- **Rationale**: Decouples component styling from hardcoded color values (e.g., `zinc-900`), enabling robust and consistent theming.
- **Alternatives Considered**: Ad-hoc color classes per component (leads to inconsistent dark mode styling).

## 3. Motion & Reduced Motion Handling
- **Decision**: CSS media query `@media (prefers-reduced-motion: reduce)` combined with Tailwind's `motion-safe:` and `motion-reduce:` modifiers.
- **Rationale**: Automatically respects user accessibility preferences for reduced motion without requiring complex JavaScript state.
- **Alternatives Considered**: JavaScript-based global motion toggles (unnecessary overhead).
