# Design Document: CPD Certification Badge

## Overview

This feature adds a CPD (Continuing Professional Development) certification badge to all pages of the React conference website. The badge displays the cpd-certification.jpeg image in a fixed position at the bottom right corner of the viewport with a continuous blinking animation to attract visitor attention. The implementation leverages React's component architecture by creating a reusable badge component integrated into the existing Layout component, ensuring consistent display across all routes.

The design addresses four key requirements:
1. Display the CPD certification badge on all pages with proper styling
2. Apply a continuous blinking animation effect
3. Ensure responsive positioning and layering
4. Remove legacy Media.jpg references from the codebase

## Architecture

### Component Hierarchy

```
App
└── BrowserRouter
    └── AppRoutes
        └── Layout
            ├── Navbar
            ├── Outlet (page content)
            ├── Footer
            └── CPDBadge (new component)
```

The CPDBadge component will be added to the Layout component, which wraps all application pages through React Router's nested routing. This ensures the badge appears on every page without requiring individual page modifications.

### Technology Stack

- **React 19.2.0**: Component-based UI framework
- **CSS3**: Styling and animations (keyframes for blinking effect)
- **Vite**: Build tool and development server
- **React Router DOM 7.13.0**: Client-side routing (already integrated)

### Design Decisions

1. **Component Placement**: The badge is added to the Layout component rather than individual pages to ensure consistency and reduce code duplication. The Layout component already wraps all routes via React Router's Outlet pattern.

2. **Fixed Positioning**: Using CSS `position: fixed` ensures the badge remains visible during scrolling and stays anchored to the viewport rather than the document flow.

3. **CSS Animations**: Pure CSS keyframe animations are preferred over JavaScript-based animations for better performance and simpler implementation. The animation runs on the GPU, reducing CPU overhead.

4. **Responsive Design**: Media queries adjust the badge size and spacing for mobile devices (≤768px) to prevent overlap with other UI elements and maintain usability on smaller screens.

5. **Z-Index Strategy**: A z-index of 1000 ensures the badge appears above typical page content while remaining below modal overlays (which typically use z-index > 1000).

## Components and Interfaces

### CPDBadge Component

**File**: `src/components/common/CPDBadge/CPDBadge.jsx`

**Purpose**: Displays the CPD certification image with blinking animation and fixed positioning.

**Props**: None (stateless component)

**Structure**:
```jsx
import React from 'react';
import cpdImage from '../../../assets/images/cpd-certification.jpeg';
import './CPDBadge.css';

const CPDBadge = () => {
    return (
        <div className="cpd-badge">
            <img 
                src={cpdImage} 
                alt="CPD Certification" 
                className="cpd-badge__image"
            />
        </div>
    );
};

export default CPDBadge;
```

**Key Features**:
- Imports the cpd-certification.jpeg image as a module for Vite bundling
- Uses semantic CSS class naming with BEM methodology (cpd-badge, cpd-badge__image)
- Includes descriptive alt text for accessibility
- No state or props needed (purely presentational)

### CPDBadge Styles

**File**: `src/components/common/CPDBadge/CPDBadge.css`

**Styling Specifications**:

```css
/* Blinking animation keyframes */
@keyframes blink {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.3;
    }
}

/* Badge container */
.cpd-badge {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    background-color: white;
    border-radius: 8px;
    padding: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    animation: blink 2s ease-in-out infinite;
}

/* Badge image */
.cpd-badge__image {
    width: 110px;
    height: auto;
    display: block;
}

/* Responsive adjustments for mobile */
@media (max-width: 768px) {
    .cpd-badge {
        bottom: 10px;
        right: 10px;
    }
    
    .cpd-badge__image {
        width: 80px;
    }
}
```

**Animation Details**:
- **Keyframes**: The `blink` animation transitions opacity from 1 (fully visible) to 0.3 (30% visible) at the midpoint, then back to 1
- **Duration**: 2 seconds per cycle
- **Timing Function**: `ease-in-out` provides smooth acceleration and deceleration
- **Iteration**: `infinite` ensures continuous animation
- **Opacity Range**: 0.3 minimum opacity keeps the badge visible while creating the blinking effect

**Positioning Details**:
- **Desktop**: 20px from bottom and right edges
- **Mobile**: 10px from bottom and right edges (reduced to save screen space)
- **Z-Index**: 1000 (above content, below modals)

