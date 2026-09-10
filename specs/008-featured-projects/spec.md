# Feature Specification: 008 — Featured Projects

## Overview

Present the strongest software engineering projects as primary evidence of actual development ability. Each featured project (Cashier POS App, Campus Lost & Found, DeepX Hackathon) communicates what it is, why it exists, technical highlights, technologies used, project status, and privacy/repository indicators without exposing secrets or making unsupported commercial claims.

## Clarifications

### Session 2026-09-10
- Q: Are there any ambiguities regarding private/commercial project disclosures or repository links? → A: None. Privacy requirements ensure zero credentials, secrets, or confidential business data are exposed while still providing robust case studies.

## User Scenarios & Testing

### Scenario 1: Exploring Featured Projects and Technical Substance
- **Actor**: Site Visitor / Recruiter
- **Description**: A visitor reviews featured projects to evaluate Peter's problem-solving, architectural decisions, and technical stack.
- **Acceptance Criteria**:
  - Featured projects display project name, description, problem statement, technical highlights, and technologies used.
  - Commercial/private projects display appropriate professional indicators without exposing proprietary source code.
  - Links to public repositories or demonstrations work correctly.

## Functional Requirements

### FR1: Featured Project Selection & Content
- The Featured Projects section MUST showcase key projects including the Cashier POS App, Campus Lost & Found, and DeepX Hackathon.
- Each project MUST explain the problem addressed, what Peter built, technical highlights, and technologies used.

### FR2: Privacy & Proprietary Protection
- For private or commercial work (e.g., Cashier POS App), the portfolio MUST NOT expose source code, credentials, secrets, real customer data, or confidential business information.
- Commercial claims MUST NOT claim sales, commercial deployment, or user counts unless factually true.

## Success Criteria

- **Measurable & Verifiable Outcomes**:
  - Featured projects provide clear, convincing evidence of development capability within 30 seconds of review.
  - Zero privacy violations or unverified commercial claims exist across all project cards.

## Assumptions & Constraints
- Featured projects follow the Skills section in the single-page scroll layout.
