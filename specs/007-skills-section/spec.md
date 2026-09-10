# Feature Specification: 007 — Skills Section

## Overview

Present technical capabilities clearly without turning the portfolio into an uncurated keyword dump, connecting skills to actual projects where appropriate and organizing them into clean, responsive category groups.

## Clarifications

### Session 2026-09-10
- Q: Are there any ambiguities regarding skill categorization or unsupported technologies? → A: None. Skills are strictly limited to verified languages, frameworks, and tools used across Peter's projects and studies.

## User Scenarios & Testing

### Scenario 1: Exploring Technical Skills and Capabilities
- **Actor**: Site Visitor / Recruiter
- **Description**: A visitor scans the Skills section to understand Peter's technical proficiency across languages, frontend, backend, desktop, and developer tools.
- **Acceptance Criteria**:
  - Skills are organized into clear categories (Languages, Frontend, Backend, Desktop / Other, Tools).
  - Technologies are clean, accurate, and supported by actual project evidence.
  - Layout reorganizes responsively across mobile, tablet, and desktop viewports.

## Functional Requirements

### FR1: Skill Categories & Organization
- The Skills section MUST group capabilities into logical categories: Languages, Frontend, Backend, Desktop / Other, and Tools.
- The list MUST include verified skills such as JavaScript, TypeScript, C++, C#, Python, React, Tailwind CSS, Node.js, Express, MongoDB, .NET, Git, and GitHub.

### FR2: Evidence & Currency
- Skills MUST reflect actual project experience and avoid unverified buzzwords or exaggerated proficiency levels.
- The skill set MUST remain easy to update as Peter learns new technologies.

## Success Criteria

- **Measurable & Verifiable Outcomes**:
  - Skills categories are scannable and readable within 10 seconds.
  - Zero unsupported or exaggerated technologies appear in the skills inventory.

## Assumptions & Constraints
- The Skills section follows the Current Focus section in the single-page scroll layout.
