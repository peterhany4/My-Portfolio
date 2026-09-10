<!--
Sync Impact Report:
- Version change: none (initial creation) → 1.0.0
- Added sections: Preamble, 23 Core Principles, Governance, AI Development Agreement, Success Criteria
- Removed sections: none
- Follow-up TODOs: none
-->
# Portfolio Project Constitution

## Preamble

This project is the personal developer portfolio of Peter Hany, a Computer Science student and Software Developer.

The portfolio exists to represent Peter's current development journey, projects, skills, education, achievements, and continued growth as a software developer.

The portfolio must prioritize authenticity, maintainability, accessibility, performance, and strong visual design.

AI coding agents may be used extensively during development. However, the purpose of using AI is to accelerate implementation and expose Peter to real-world code, not to replace his learning or understanding of software development.

This Constitution defines the principles that govern the project and takes precedence over implementation convenience.

---

## Core Principles

### Principle 1 — Authentic Representation
The portfolio MUST accurately represent Peter's actual experience, projects, skills, education, achievements, and current learning.
The portfolio MUST NOT exaggerate professional experience, technical proficiency, project ownership, project scale, project usage, client relationships, commercial success, or technologies that Peter has not actually used. Skills and technologies should be presented according to Peter's actual level of experience. Technologies that Peter intends to learn in the future MUST NOT be presented as current skills. The portfolio should communicate growth honestly rather than attempting to appear more experienced than Peter currently is.

### Principle 2 — Developer Identity
The portfolio MUST present Peter as "Computer Science Student & Software Developer". The portfolio's central message is "Continuously building, learning, and exploring new areas of software development." Peter's current focus is full-stack web development, particularly the JavaScript/React/Node.js ecosystem. However, the portfolio MUST NOT reduce Peter's identity exclusively to the MERN stack. Peter's projects demonstrate experience across multiple areas of software development, including web development, desktop applications, software systems, algorithms, and machine learning. The portfolio should communicate that full-stack development is Peter's current direction while leaving room for his development journey to evolve.

### Principle 3 — AI-Assisted Development Must Remain Educational
AI coding agents are an accepted and intentional part of this project's development workflow. Gemini, accessed through the project's configured coding agent, may write code, modify files, refactor code, investigate errors, and implement tasks. Peter does NOT need to manually type every line of code in order for the project to be considered his work. However, AI-generated code MUST be treated as learning material. For significant implementations: (1) Peter should read the generated code; (2) Peter should attempt to understand what the code does; (3) Peter should ask questions when something is unclear; (4) The code should be explained or investigated when necessary; (5) Peter should progressively learn the underlying concepts; (6) Unknown concepts should be added to his learning path when appropriate. Not understanding code immediately is acceptable. Leaving substantial code permanently unexplained and blindly relying on it is not the intended development workflow. The objective is: AI writes faster -> Peter reads -> Peter questions -> Peter understands -> Peter learns -> Peter becomes increasingly capable of writing it himself. The project MUST NOT artificially restrict AI usage merely for the sake of forcing manual typing.

### Principle 4 — Human Ownership of Technical Decisions
AI may propose implementation approaches, but architectural and product decisions MUST remain subject to human review. The development workflow should distinguish between what the product needs, why the product needs it, how the system should be designed, and how the code is implemented. Spec Kit specifications and plans should define the first three before implementation whenever practical. Gemini is primarily responsible for implementation. Peter and the project manager/reviewer are responsible for reviewing requirements, architecture, scope, implementation quality, and final behavior. AI suggestions MUST NOT automatically be accepted merely because they are technically possible. The simplest appropriate solution should generally be preferred.

### Principle 5 — Scope Control
The portfolio is a personal developer portfolio, not a demonstration of every technology available. Features MUST have a clear purpose related to representing Peter, presenting his work, communicating his development journey, improving usability, improving accessibility, improving visual quality, improving maintainability, or improving performance. Features MUST NOT be added merely because they look technically impressive. The project should avoid unnecessary backend infrastructure, databases, authentication, APIs, third-party services, dependencies, animations, complex state management, and infrastructure. A feature requiring substantial complexity must have a clear benefit that justifies that complexity.

### Principle 6 — Frontend-First Architecture
The initial portfolio MUST be a frontend-only application. The primary technology stack is React, Vite, Tailwind CSS, Motion/animation library where appropriate, and Lucide React or another lightweight icon solution where appropriate. A backend MUST NOT be introduced unless a clearly identified requirement cannot be reasonably fulfilled with a static/frontend architecture or an appropriate external service. The portfolio should remain deployable as a static application.

