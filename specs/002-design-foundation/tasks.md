# Tasks: 002 — Design Foundation

**Feature**: Design Foundation
**Feature Directory**: `specs/002-design-foundation`

## Execution Flow & Dependencies

```
Phase 1: Setup (Design Tokens & CSS Custom Properties)
  │
  ▼
Phase 2: Foundational Architecture (Tailwind theme configuration)
  │
  ▼
Phase 3: User Story 1 - Theme Discovery and Toggle (US1)
  │
  ▼
Phase 4: User Story 2 - Visual Hierarchy and Readability (US2)
  │
  ▼
Phase 5: User Story 3 - Respectful Motion and Interaction Polish (US3)
  │
  ▼
Phase 6: Polish & Cross-Cutting Verification
```

---

## Phase 1: Setup (Design Tokens & CSS Custom Properties)

- [X] T001 Define design system color tokens and variables for light and dark themes in src/index.css
- [X] T002 [P] Establish typography scale, font weight hierarchy, and line height utility definitions in src/index.css

---

## Phase 2: Foundational Architecture

- [X] T003 Configure Tailwind CSS theme extension for semantic color tokens and typography scale in tailwind.config.js
- [X] T004 [P] Establish shape, surface, and card border radius tokens in tailwind.config.js

---

## Phase 3: User Story 1 — Theme Discovery and Toggle (US1)

**Goal**: Implement theme persistence, system preference detection, anti-flash initialization, and manual toggle control.
**Independent Test Criteria**: Initial load respects system preference without flash, manual toggle switches between themes instantly, and preference persists across page reloads.

- [X] T005 [US1] Implement anti-flash theme initialization script in index.html head
- [X] T006 [P] [US1] Create ThemeContext and custom hook for managing theme state in src/hooks/useTheme.ts
- [X] T007 [US1] Implement accessible theme toggle component in src/components/ThemeToggle.tsx

---

## Phase 4: User Story 2 — Visual Hierarchy and Readability (US2)

**Goal**: Ensure typography, spacing rhythm, and color contrast comply with accessibility standards across all viewports.
**Independent Test Criteria**: Typography hierarchy is consistent across mobile to desktop, and text/interactive elements meet WCAG contrast requirements in both light and dark modes.

- [X] T008 [P] [US2] Apply semantic color classes and typography hierarchy across App layout in src/App.tsx
- [X] T009 [US2] Verify WCAG color contrast compliance for text, buttons, and focus states in light and dark themes

---

## Phase 5: User Story 3 — Respectful Motion and Interaction Polish (US3)

**Goal**: Add purposeful entrance, hover, and interaction animations while respecting `prefers-reduced-motion`.
**Independent Test Criteria**: Hover and focus states provide subtle visual feedback, and non-essential animations are disabled when `prefers-reduced-motion` is active.

- [X] T010 [P] [US3] Configure motion-safe and motion-reduce animation utilities in tailwind.config.js
- [X] T011 [US3] Implement polished hover and transition states for interactive elements in src/App.tsx

---

## Phase 6: Polish & Cross-Cutting Concerns

- [X] T012 Execute end-to-end design foundation validation per quickstart.md guidelines
- [X] T013 Verify complete adherence to Constitution visual quality and accessibility mandates

---

## Implementation Strategy & MVP Scope

- **MVP Scope**: Complete Phase 1 through Phase 3 (US1) for theme system setup, followed by Phase 4 (US2) and Phase 5 (US3) for typography and motion polish.
