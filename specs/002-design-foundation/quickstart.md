# Quickstart Guide: Design Foundation (Feature 002)

## Prerequisites
- Completed Phase 0 (Portfolio Foundation)
- Node.js & npm installed

## Validation Scenarios

1. **Verify Theme Toggle & Persistence**:
   - Start dev server: `npm run dev`
   - Click the theme toggle button in the navigation.
   - Verify immediate visual transition between light and dark themes.
   - Refresh the page and verify that the selected theme persists.

2. **Verify Anti-Flash Script**:
   - Load the page in a clean browser session with dark system preference.
   - Verify that the page renders in dark mode immediately without a white flash.

3. **Verify Reduced Motion**:
   - Enable `prefers-reduced-motion: reduce` in your OS/browser settings.
   - Verify that entrance animations and non-essential transitions are disabled.

4. **Verify Contrast Compliance**:
   - Run accessibility audits (Lighthouse / axe DevTools) on both light and dark themes to confirm 100% contrast pass rate.
