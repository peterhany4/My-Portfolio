# Feature Specification: 018 — Content and Privacy Audit

## Overview

Perform a complete factual, claim, source-of-truth, and privacy review across all portfolio sections and data files before final release to ensure compliance with Constitution Rules I, VIII, IX, and X.

## Clarifications

### Session 2026-09-10
- Q: Are there any critical ambiguities regarding personal information or proprietary work exposure? → A: None. All data must reflect verified GitHub repositories and institutional CV data truthfully without unsupported claims or leaked credentials.

## User Scenarios & Testing

### Scenario 1: Factual and Privacy Audit
- **Actor**: Site Visitor / Reviewer
- **Description**: Verifying that all personal details, academic background, project data, and claims are accurate, defensible, and free of proprietary leaks or inflated metrics.
- **Acceptance Criteria**:
  - Personal info (name, university, degree, GPA) aligns with verified sources.
  - Project descriptions are truthful and respect privacy (no secrets, credentials, or private proprietary code exposed).
  - Claims audit confirms no unsupported terms like "Expert", "Commercially deployed", or fabricated user numbers.

## Functional Requirements

### FR1: Personal Information Audit
- The portfolio MUST accurately represent Peter Hany's student status, university, degree, and skills.

### FR2: Project & Proprietary Audit
- Featured and additional projects MUST accurately describe what was built without exposing private source code, API keys, secrets, or sensitive customer data.

### FR3: Claims Audit
- All copy across the portfolio MUST be defensible and free of exaggerated professional titles or unverified metrics.

## Success Criteria

- **Measurable & Verifiable Outcomes**:
- Complete audit report and verification that all data files (`portfolioData.ts`, `featuredProjectsData.ts`, `additionalProjectsData.ts`, etc.) strictly comply with the Constitution.

## Assumptions & Constraints
- Content and privacy compliance is governed by Constitution Rules I, VIII, IX, and X.
