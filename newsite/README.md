# Heliotrope Imaginal — Static Site

A static landing page for Heliotrope Imaginal, migrated from Gamma.app to self-hosted GitHub Pages. Pure HTML + CSS with no build tools required.

## Setup

1. **Download images** — run the download script (requires `curl`):
   ```bash
   chmod +x download-images.sh
   ./download-images.sh
   ```

2. **Optimize images** — resize oversized images (uses macOS `sips`):
   ```bash
   chmod +x optimize-images.sh
   ./optimize-images.sh
   ```

3. **View locally** — open `index.html` in a browser, or start a local server:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000`

4. **Deploy** — push to GitHub Pages (serve from the `newsite/` folder or move contents to repo root).

## Placeholder Buttons

The following buttons use `href="#"` and need real URLs wired up when ready:

| Button | Current href | Future Integration |
|---|---|---|
| **Login** | `#` | User login/authentication system |
| **I have an invite code** | `#` | Invite code redemption flow |
| **Join the Waitlist** | `#` | Waitlist signup form or page |

## External Links

All external links open in new tabs. Active links:

- [AllStarTeams.com](https://AllStarTeams.com)
- [ImaginalAgility.com](https://ImaginalAgility.com)
- [heliotropeimaginal.com](https://heliotropeimaginal.com)
- LinkedIn profiles for all 6 facilitators

## Tech Stack

- HTML5 + CSS3 (no frameworks)
- Google Fonts: Alexandria + Sora
- AOS library (CDN) for scroll animations
- Responsive: mobile breakpoint at 768px
