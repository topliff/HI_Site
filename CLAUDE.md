# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static marketing website for Heliotrope Imaginal, a learning and development company focused on strengthening human capabilities for the AI era. The site is deployed to GitHub Pages at www.heliotropeimaginal.com.

**Tech Stack**: Vanilla HTML, CSS, and JavaScript (no build tools or frameworks)

## Site Structure

The website consists of four main pages, each as a standalone HTML file:

- **index.html** - Homepage with hero section, company overview, and strategic advantages
- **workshops.html** - Details on AllStarTeams, Imaginal Agility workshops, and TARO offering
- **approach.html** - Explanation of methodology, challenges addressed, and conceptual foundations
- **concepts.html** - Deep dive into HaiQ, ROI 2.0, and enterprise implementation

Additional files:
- **thank-you.html** - Confirmation page after form submission
- **404.html** - Custom error page
- **CNAME** - Domain configuration for GitHub Pages (www.heliotropeimaginal.com)

## Design System

All pages share a consistent design system defined in CSS custom properties:

```css
--primary: #6a5acd         (purple/slate blue)
--primary-light: #c3bef0   (light purple)
--secondary: #ef6c00       (orange)
--text: #333333            (dark gray)
--light-bg: #f8f9fa        (off-white)
--white: #ffffff
--dark: #222222            (near black)
--gradient: linear-gradient(135deg, var(--primary), #4a3e9b)
```

### Common Layout Patterns

1. **Fixed Header Navigation** - Consistent across all pages with logo and nav links
2. **Hero/Page Header** - Gradient background section at top of each page
3. **Card-based Content** - Rounded corners (20px), box shadows, and hover effects
4. **Responsive Design** - Mobile breakpoint at 768px (nav links hidden, single column layouts)
5. **Footer** - Dark background with links and copyright

## Key Architectural Patterns

### Contact Form Integration

All pages use an embedded JotForm (ID: 251469357689173) displayed in a modal popup:

- Popup triggered by multiple links: header Contact, CTA buttons, footer Contact
- Modal overlay with iframe containing the form
- The popup is initially hidden and displayed via JavaScript on click
- Form submission redirects to thank-you.html

**Implementation pattern**: Each page has identical popup HTML structure and JavaScript event handlers.

### Navigation

- Logo links back to index.html
- Main nav links: Home, Workshops, Our Approach, Key Concepts, Contact
- All navigation elements are duplicated in the footer
- Mobile navigation (≤768px): nav links are hidden (no hamburger menu currently)

### Image Assets

All images stored in `/images/` directory:
- `HI_logo_horiz.png` - Main horizontal logo (48px height)
- Workshop logos: `all-star-teams-logo-square.png`, `imaginal_agility_logo_sq.png`
- Feature icons: `imaginationicon.png`, `human_ai_collab.png`, `enterprise_ready.png`
- Additional brand assets for various use cases

## Content Architecture

The site follows a narrative structure:

1. **Index** - Problem introduction and value proposition
2. **Workshops** - Specific offerings and solutions
3. **Approach** - Methodology and theoretical framework (Seven Lacks, Triple Cascade, Operational Blueprint)
4. **Concepts** - Proprietary frameworks (HaiQ, ROI 2.0)

Key conceptual frameworks referenced throughout:
- **Six Dimensions of Human Flourishing** (Gallup/Harvard research)
- **Five HCO Pillars** (Human-Centered Organization model)
- **The Seven Lacks** - Workforce psychological deficits
- **The Triple Cascade** - AI-specific challenges
- **Operational Blueprint** - Three nested triads (WHY/WHO/HOW)

## Development Workflow

### Testing Changes

Since this is a static site with no build process:

1. Open HTML files directly in a browser
2. For local testing: `python -m http.server 8000` or use any static file server
3. Test responsive behavior using browser dev tools

### Deployment

The site uses GitHub Pages:

1. Changes pushed to the `master` branch are automatically deployed
2. Domain configured via CNAME file
3. No build step required - files are served as-is

### Git Workflow

```bash
# View current changes
git status
git diff

# Commit changes
git add <files>
git commit -m "Description of changes"

# Deploy to production
git push origin master
```

## Common Development Tasks

### Updating Content

Content is embedded directly in HTML. To update:
1. Locate the relevant HTML file
2. Find the section by searching for headings or class names
3. Edit the HTML directly
4. Test in browser
5. Commit and push changes

### Adding New Pages

If adding a new page:
1. Copy an existing HTML file as a template
2. Update the `<title>` tag and page header content
3. Ensure navigation links are updated across all pages (header and footer)
4. Match the existing design system and component patterns

### Styling Changes

All CSS is inline in `<style>` tags within each HTML file. To modify styles:
1. Locate the CSS in the file's `<head>` section
2. Make changes to existing rules or add new ones
3. Test across all pages if making global changes
4. Consider updating the design system variables if changing core colors

### Image Updates

When replacing images:
1. Add new image to `/images/` directory
2. Update `src` attributes in HTML
3. Maintain aspect ratios and file sizes for performance
4. Use descriptive filenames

## Important Notes

- **No JavaScript Frameworks**: Site uses vanilla JS only
- **No CSS Preprocessors**: All CSS is written directly in HTML files
- **No Build Tools**: No npm, webpack, or bundlers required
- **CSS Duplication**: Each HTML file contains its own complete CSS (shared patterns are duplicated)
- **Form Handling**: External form service (JotForm) handles all form submissions
- **Mobile Navigation**: Currently nav links simply hide on mobile - no hamburger menu implemented

## CSS Class Naming Conventions

Common reusable classes across pages:
- `.container` - Max-width wrapper (1200px)
- `.btn` - Primary button style
- `.btn-white` / `.btn-secondary` - Button variants
- `.section-title` - Centered section headers
- `.feature` / `.feature-card` - Card components
- `.workshop` - Workshop detail cards
- `.popup` / `.popup-content` - Modal overlays

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Uses CSS Grid and Flexbox (no IE11 support needed)
- CSS custom properties (variables) used throughout
- No vendor prefixes included
