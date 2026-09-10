# Portfolio Project Constitution

## Core Principles

### I. Authentic Representation

The portfolio MUST accurately represent Peter Hany's current skills, projects, education, achievements, experience, and interests.

The portfolio MUST NOT:
- Claim skills Peter does not currently possess.
- Present unfinished work as completed work.
- Exaggerate project capabilities, achievements, or professional experience.
- Invent metrics, users, clients, revenue, awards, or other accomplishments.
- Present future learning goals as current expertise.

Project descriptions MUST be based on what the project actually does.

When information becomes outdated, the portfolio MUST be updated rather than preserving outdated claims for appearance.

The portfolio exists to represent the developer truthfully, not to manufacture a more impressive profile.

### II. Developer Identity & Continuous Growth

The portfolio MUST present Peter as:

**Computer Science Student & Software Developer**

The portfolio MUST communicate the following central identity:

> Continuously building, learning, and exploring new areas of software development.

The portfolio SHOULD communicate growth rather than attempting to portray Peter as an expert.

The portfolio MUST allow the developer's identity, skills, projects, and interests to evolve as Peter progresses through university and gains more experience.

The portfolio MUST NOT unnecessarily reduce Peter's identity to a single framework, language, or stack.

### III. AI-Assisted Development With Human Ownership

AI coding agents MAY be used extensively for implementation, debugging, research, refactoring, documentation, and other development work.

AI-generated code MUST NOT be treated as automatically correct.

Peter remains responsible for understanding the important technical decisions and behavior of the software.

Generated code SHOULD be reviewed, questioned, tested, and investigated when its behavior or reasoning is unclear.

There is NO requirement that Peter manually type every line of code.

However, the project MUST remain a learning experience. AI assistance MUST NOT become a reason to blindly accept architecture, dependencies, abstractions, or implementation decisions that Peter cannot reasonably explain.

AI MAY implement a solution.

AI MUST NOT become the owner of the project's technical direction.

### IV. Purposeful Simplicity & Scope Discipline

The portfolio MUST remain focused on its primary purpose: presenting Peter, his development journey, and his software projects professionally.

Features MUST have a clear user-facing purpose.

The project SHOULD prefer the simplest reliable solution that satisfies the requirements.

The project MUST NOT introduce:
- A backend without a genuine requirement.
- A database without a genuine requirement.
- Authentication without a genuine requirement.
- Complex state management without a genuine requirement.
- Dependencies that do not provide meaningful value.
- Over-engineered abstractions.
- Features added merely because they are technically interesting.

When two solutions satisfy the same requirement, the simpler maintainable solution SHOULD be preferred.

Scope expansion MUST be justified by an actual portfolio requirement.

### V. Professional User Experience & Visual Quality

The portfolio MUST provide a polished, professional, and visually impressive experience without becoming excessive or distracting.

The primary portfolio experience MUST be a single-page scrolling experience with a clear visual hierarchy.

The design MUST prioritize:
- Clear typography.
- Strong spacing and layout.
- Consistent visual hierarchy.
- Professional presentation.
- Clear navigation.
- Intuitive interaction.
- Strong project presentation.
- Appropriate use of visual elements.

Animations MUST be noticeable enough to make the experience feel polished, but MUST NOT overwhelm the content or interfere with usability.

Animations MUST serve a purpose such as:
- Providing visual feedback.
- Establishing hierarchy.
- Improving transitions.
- Drawing attention to important content.
- Adding personality to the experience.

Decorative animation MUST NOT take priority over readability or usability.

### VI. Accessibility, Responsiveness & Performance

Accessibility is a project-wide requirement, not a final-stage enhancement.

The portfolio MUST:
- Use semantic HTML where appropriate.
- Provide meaningful accessible names for interactive controls.
- Maintain visible keyboard focus states.
- Maintain sufficient color contrast.
- Provide appropriate alternative text for meaningful images.
- Support keyboard navigation.
- Respect the user's `prefers-reduced-motion` preference.
- Avoid interactions that depend exclusively on a mouse or pointer.

The portfolio MUST be responsive across:
- Mobile devices.
- Tablets.
- Laptops.
- Desktop displays.
- Large desktop displays where applicable.

Responsive behavior MUST be intentional rather than relying solely on accidental CSS reflow.

Performance MUST be treated as a design requirement.

The project SHOULD avoid unnecessary JavaScript execution, excessive dependencies, unnecessarily large assets, and avoidable layout shifts.

### VII. Maintainability & Evolution

The project MUST remain easy to understand, modify, and extend.

Content SHOULD be separated from presentation where doing so improves maintainability.

Adding a new:
- Project
- Skill
- Achievement
- Education item
- Experience item
- Link
- Portfolio section

SHOULD require minimal changes to unrelated code.

Components MUST have clear responsibilities.

The project SHOULD avoid unnecessary coupling between sections.

Technical decisions MUST consider the future evolution of the portfolio rather than optimizing exclusively for the initial launch.

### VIII. Projects Are Evidence

Projects are a primary form of evidence of Peter's software development abilities.

Featured projects MUST be selected based on their relevance, quality, technical substance, and ability to demonstrate different aspects of software development.

Project descriptions SHOULD explain:
- What the project is.
- Why it exists.
- What Peter contributed.
- Important technical aspects.
- Relevant challenges or decisions.
- The technologies used.
- The project's current status.

The portfolio SHOULD favor meaningful projects over filling space with a large number of minor projects.

