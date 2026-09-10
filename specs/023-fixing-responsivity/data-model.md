# Data Model: 023 — Fix Mobile Navbar Responsiveness

## State & Props Model

### MobileMenu Component Props
- `isOpen`: boolean (controls visibility state)
- `onClose`: () => void (callback to close the menu)

### Navigation Data
- Uses existing `navigationItems` from `src/data/navigationData.ts` (`label`, `href`).
