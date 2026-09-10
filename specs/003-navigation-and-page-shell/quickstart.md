# Quickstart Guide: Navigation and Page Shell (Feature 003)

## Prerequisites
- Completed Phase 0 & Phase 1 (Foundation & Design System)
- Node.js & npm installed

## Validation Scenarios

1. **Verify Desktop Navigation & Smooth Scrolling**:
   - Start dev server: `npm run dev`
   - Click any navigation link in the desktop header.
   - Verify smooth scrolling to the target section.

2. **Verify Mobile Navigation & Menu Behavior**:
   - Resize viewport to mobile width (&lt; 768px).
   - Click the hamburger menu button.
   - Verify the mobile menu opens, focus is managed, and clicking a link scrolls to the section while automatically closing the menu.
   - Press `Escape` while menu is open and verify it closes.

3. **Verify Semantic Landmarks & Accessibility**:
   - Inspect DOM structure using browser developer tools.
   - Verify presence of semantic HTML tags (`header`, `nav`, `main`, `section`, `footer`).
   - Run accessibility audits to ensure zero landmark violations.
