# Tasks: 024 — Fixing Bugs and Missing Information

**Input**: Design documents from `/specs/024-fixing-bugs-and-missing-info/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)

## Phase 1: Setup (Shared Infrastructure)
- [X] T001 Verify project structure and component files for Feature 024

---

## Phase 2: Foundational (Blocking Prerequisites)
- [X] T002 Verify theme tokens and header/mobile menu integration points

---

## Phase 3: User Story 1 - Mobile Navigation Usability & Theme Toggle (Priority: P1) — MVP
- [X] T003 [US1] Add explicit, keyboard-accessible close control inside MobileMenu.tsx with proper aria attributes
- [X] T004 [US1] Integrate ThemeToggle into mobile navigation view in MobileMenu.tsx / Header.tsx
- [X] T005 [US1] Verify Escape key and navigation link clicks properly close the mobile menu

---

## Phase 4: User Story 2 - Factual Corrections & Copy Audit (Priority: P2)
- [X] T006 [US2] Update DeepX Hackathon achievement year to 2026 in src/data/achievementsData.ts
- [X] T007 [US2] Audit and remove exaggerated wording ("mastered", "expert", "production-grade", etc.) across data files and sections
- [X] T008 [US2] Verify Cashier App and project descriptions are factual and privacy-safe

---

## Phase 5: Polish & Cross-Cutting Concerns
- [X] T009 [P] Run quickstart.md validation scenarios across mobile viewports and themes
- [X] T010 Execute production build verification via npm run build
