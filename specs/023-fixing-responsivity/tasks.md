# Tasks: 023 — Fix Mobile Navbar Responsiveness

**Input**: Design documents from `/specs/023-fixing-responsivity/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Verify existing project structure and component files in src/components/

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before user story implementation

- [X] T002 Verify theme tokens and Tailwind styling setup in src/index.css and tailwind.config.js

---

## Phase 3: User Story 1 - Mobile Navbar Responsiveness & Opacity (Priority: P1) — MVP

**Goal**: Refactor the mobile navigation menu to feature a solid opaque surface, optimal sizing, and clean interactions.

**Independent Test**: Toggle mobile menu on a smartphone viewport and verify solid background opacity, balanced proportions, and smooth toggle behavior.

### Implementation for User Story 1

- [X] T003 [US1] Update mobile menu background styling in src/components/MobileMenu.tsx to use solid theme tokens (bg-background/bg-surface) instead of high transparency
- [X] T004 [US1] Refine mobile menu width, padding, and layout proportions in src/components/MobileMenu.tsx
- [X] T005 [US1] Ensure smooth toggle open/close interactions and ARIA attributes in src/components/Header.tsx and src/components/MobileMenu.tsx

**Checkpoint**: User Story 1 should be fully functional and testable independently

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Improvements and final verification

- [X] T006 [P] Execute quickstart validation scenarios in quickstart.md across mobile viewports
- [X] T007 Execute final production build verification via npm run build

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies
- **Foundational (Phase 2)**: Depends on Setup completion
- **User Story 1 (Phase 3)**: Depends on Foundational completion
- **Polish (Phase 4)**: Depends on User Story 1 completion

### Within Each User Story

- Styling and layout components before interaction verification

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Setup + Foundational
2. Complete User Story 1 (Mobile Navbar Responsiveness)
3. **STOP and VALIDATE**: Test mobile menu rendering and opacity independently
4. Build and deploy
