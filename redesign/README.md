# Heliotrope Imaginal - Marketing Site Redesign

## Overview

This is the redesigned marketing website for Heliotrope Imaginal, built from the Gamma spec document. The site is a clean, modern, professional marketing site using vanilla HTML, CSS, and JavaScript (no frameworks).

## Files Created

- **index.html** - Home page with complete structure and content
- **styles.css** - Complete design system and component styles
- **scripts.js** - Modal behavior, mobile navigation, and interactions

## Design System

### Colors

**AllStarTeams (Blue Theme):**
- Primary: `#4169E1`
- Light: `#6B8FFF`
- Lighter: `#E8EFFF`

**Imaginal Agility (Purple Theme):**
- Primary: `#7B68EE`
- Light: `#9D8FFF`
- Lighter: `#F0EDFF`

**Neutral Colors:**
- White: `#FFFFFF`
- Light Gray: `#F5F5F5`
- Medium Gray: `#E0E0E0`
- Text Primary: `#333333`
- Text Secondary: `#666666`

**Accent Colors:**
- Gold: `#FFB84D`
- Success: `#10B981`

### Typography

- **Headings:** Inter font family
- **Body:** Open Sans font family
- **Max Container Width:** 1200px

### Key Features

✅ **Fixed Header** with logo, navigation, and CTAs (Login, I Have a Code, Join Beta/Waitlist)

✅ **Responsive Design** - Mobile breakpoint at 768px
- Mobile hamburger menu
- Stacked layouts on mobile
- Touch-friendly buttons

✅ **Modal System** - All "Join Beta / Waitlist" buttons open a modal
- Semi-transparent overlay
- Close via X button, clicking overlay, or ESC key
- Prevents background scrolling when open
- Ready for JotForm embed code insertion

✅ **Smooth Animations**
- Fade-in on scroll for cards
- Hover effects on cards and buttons
- Smooth scrolling for anchor links

✅ **Accessibility**
- Semantic HTML structure
- Proper heading hierarchy (H1 → H2 → H3)
- ARIA-friendly navigation
- Keyboard navigation support

## Page Sections (Home Page)

1. **Header** - Fixed navigation with CTAs
2. **Hero** - Gradient background with title, subtitle, and CTA buttons
3. **Impact Stats Bar** - Four key statistics
4. **The Challenge** - Problem statement section
5. **The Solution** - Two workshop cards (AllStarTeams & Imaginal Agility)
6. **Who It's For** - Three audience cards (Teams, Leaders, Educators)
7. **Social Proof** - Featured testimonial + 3 secondary testimonials
8. **Heliotropic Effect** - Brand philosophy section
9. **Quick Pricing Preview** - Three pricing tiers
10. **Final CTA** - Call to action with demo and waitlist buttons
11. **Footer** - Five columns with links and info
12. **Waitlist Modal** - Popup for JotForm embed

## Next Steps

### JotForm Integration

To add the waitlist form, insert the JotForm embed code in `index.html` at line ~401:

```html
<div id="jotform-embed-container">
    <!-- INSERT JOTFORM EMBED CODE HERE -->
</div>
```

### Build Additional Pages

Based on the spec, these pages still need to be built:
- `allstarteams.html` - AllStarTeams workshop detail page
- `imaginal-agility.html` - Imaginal Agility workshop detail page
- `for-organizations.html` - Pricing and enterprise options
- `about.html` - About/origins story
- `contact.html` - Contact form

### Testing Checklist

- [ ] Test on Chrome, Firefox, Safari
- [ ] Test mobile responsiveness (320px, 768px, 1024px)
- [ ] Test modal open/close functionality
- [ ] Test all navigation links
- [ ] Test smooth scrolling
- [ ] Insert JotForm embed code
- [ ] Test form submission
- [ ] Verify all external links (login, redeem code, etc.)
- [ ] Check accessibility with screen reader
- [ ] Validate HTML
- [ ] Check performance/page speed

### Deployment

When ready to deploy:

1. Review and test thoroughly in `/redesign` folder
2. Move files to root directory (or update references)
3. Commit to `marketing-site-redesign` branch
4. Test on staging/preview
5. Merge to `master` branch for production deployment

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

## Notes

- All logo URLs use the production domain: `https://www.heliotropeimaginal.com/images/`
- External links are placeholders and may need updating:
  - Login: `https://auth.heliotropeimaginal.com/login`
  - Redeem Code: `https://app.heliotropeimaginal.com/redeem-code`
- Visual placeholders are used for images that need design assets
- Font imports may be needed (currently using system fonts as fallback)

## Questions or Issues?

Contact: info@heliotropeimaginal.com
