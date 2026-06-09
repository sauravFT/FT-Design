# Fyscal Website — UI Kit (Marketing Site)

A high-fidelity, **original** marketing website for Fyscal Technologies — the consumer-facing
landing page that sits in front of the MaV money app. Built entirely in the established brand
language (electric blue `#352eff`, **FT Sans**, **zero-radius** geometry, near-black ink, ₦
currency, the signature blue gradient) and using the **real Fyscal logo** (`assets/fyscal-logo.svg`).

> This is a new design, not a recreation — the source repo has no public marketing site. It
> extrapolates the brand into a conventional fintech landing page. Copy is illustrative.

## Run it
Open `index.html`. It's a single scrolling page; the nav/hero/pricing CTAs smooth-scroll to
the final call-to-action. Buttons have live hover states.

## Responsive / mobile (90% of traffic)
The site is **mobile-first**. `responsive.css` (linked from `index.html`) overrides the
components' inline styles at two breakpoints:
- **≤ 900px** — nav collapses to a **hamburger + slide-down menu**; hero stacks (phone mock
  hidden); features → 2-up; product split, pricing → 1-up; stats → 2×2; footer → 2 columns;
  headings scale down; section padding tightens.
- **≤ 560px** — features → 1-up; hero & CTA buttons go **full-width stacked**; type scales
  down again; footer meta stacks.

`hero.html` carries its own matching breakpoints (≤940 / ≤560): glass cards go full-width
stacked, headline scales, CTAs stack. Both pages set `<meta name="viewport">`.

> Note: the **web-app dashboard** (`ui_kits/web-app`) is intentionally framed as a *desktop*
> browser mock (fixed 1200px inside a window chrome) — it represents the desktop console.
> A dedicated mobile app-shell for it can be added on request.

## Files
| File | Contents |
|---|---|
| `index.html` | Assembles the full page. Loads React 18 + Babel + the JSX below. |
| `Icons.jsx` | Marketing line-icon set (1.75px stroke) + **`FyscalLogo`** (real logo, `blue`/`white` variants). |
| `Nav.jsx` | `NavBar` (sticky, blur) with **animated mega-menu dropdowns** on Personal / Business / Developers (fade-slide panel, staggered rows, caret rotate; hover + focus, mobile-safe), `WBtn` (5 variants × 3 sizes), `Footer` (4-column, dark). |
| `Sections.jsx` | `Hero` (with phone mock), `LogoStrip`, `Features` (6-up grid), `ProductSplit`, `Stats` (dark band), `Pricing` (3 tiers), `Testimonial`, `FinalCTA`. Plus `Section` / `Eyebrow` helpers. |
| `hero.html` / `hero-bands.html` + `HeroBeam.jsx` + `fluted-glass.js` | **Animated hero — 2 background variations** (set `window.__HERO_OPTS.mode` before mount; engine is `fluted-glass.js`). **`columns`** (default, `hero.html`) — frosted-blue columns rising from white with gaps, equalizer breathe. **`bands`** (`hero-bands.html`) — **contiguous full-bleed vertical bands, zero gaps**, sharp seams, blue rises/falls like a seamless equalizer wall. Both: film grain, pointer hover, white→blue fade, the website `NavBar` on top, 30fps-throttled, self-healing, `prefers-reduced-motion` aware. |
| `components.html` + `Library.jsx` + `LibrarySections.jsx` | **Component library** — a full, grouped, mobile-first gallery of building blocks. **Navigation:** breadcrumbs, tabs, segmented control, dropdown menu, side nav. **Content:** feature card, media block, list items, avatars + group, thumbnails, icon set. **Actions:** buttons (4 variants × 3 sizes), popover, action sheet. **Forms:** text input (+ focus/error), select, radio, checkbox, toggle, range slider, search bar. **Feedback:** alerts (4 kinds), badges, toast, progress, spinner + skeleton loaders. **Containers:** responsive grid, panel, modal, drawer. **Data interaction:** filter/sort/refresh bar, reorder list, infinite scroll. **Mobile-specific:** a live phone frame with hamburger nav, simplified menu, large labeled buttons, low-density layout. **Page sections:** announcement bar, above-the-fold intro, feature grid, search+filter, content/storytelling, signup form, related links. All components export to `window` and reuse the brand tokens. |

## Conventions
- All color/type/spacing from `../../colors_and_type.css`. **Zero border-radius everywhere**
  (matching the system's squared language) — the only rounds are avatar circles and status dots.
- Money figures use `--font-mono` (JetBrains Mono); headings are FT Sans 600 with tight tracking.
- One signature gradient (`--gradient-brand`) reserved for hero balance card, product panel,
  stats nothing, and the final CTA. Sections alternate white / `--surface-soft` for rhythm.
- Components export to `window` (Babel scripts don't share scope).

## Not included
Cosmetic only — links are inert, no routing or forms submit. Sub-pages (Business, Developers,
Pricing detail, blog) are represented by the nav but not built; extend with the same `Section`
+ `WBtn` + `FyscalLogo` primitives.
