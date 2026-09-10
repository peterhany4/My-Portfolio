# Tasks: 024 — Fixing Bugs and Missing Information

**Input**: Design documents from `/specs/024-fixing-bugs-and-missing-info/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Verify project structure and component files for Feature 024

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before user story implementation

- [X] T002 Verify theme tokens and header/mobile menu integration points

---

## Phase 3: User Story 1 - Mobile Navigation Usability & Theme Toggle (Priority: P1) — MVP

**Goal**: Add explicit keyboard-accessible close control and mobile theme toggle access.

**Independent Test**: Verify mobile menu opens, includes theme toggle and close button, and closes via close button, Escape, or link click.

### Implementation for User Story 1

- [X] T003 [US1] Add explicit, keyboard-accessible close control inside src/components/MobileMenu.tsx with proper aria attributes
- [X] T004 [US1] Integrate ThemeToggle into mobile navigation view in src/components/MobileMenu.tsx and src/components/Header.tsx
- [X] T005 [US1] Verify Escape key and navigation link clicks properly close the mobile menu

**Checkpoint**: User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Factual Corrections & Copy Audit (Priority: P2)

**Goal**: Correct DeepX date to 2026, remove exaggerated wording, and verify project descriptions.

**Independent Test**: Verify DeepX date displays 2026 and portfolio copy is free of exaggerated marketing claims.

### Implementation for User Story 2

- [X] T006 [US2] Update DeepX Hackathon achievement year to 2026 in src/data/achievementsData.ts
- [X] T007 [US2] Audit and remove exaggerated wording across src/data/aboutData.ts, src/data/heroData.ts, src/data/focusData.ts, and section components
- [X] T008 [US2] Verify Cashier App and project descriptions are factual and privacy-safe in src/data/featuredProjectsData.ts and src/data/portfolioData.ts (Technologies: Electron, React, Tailwind CSS, Vite, SQLite)

**Checkpoint**: User Story 2 should be fully functional and testable independently

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Improvements and final verification

- [X] T009 [P] Run quickstart.md validation scenarios across mobile viewports and themes
- [X] T010 Execute production build verification via npm run build