### Principle 7 — One-Page Experience
The portfolio MUST use a single long-scrolling primary page. Navigation should smoothly move users between major sections of the page. The information architecture should prioritize a coherent narrative rather than treating the portfolio as a collection of unrelated pages. Potential project details may use appropriate secondary presentation patterns if they provide meaningful value, but the primary portfolio experience remains a single scrolling page.

### Principle 8 — Visual Quality With Restraint
The portfolio MUST feel modern, polished, personal, and visually impressive while maintaining professional credibility. The design direction is "Professional + visually impressive." Animations are required and should be noticeable, but they MUST serve a purpose. Appropriate motion may include section reveal animations, hover interactions, project-card transitions, navigation transitions, subtle background motion, interactive elements, micro-interactions, and smooth scrolling. The project MUST avoid excessive or distracting visual effects. Animations MUST NOT interfere with reading, make navigation difficult, significantly harm performance, obscure important content, or exist solely to demonstrate animation capability. The portfolio should communicate "This developer builds polished software," not "This website contains as many effects as possible."

### Principle 9 — Accessibility and Usability
Accessibility is a first-class requirement. The portfolio MUST remain usable with keyboard navigation, provide appropriate semantic HTML, maintain sufficient text readability, provide meaningful labels for interactive controls, provide appropriate alternative text for meaningful images, respect reduced-motion preferences where appropriate, maintain usable focus states, remain functional on mobile devices, and avoid relying solely on animation to communicate information. The dark/light theme MUST respect the user's system preference initially while also providing a manual theme toggle.

### Principle 10 — Responsive Design
The portfolio MUST provide a high-quality experience across desktop, laptop, tablet, and mobile. Responsive behavior should be intentionally designed rather than relying only on default CSS wrapping. Important content and interactions MUST remain usable on small screens. Animations should be adapted when necessary for mobile and reduced-motion users.

### Principle 11 — Performance
The portfolio should load quickly and remain responsive. Performance MUST be considered when introducing images, animations, fonts, dependencies, third-party resources, large assets, and background effects. Large assets should be optimized. The application should avoid unnecessary JavaScript execution and unnecessary rendering complexity. Visual quality MUST NOT come at the expense of reasonable performance.

### Principle 12 — Content and Presentation Separation
Portfolio content should be structured so that updating information does not require unnecessarily rewriting presentation components. Projects, skills, achievements, education, links, and similar repeatable content should be represented in maintainable structures where practical. The architecture should make it easy for Peter to update the portfolio as his career and education progress. Adding a new project, certification, achievement, technology, or experience should require minimal changes to the UI implementation.

### Principle 13 — Projects Are Evidence
Projects are the primary evidence of Peter's development ability. The portfolio should prioritize meaningful projects over large lists of technologies. Each featured project should communicate, where applicable: what the project is, the problem it addresses, what Peter built, important technical decisions, technologies used, notable functionality, challenges or interesting technical aspects, project status, and relevant links. The portfolio MUST NOT invent project metrics, users, clients, performance figures, or business outcomes.

### Principle 14 — Proprietary and Private Projects
Projects that become private, commercial, client-owned, or otherwise confidential MUST NOT expose proprietary information. The Cashier/POS application is expected to potentially become a commercial product and may become private. If the repository becomes private, the portfolio may still describe the project at an appropriate high level. The portfolio MUST NOT expose private source code, credentials, secrets, private configuration, real customer data, confidential business information, proprietary implementation details, or client-specific information without permission. Demo screenshots and data MUST use safe, non-confidential content. A private project may be represented as a case study rather than a public GitHub repository.

### Principle 15 — Current Information Has Priority
Portfolio information should reflect Peter's current state. For technical identity and project status, Peter's current GitHub is the primary reference. For personal decisions, current information explicitly provided by Peter is the authority. For formal credentials, education, certifications, and historical information, the CV may be used as a supporting source and should be updated when Peter provides newer information. Outdated information MUST NOT be presented as current merely because it exists in an older document.

### Principle 16 — Dependency Discipline
Every dependency MUST have a clear reason for existing. Before introducing a library, the implementation should consider whether the requirement can be satisfied reasonably with existing project capabilities, native browser APIs, existing dependencies, or a small local implementation. The project should avoid dependency accumulation. Animation and icon requirements justify appropriate dedicated libraries, but additional libraries should require justification.

### Principle 17 — Spec-Driven Development
Substantial features MUST be developed through the Spec Kit workflow. The preferred workflow is Constitution -> Specify -> Clarify -> Checklist -> Plan -> Tasks -> Analyze -> Implement -> Converge. Not every trivial change requires a complete specification cycle. However, meaningful portfolio features should receive their own clear specification rather than being added informally to one giant specification. Specifications describe what and why. Plans describe how. Tasks describe the implementation work. Implementation should follow the approved artifacts while allowing justified technical adjustments when new information is discovered.