**Visual Styling**:
- White background for contrast against varied page backgrounds
- 8px border-radius for modern, rounded appearance
- 8px padding creates spacing between image and container edge
- Box shadow provides depth and visual separation from page content

### Layout Component Integration

**File**: `src/components/common/Layout.jsx`

**Modification**: Import and render the CPDBadge component

```jsx
import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import CPDBadge from './CPDBadge/CPDBadge';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="app-layout">
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
            <CPDBadge />
        </div>
    );
};

export default Layout;
```

**Integration Rationale**:
- Placed after Footer to ensure it renders last in the DOM (helpful for z-index stacking)
- No conditional rendering needed (badge should always be visible)
- Fixed positioning removes it from document flow, so placement in JSX doesn't affect layout

## Data Models

This feature does not require data models as it displays a static image without dynamic data or state management. The component is purely presentational with no data fetching, user input, or state changes.

**Image Asset**:
- **Path**: `src/assets/images/cpd-certification.jpeg`
- **Type**: JPEG image file
- **Usage**: Imported as ES module in
## Correctness Properties

A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.

### Property 1: Badge Presence Across All Routes

For any valid application route, the CPD badge component should be present in the rendered DOM.

**Validates: Requirements 1.2**

This property ensures that regardless of which page a user navigates to, the CPD certification badge is always visible. The property-based test will generate or iterate through all defined routes in the application and verify that the badge element exists in each rendered output.

## Error Handling

### Component Rendering Errors

**Image Loading Failure**:
- **Scenario**: The cpd-certification.jpeg file is missing or fails to load
- **Handling**: The browser will display the alt text ("CPD Certification") and may show a broken image icon
- **Mitigation**: During build, Vite will fail if the imported image doesn't exist, catching the error before deployment
- **User Impact**: Minimal - alt text provides context even if image fails

**CSS Loading Failure**:
- **Scenario**: The CPDBadge.css file fails to load
- **Handling**: The badge will render without styling (no positioning, animation, or visual styling)
- **Mitigation**: CSS is bundled with JavaScript by Vite, so if the component loads, styles will load
- **User Impact**: Badge may appear in wrong position or without animation, but remains visible

### Browser Compatibility

**CSS Animation Support**:
- **Modern Browsers**: Full support for CSS keyframe animations (Chrome, Firefox, Safari, Edge)
- **Legacy Browsers**: Animation may not work, but badge remains visible without blinking
- **Graceful Degradation**: The badge displays correctly even if animations are unsupported

**Fixed Positioning Support**:
- **All Modern Browsers**: Full support for position: fixed
- **Edge Cases**: Some mobile browsers may have issues with fixed positioning during scrolling
- **Fallback**: Badge remains visible even if positioning is imperfect

### Responsive Design Edge Cases

**Very Small Screens (<320px)**:
- **Scenario**: Viewport width is smaller than typical mobile breakpoint
- **Handling**: Badge scales to 80px width (from mobile media query)
- **Potential Issue**: Badge may overlap with other fixed elements (e.g., floating action buttons)
- **Mitigation**: The 10px margin on mobile provides some spacing; z-index ensures badge stays on top

**Very Large Screens (>2560px)**:
- **Scenario**: Ultra-wide or 4K displays
- **Handling**: Badge remains at 110px width in bottom right corner
- **Impact**: Badge may appear relatively small but remains visible and functional

## Testing Strategy

This feature requires a dual testing approach combining unit tests for specific examples and property-based tests for universal behaviors.

### Unit Testing

Unit tests will verify specific examples, edge cases, and styling requirements using React Testing Library and Jest (or Vitest, which is compatible with Vite).

**Test File**: `src/components/common/CPDBadge/CPDBadge.test.jsx`

**Test Cases**:

1. **Component Rendering**:
   - Verify the component renders without errors
   - Verify the img element is present in the DOM
   - Verify the img src attribute contains "cpd-certification.jpeg"
   - Verify the img alt attribute is "CPD Certification"
   - **Validates: Requirements 1.1**

