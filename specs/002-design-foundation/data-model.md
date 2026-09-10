# Design Tokens & Data Model: Design Foundation (Feature 002)

## Design System Token Specifications

### 1. Color Palette Tokens
| Token Role | Light Theme | Dark Theme | Purpose |
|------------|-------------|------------|---------|
| Background | `#ffffff` (white) | `#09090b` (zinc-950) | Page root background |
| Surface | `#f4f4f5` (zinc-100) | `#18181b` (zinc-900) | Card and container surfaces |
| Text Primary | `#09090b` (zinc-950) | `#fafafa` (zinc-50) | Headings and primary body text |
| Text Secondary | `#71717a` (zinc-500) | `#a1a1aa` (zinc-400) | Subtitles and metadata |
| Border | `#e4e4e7` (zinc-200) | `#27272a` (zinc-800) | Dividers and card borders |
| Accent | `#4f46e5` (indigo-600) | `#6366f1` (indigo-500) | Primary interactive actions and focus |

### 2. Typography Hierarchy
| Level | Font Size / Weight | Line Height | Usage |
|-------|-------------------|-------------|-------|
| Hero Heading | 3.75rem (60px) / Bold | 1.1 | Main page header |
| Section Heading | 2.25rem (36px) / Semi-bold | 1.2 | Section titles |
| Card Heading | 1.25rem (20px) / Medium | 1.4 | Project & skill card titles |
| Body Text | 1rem (16px) / Regular | 1.6 | Paragraphs and descriptions |
| Small / Meta | 0.875rem (14px) / Medium | 1.5 | Labels, badges, and timestamps |

### 3. Shape & Surface Tokens
- **Border Radius**: `rounded-lg` (8px) for buttons/inputs, `rounded-xl` (12px) for cards.
- **Elevation**: Minimal shadows (`shadow-sm`) used sparingly; borders preferred for clean separation.
