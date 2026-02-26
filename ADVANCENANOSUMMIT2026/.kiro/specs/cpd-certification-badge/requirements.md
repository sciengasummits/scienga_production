# Requirements Document

## Introduction

This feature replaces the existing Media.jpg image with the cpd-certification.jpeg image, adds a blinking animation effect, and ensures the CPD certification badge appears consistently in the bottom right corner across all pages of the React application.

## Glossary

- **CPD_Badge**: A visual component displaying the CPD certification image (cpd-certification.jpeg)
- **Application**: The React web application containing multiple pages
- **Layout_Component**: The common Layout component that wraps all application pages
- **Blinking_Animation**: A CSS animation that periodically changes the opacity of an element to create a blinking visual effect
- **Bottom_Right_Position**: A fixed position at the bottom right corner of the viewport (20px from bottom, 20px from right)

## Requirements

### Requirement 1: Display CPD Certification Badge

**User Story:** As a conference organizer, I want the CPD certification badge to be visible on all pages, so that visitors are always aware of the certification status.

#### Acceptance Criteria

1. THE CPD_Badge SHALL display the cpd-certification.jpeg image
2. THE CPD_Badge SHALL appear on all pages of the Application
3. THE CPD_Badge SHALL be positioned at the Bottom_Right_Position
4. THE CPD_Badge SHALL maintain a width of 110px
5. THE CPD_Badge SHALL have a white background with rounded corners
6. THE CPD_Badge SHALL have a box shadow for visual elevation

### Requirement 2: Badge Animation

**User Story:** As a conference organizer, I want the CPD badge to blink, so that it attracts visitor attention.

#### Acceptance Criteria

1. THE CPD_Badge SHALL apply the Blinking_Animation continuously
2. THE Blinking_Animation SHALL cycle between full opacity and reduced opacity
3. THE Blinking_Animation SHALL complete one cycle within 2 seconds
4. THE Blinking_Animation SHALL repeat indefinitely

### Requirement 3: Badge Positioning and Layering

**User Story:** As a user, I want the CPD badge to remain visible and accessible, so that I can always see the certification.

#### Acceptance Criteria

1. THE CPD_Badge SHALL use fixed positioning relative to the viewport
2. THE CPD_Badge SHALL appear above other page content with a z-index of 1000
3. WHEN the viewport width is less than or equal to 768px, THE CPD_Badge SHALL adjust its size to 80px width
4. WHEN the viewport width is less than or equal to 768px, THE CPD_Badge SHALL maintain Bottom_Right_Position with 10px margins

### Requirement 4: Remove Previous Image Reference

**User Story:** As a developer, I want the old Media.jpg image reference removed, so that the codebase remains clean and maintainable.

#### Acceptance Criteria

1. THE Application SHALL NOT reference Media.jpg in any component
2. THE CPD_Badge SHALL be the sole certification badge displayed in the Application