2. **CSS Styling**:
   - Verify the badge container has class "cpd-badge"
   - Verify the image has class "cpd-badge__image"
   - Verify computed styles include:
     - position: fixed
     - bottom: 20px
     - right: 20px
     - z-index: 1000
     - background-color: white (or rgb(255, 255, 255))
     - border-radius: 8px
     - box-shadow is defined
   - Verify image width is 110px
   - **Validates: Requirements 1.3, 1.4, 1.5, 1.6, 3.1, 3.2**

3. **Animation Properties**:
   - Verify animation-name includes "blink"
   - Verify animation-duration is "2s"
   - Verify animation-iteration-count is "infinite"
   - Verify animation-timing-function is "ease-in-out"
   - **Validates: Requirements 2.1, 2.3, 2.4**

4. **Responsive Behavior** (Edge Cases):
   - Render component with viewport width of 768px
   - Verify image width is 80px
   - Verify bottom and right positions are 10px
   - **Validates: Requirements 3.3, 3.4**

5. **Layout Integration**:
   - Verify Layout component renders CPDBadge
   - Verify only one CPDBadge instance exists in Layout
   - **Validates: Requirements 4.2**

6. **Code Cleanup**:
   - Static analysis test to search codebase for "Media.jpg" references
   - Verify no matches found in component files
   - **Validates: Requirements 4.1**

**Testing Tools**:
- **React Testing Library**: Component rendering and DOM queries
- **Jest/Vitest**: Test runner and assertions
- **@testing-library/jest-dom**: Custom matchers for DOM assertions

### Property-Based Testing

Property-based tests will verify universal behaviors across multiple inputs using a property-based testing library.

**Library Selection**: `fast-check` (JavaScript/TypeScript property-based testing library)

**Installation**: `npm install --save-dev fast-check`

**Test File**: `src/components/common/CPDBadge/CPDBadge.property.test.jsx`

**Property Test Configuration**:
- Minimum 100 iterations per test
- Each test references its corresponding design property

**Property Test 1: Badge Presence Across All Routes**

```javascript
import { test } from 'vitest';
import fc from 'fast-check';
import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Layout';

// Feature: cpd-certification-badge, Property 1: For any valid application route, 
// the CPD badge component should be present in the rendered DOM.

test('CPD badge appears on all application routes', () => {
    const routes = [
        '/',
        '/abstract-submission',
        '/speakers',
        '/program',
        '/sessions',
        '/venue',
        '/sponsors',
        '/faqs',
        '/visa-info',
        '/contact',
        '/register',
        '/brochure'
    ];

    fc.assert(
        fc.property(
            fc.constantFrom(...routes),
            (route) => {
                const { container } = render(
                    <MemoryRouter initialEntries={[route]}>
                        <Routes>
                            <Route path="*" element={<Layout />} />
                        </Routes>
                    </MemoryRouter>
                );
                
                const badge = container.querySelector('.cpd-badge');
                return badge !== null;
            }
        ),
        { numRuns: 100 }
    );
});
```

**Test Explanation**:
- Uses `fc.constantFrom()` to generate random routes from the application's route list
- Renders the Layout component with each route using MemoryRouter
- Verifies the badge element exists in the DOM
- Runs 100 iterations to test all routes multiple times
- **Validates: Requirements 1.2**

### Integration Testing

**End-to-End Verification**:
- Manual testing in development environment
- Visual verification that badge appears on all pages
- Verify animation plays continuously
- Test responsive behavior on different screen sizes
- Verify no console errors or warnings

**Browser Testing**:
- Test in Chrome, Firefox, Safari, and Edge
- Test on mobile devices (iOS Safari, Chrome Mobile)
- Verify animation performance (no jank or stuttering)

### Test Coverage Goals

- **Unit Test Coverage**: 100% of CPDBadge component code
- **Property Test Coverage**: All defined routes tested
- **Integration Coverage**: Badge integration in Layout component
- **Manual Coverage**: Visual verification across browsers and devices

### Testing Balance

This feature uses unit tests for specific styling and rendering examples, while property-based testing verifies the universal behavior of badge presence across routes. The combination ensures:
- Specific CSS properties are correct (unit tests)
- Badge appears consistently across all pages (property tests)
- Responsive behavior works at breakpoints (unit tests for edge cases)
- No regressions in component integration (unit tests)

Property-based testing is particularly valuable for the route coverage test, as it systematically verifies the badge appears on every page without requiring manual test cases for each route. As new routes are added to the application, they can be added to the routes array in the property test to maintain coverage.