Projects MUST NOT be presented in a misleading way to make them appear more sophisticated than they are.

### IX. Privacy & Proprietary Work

Private, commercial, client-owned, or otherwise confidential projects MUST be treated as proprietary unless explicitly authorized for public disclosure.

The portfolio MUST NOT expose:
- Source code that should remain private.
- Credentials or secrets.
- Private repositories.
- Customer information.
- Real customer data.
- Confidential business information.
- Internal implementation details that should not be public.
- Private infrastructure details.

A private project MAY be represented through a sanitized case study, screenshots, descriptions, architecture diagrams, or demonstrations when appropriate.

All demonstrations MUST use safe data.

The portfolio MUST NOT claim that a project was sold, deployed commercially, used by customers, or generated revenue unless that claim is factually true.

### X. Source of Truth & Content Integrity

The portfolio MUST use the most current reliable information available when determining what should be presented.

For Peter's current technical identity and current software projects, the current GitHub profile and repositories are the primary source of truth.

For formal education, credentials, historical achievements, and formal career information, the latest verified CV is the primary source of truth.

LinkedIn MAY be used as a secondary source when appropriate.

If sources conflict, current verified information MUST take precedence over outdated information.

The portfolio MUST NOT silently invent information to fill missing content.

When information is uncertain, the uncertainty MUST be resolved before presenting it as fact.

### XI. Spec-Driven Development & Incremental Delivery

Meaningful project features MUST be developed through a specification-driven workflow.

The project SHOULD follow this general sequence:

1. Constitution
2. Specify
3. Clarify
4. Checklist
5. Plan
6. Tasks
7. Analyze
8. Implement
9. Converge

Feature specifications MUST describe what the software should accomplish and why.

Implementation plans MUST describe how the requirements will be implemented.

Tasks MUST break implementation into small, concrete, verifiable units of work.

Trivial corrections MAY bypass the complete workflow when creating a full specification would provide no meaningful value.

Large features SHOULD be divided into independently reviewable phases rather than implemented as one uncontrolled change.

### XII. Verification Before Completion

No feature is considered complete merely because the code runs.

Before a meaningful feature is considered complete, it MUST be verified against its:
- Specification.
- Acceptance criteria.
- Implementation plan.
- Accessibility requirements.
- Responsive behavior.
- Visual requirements.
- Performance expectations.
- Privacy requirements where applicable.

The implementation MUST be tested at the appropriate level for the feature.

Visual features MUST be visually inspected.

Interactive features MUST be manually exercised.

Responsive features MUST be checked at multiple viewport sizes.

Accessibility-sensitive features MUST be keyboard-tested and inspected appropriately.

A feature that technically works but violates the project's requirements MUST NOT be considered complete.

## Project-Wide Constraints

### Technology

The project is a frontend-first personal portfolio.

Technology choices MUST support:
- Maintainability.
- Performance.
- Accessibility.
- Responsive design.
- Smooth development.
- Straightforward deployment.

Exact implementation technologies, libraries, dependency versions, and infrastructure decisions belong in the implementation plan rather than this Constitution unless they become permanent project-level constraints.

### Theme

The portfolio MUST support both light and dark visual themes.

The initial theme SHOULD respect the visitor's system preference.

Visitors MUST have a clear manual mechanism for changing the theme.

A manually selected theme SHOULD take precedence over the system preference and persist across visits.

Theme implementation details belong in the implementation plan.

### Animation

Motion is a required part of the portfolio's visual experience.

Animations MUST remain purposeful and restrained.

The project MUST respect reduced-motion preferences.

Animation libraries and implementation techniques are implementation decisions and belong in the implementation plan.

### Content

Portfolio content MUST remain easy to update as Peter's development experience changes.

Content MUST be separated from implementation wherever that improves maintainability without introducing unnecessary complexity.

## Development Workflow & Quality Gates

Every meaningful feature MUST pass through appropriate specification, planning, implementation, and verification stages.

The project manager/reviewer is responsible for reviewing project artifacts and identifying:
- Missing requirements.
- Contradictions.
- Unnecessary complexity.
- Scope creep.
- Technical risks.
- Accessibility problems.
- Privacy concerns.
- Poor maintainability.
- Misleading portfolio claims.

Implementation SHOULD proceed in small increments.

After completing a phase, the implementation MUST be reviewed before substantial new functionality is added.

When an implementation differs from the specification or plan, the difference MUST be intentional and documented or the implementation MUST be corrected.

The final implementation MUST be reconciled against the requirements before the feature is considered complete.

## Governance

This Constitution defines the permanent project-level rules and supersedes conflicting implementation practices.

Feature specifications, implementation plans, task lists, and agent instructions MUST remain consistent with this Constitution.

A feature MAY introduce additional requirements, but it MUST NOT violate the Constitution.

Implementation details SHOULD NOT be promoted to Constitution-level rules unless they represent a long-term project requirement.

Constitution amendments MUST:
1. Clearly identify the rule being changed.
2. Explain why the change is necessary.
3. Update the Constitution version.
4. Update the amendment date.
5. Ensure affected specifications and plans remain consistent with the amended Constitution.

The Constitution MUST remain concise enough to function as an actual governing document. Detailed implementation instructions belong in specifications, plans, task lists, or project documentation.

All contributors and AI agents working on the project MUST treat this Constitution as authoritative project guidance.

**Version**: 1.1.0  
**Ratified**: 2026-09-10  
**Last Amended**: 2026-09-10