### Principle 18 — Small, Reviewable Features
Features should be implemented in reasonably small increments. A feature should be independently understandable, testable, reviewable, and implementable without unnecessary unrelated changes. The project should avoid giant implementation tasks such as "Build the entire portfolio." Instead, implementation should proceed through meaningful vertical slices, such as portfolio foundation, navigation and hero, about section, skills, featured projects, additional projects, achievements and education, contact section, theme system, animations, accessibility, performance, and deployment.

### Principle 19 — Review Before Expansion
After meaningful implementation, the result should be reviewed before continuing to unrelated features. Review should consider requirements, visual behavior, responsiveness, accessibility, code quality, performance, architectural consistency, factual accuracy, and learning/understanding of generated code. If implementation diverges from the specification, the divergence should be understood and either corrected or intentionally documented.

### Principle 20 — Continuous Learning
The portfolio is both a product and a learning environment. Peter is currently a university student and is expected to continue learning new technologies and concepts. The architecture should therefore favor understandable solutions over unnecessarily sophisticated ones. When the implementation introduces a concept Peter has not learned yet: the project does not need to stop automatically, the concept should be identified, Peter should have the opportunity to understand it, explanations should be provided when requested, and the concept may become part of his future learning plan. The goal is not to ensure Peter already knows everything used in the project, but to ensure that the project contributes to Peter knowing more after building it.

### Principle 21 — Portfolio Evolution
The portfolio MUST be designed for continuous evolution. Peter is currently a university student and is expected to gain new projects, new skills, internships, certifications, achievements, professional experience, and additional technologies. The system should allow these additions without requiring a fundamental redesign. The portfolio represents a point in an ongoing development journey, not a final statement of Peter's career.

### Principle 22 — Deployment Simplicity
The initial deployment target is Vercel. The application should remain compatible with a straightforward static deployment. Deployment architecture MUST NOT become more complicated than necessary for a personal portfolio. Infrastructure decisions should prioritize reliability, simplicity, cost, and maintainability. The initial project should target free/low-cost infrastructure wherever it does not compromise the product.

### Principle 23 — Definition of Done
A feature is not complete merely because the code runs. A meaningful feature is considered complete when its specified requirements are implemented, the UI behaves correctly, responsive behavior has been considered, accessibility requirements have been considered, animations behave appropriately, no known critical errors remain, the implementation does not introduce unnecessary complexity, factual content is accurate, Peter has reviewed the resulting code, Peter has asked about or investigated concepts he does not understand, and the implementation is consistent with the project's Constitution. For the final portfolio, the application must additionally be production-ready for deployment.

---

## Governance

This Constitution is the highest-level project guidance. When implementation details conflict with these principles, the Constitution takes precedence unless the Constitution itself is intentionally amended. Technical implementation decisions may evolve as the project progresses. Specifications, plans, and tasks may be revised when new information is discovered, but revisions should preserve the principles defined here. The Constitution should be amended only when a genuine project-level rule has changed. Feature-specific decisions belong in the relevant specification rather than being added to the Constitution.

---

## AI Development Agreement

This project intentionally uses AI-assisted development. The project does NOT follow the rule "Peter must manually type every line," but follows the rule "Peter must progressively understand the software he is building." AI-generated code is therefore allowed to be sophisticated when justified. However, unexplained complexity should be treated as a learning opportunity, not as something to blindly accept. When Peter encounters code he does not understand, the preferred workflow is: Read -> Identify what is unclear -> Ask -> Understand -> Continue. The purpose of this project is simultaneously to produce a high-quality portfolio and make Peter a stronger software developer.

---

## Success Criteria

The portfolio succeeds when it:
1. Represents Peter accurately.
2. Looks professional and visually polished.
3. Demonstrates real development ability through projects.
4. Clearly communicates Peter's current development direction.
5. Works well across devices.
6. Provides a strong user experience.
7. Uses animation purposefully.
8. Is accessible and performant.
9. Can evolve as Peter's career develops.
10. Can be maintained without unnecessary complexity.
11. Can be deployed simply and reliably.
12. Helps Peter learn from the code produced during development.

The portfolio should leave visitors with the impression: "This is a student who is actively becoming a strong software developer and already has meaningful software to show for it."

---

**Version**: 1.0.0 | **Ratified**: 2026-09-10 | **Last Amended**: 2026-09-10
