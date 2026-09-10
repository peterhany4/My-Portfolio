# Feature Specification: 024 — Fixing Bugs and Missing Information

## Overview

Perform corrective bug fixes and information cleanup across the portfolio to resolve mobile navigation usability issues (adding an explicit close button and mobile theme toggle), correct the DeepX Hackathon achievement year to 2026, audit and remove exaggerated/self-inflating copywriting while maintaining confident student identity ("Computer Science Student & Software Developer"), and verify project descriptions (especially the Cashier App) for factual accuracy and privacy protection.

## User Scenarios & Testing

### Scenario 1: Mobile Navigation & Theme Controls
- **Actor**: Mobile Site Visitor
- **Description**: Opening the mobile navigation menu on a smartphone viewport, toggling light/dark themes, and closing the menu via the new close control, Escape key, or navigation links.
- **Acceptance Criteria**:
  - An intuitive, keyboard-accessible close button is present inside the opened mobile navigation menu.
  - The light/dark/system theme toggle is visible and fully functional on mobile viewports.
  - Pressing Escape or clicking any navigation link successfully closes the menu.
  - `aria-expanded` and `aria-controls` attributes correctly reflect the mobile menu state.

### Scenario 2: Factual Accuracy & Tone Audit
- **Actor**: Site Visitor / Reviewer
- **Description**: Inspecting achievements and site copy for accurate dates and honest, student-appropriate representation.
- **Acceptance Criteria**:
  - DeepX Hackathon achievement year displays 2026.
  - Exaggerated marketing claims ("expert", "mastered", "production-grade", "industry-leading") are removed and replaced with accurate terms ("built", "developed", "learned", "explored").

### Scenario 3: Project Descriptions & Privacy
- **Actor**: Site Visitor / Reviewer
- **Description**: Reviewing project cards (Cashier App, Campus Lost & Found, etc.) for factual technology stacks and safe portfolio-level descriptions without proprietary leaks.
- **Acceptance Criteria**:
  - Cashier App and other featured projects accurately reflect actual technologies without unverified commercial deployment claims or exposed private/client data.

## Functional Requirements

### FR1: Mobile Navigation Close Control
- The mobile navigation drawer MUST provide an intuitive, keyboard-accessible close control.
- Pressing Escape or clicking a navigation link MUST close the mobile menu.
- `aria-expanded` and `aria-controls` MUST correctly associate the trigger button with the mobile menu.

### FR2: Mobile Theme Toggle Access
- The light/dark theme control MUST be visible and accessible on mobile viewports within the mobile header/navigation.

### FR3: Factual Achievement Date
- The DeepX Hackathon achievement MUST display the verified year: 2026.

### FR4: Tone & Copy Audit
- All portfolio copy MUST be audited to remove exaggerated, self-inflating claims while maintaining a confident "Computer Science Student & Software Developer" identity.

### FR5: Project Factuality & Privacy
- Project descriptions and tech stacks MUST be factually accurate and safe regarding private/commercial work.

## Success Criteria

- **Measurable & Verifiable Outcomes**:
  - 100% of mobile navigation usability and theme toggle requirements verified.
  - All factual errors, achievement dates, and exaggerated claims corrected.
  - Production build compiles successfully.

## Assumptions & Constraints
- Corrective feature governed by Constitution Rules I (Authentic Representation), IV (Purposeful Simplicity), and V (Professional UX).
