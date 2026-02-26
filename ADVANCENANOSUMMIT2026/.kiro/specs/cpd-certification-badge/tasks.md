# Implementation Plan: CPD Certification Badge

## Overview

This implementation adds a CPD certification badge component to the React application that displays on all pages with a blinking animation effect. The badge will be positioned in the bottom right corner using fixed positioning and integrated into the Layout component for consistent display across all routes. Additionally, important dates throughout the application will be updated to align with the venue date (SEP 16-18, 2026).

## Tasks

- [ ] 1. Create CPDBadge component structure
  - [ ] 1.1 Create component directory and files
    - Create `src/components/common/CPDBadge/` directory
    - Create `CPDBadge.jsx` component file
    - Create `CPDBadge.css` stylesheet file
    - _Requirements: 1.1, 1.2, 1.3_

  - [ ] 1.2 Implement CPDBadge component
    - Import cpd-certification.jpeg image from assets
    - Create functional React component with proper JSX structure
    - Apply className "cpd-badge" to container div
    - Apply className "cpd-badge__image" to img element
    - Include alt text "CPD Certification" for accessibility
    - Export component as default
    - _Requirements: 1.1, 1.4_

- [ ] 2. Implement badge styling and animation
  - [ ] 2.1 Create blinking animation keyframes
    - Define @keyframes blink animation in CPDBadge.css
    - Set opacity to 1 at 0% and 100%
    - Set opacity to 0.3 at 50%
    - _Requirements: 2.1, 2.2_

  - [ ] 2.2 Style the badge container
    - Apply fixed positioning with bottom: 20px and right: 20px
    - Set z-index to 1000
    - Add white background color
    - Add 8px border-radius for rounded corners
    - Add 8px padding
    - Add box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15)
    - Apply animation: blink 2s ease-in-out infinite
    - _Requirements: 1.3, 1.5, 1.6, 2.1, 2.3, 2.4, 3.1, 3.2_

  - [ ] 2.3 Style the badge image
    - Set width to 110px
    - Set height to auto
    - Set display to block
    - _Requirements: 1.4_

  - [ ] 2.4 Add responsive styles for mobile devices
    - Create media query for max-width: 768px
    - Adjust badge position to bottom: 10px and right: 10px
    - Reduce image width to 80px
    - _Requirements: 3.3, 3.4_

- [ ] 3. Integrate CPDBadge into Layout component
  - [ ] 3.1 Import and render CPDBadge in Layout
    - Import CPDBadge component in `src/components/common/Layout.jsx`
    - Add `<CPDBadge />` component after the Footer component
    - Verify component renders on all pages through React Router's Outlet
    - _Requirements: 1.2_

- [ ] 4. Update important dates in AboutSection
  - [ ] 4.1 Update Abstract Submission Opens date
    - Change date from "JUL 15, 2026" to align with conference timeline
    - Update to "JUL 15, 2026" (keep as is, or adjust based on 8 months before conference)
    - _Requirements: User request for date alignment_

  - [ ] 4.2 Update Early Bird Deadline date
    - Change date from "SEP 25, 2026" to "OCT 16, 2026" (1 month before conference)
    - Update month from "SEP" to "OCT"
    - Update day from "25" to "16"
    - _Requirements: User request for date alignment_

  - [ ] 4.3 Update Submission Deadline date
    - Change date from "OCT 25, 2027" to "SEP 02, 2026" (2 weeks before conference)
    - Update month from "OCT" to "SEP"
    - Update day from "25" to "02"
    - Update year from "2027" to "2026"
    - _Requirements: User request for date alignment_

  - [ ] 4.4 Update Conference Date card
    - Change month from "NAV" to "SEP"
    - Change day from "23" to "16"
    - Verify year is "2026"
    - Verify subtitle shows "November 16-18, Amsterdam, Netherlands"
    - _Requirements: User request for date alignment_

- [ ] 5. Update important dates in AbstractSubmission page
  - [ ] 5.1 Update Abstract Submission Opens date
    - Change from "June 15, 2025" to "March 16, 2026" (8 months before conference)
    - _Requirements: User request for date alignment_

  - [ ] 5.2 Update Early Bird Deadline date
    - Change from "October 25, 2025" to "October 16, 2026" (1 month before conference)
    - _Requirements: User request for date alignment_

  - [ ] 5.3 Update Abstract Submission Deadline date
    - Change from "February 25, 2026" to "November 02, 2026" (2 weeks before conference)
    - _Requirements: User request for date alignment_

  - [ ] 5.4 Update Conference Date
    - Change from "April 20–22, 2026" to "November 16–18, 2026"
    - _Requirements: User request for date alignment_

- [ ] 6. Checkpoint - Verify implementation
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- The CPDBadge component is stateless and requires no props
- Fixed positioning removes the badge from document flow, ensuring it doesn't affect page layout
- The blinking animation runs continuously using CSS keyframes for optimal performance
- Integration into Layout component ensures the badge appears on all routes automatically
- No Media.jpg references were found in the codebase, so no cleanup is needed
- Date updates align all important dates with the conference venue date of November 16-18, 2026
- Responsive design ensures the badge remains visible and accessible on mobile devices
