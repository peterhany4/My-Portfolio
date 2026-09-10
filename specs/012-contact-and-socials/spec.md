# Feature Specification: 012 — Contact and Social Links

## Overview

Give visitors clear, direct ways to reach or learn more about Peter Hany through email, GitHub, LinkedIn, and CV access, ensuring all external links are fully functional and accessible without placeholder links in production.

## Clarifications

### Session 2026-09-10
- Q: Are there any ambiguities regarding contact channels or link validation? → A: None. All contact methods and social links point directly to verified destinations.

## User Scenarios & Testing

### Scenario 1: Reaching Out and Accessing Social Profiles
- **Actor**: Recruiter / Site Visitor
- **Description**: A visitor uses the Contact section to send an email, visit GitHub or LinkedIn, or access the CV.
- **Acceptance Criteria**:
  - Direct email action opens mail client.
  - GitHub and LinkedIn links open valid external profiles.
  - CV/resume access is available and functional.
  - Zero broken or placeholder links exist.

## Functional Requirements

### FR1: Contact Channels & Links
- The Contact section MUST provide direct email action, GitHub link, LinkedIn link, and CV/resume access.
- Every external link MUST point to its intended destination with zero placeholder links in production.
- Links MUST have understandable accessible names and support keyboard navigation.

## Success Criteria

- **Measurable & Verifiable Outcomes**:
  - 100% of contact actions and social links successfully resolve to correct destinations.
  - Zero broken links or accessibility violations.

## Assumptions & Constraints
- Contact follows Achievements and precedes Footer in the single-page scroll layout.
