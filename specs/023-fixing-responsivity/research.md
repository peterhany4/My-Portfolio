# Research: 023 — Fix Mobile Navbar Responsiveness

## Research Topics & Decisions

### 1. Mobile Menu Surface & Background Opacity
- **Decision**: Replace overly transparent backdrop/overlay styles with solid semantic theme tokens (`bg-background` or `bg-surface` with proper border and shadow elevation).
- **Rationale**: Eliminates readability issues caused by transparency clashing with page content behind it.
- **Alternatives Considered**: Semi-transparent backdrop blur (rejected because it makes text hard to read on mobile viewports).

### 2. Sizing & Proportions
- **Decision**: Restrict mobile menu width/padding (e.g., max-w-xs or a clean side sheet / dropdown drawer with clear margins) so it does not feel disproportionately large or intrusive.
- **Rationale**: Implements a balanced mobile UI pattern aligned with professional design standards (Constitution Rule V).

### 3. Accessibility & Focus Trap
- **Decision**: Retain and verify proper `aria-expanded` attributes, keyboard navigation support (Escape to close), and focus management.
- **Rationale**: Meets project accessibility requirements (Constitution Rule VI).
