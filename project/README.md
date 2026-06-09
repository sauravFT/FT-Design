# MaV — Fyscal Design System

**MaV** ("Modular App Visualizer") is the design system behind **Fyscal**, a mobile-first
consumer **fintech** product — a money app for sending, receiving, paying bills, and
tracking balances. The system spans three delivery surfaces (**iOS**, **Android**, and a
**Web app/dashboard**) from a single token source, and ships in **light** and **dark**
themes.

The signature look is **electric blue (`#352eff`) in the light, magenta (`#ff00ff`)
in the dark** — set on near-black ink (`#171717`, never pure black) and clean white
surfaces, with a fully **squared, zero-radius component language** and one bold blue→royal-blue
gradient reserved for the balance card and hero moments.

> Currency in product mockups is the **Nigerian Naira (₦)**; sample users are global
> (Indonesia default country code, names like Alex Kim, James K., Ahmad R.).

---

## Sources

This system was distilled from the following repository. You don't need access to use
what's here, but if you have it, explore it for deeper fidelity:

- **GitHub — `julio293/MaV-System`** — https://github.com/julio293/MaV-System
  A complete HTML design-system site: token CSS, foundations pages, a component library,
  50 platform screens (iOS / Android / Web), and a live token customiser.
- **Figma source of record** — file key `8dGEq5WuFEitIQxYUmezTr` (Modular App Visualizer).
  Token names in `tokens.reference.css` match Figma **verbatim** — slashes and original
  typos (`devider`, `waring`, `inverterd`) are preserved on purpose so they round-trip.
- **`assets/reference/`** — screenshots of the live MaV Customiser (the in-product live
  token editor) showing the iOS onboarding and login screens.

Tech stack the system targets: **React Native 0.73** (mobile) and **React 18 + MUI v5**
(web), driven by a **three-layer token architecture** (primitive → foundation/semantic →
component).

---

## Content fundamentals

How Fyscal writes. The voice is **plain, warm, and quietly confident** — a calm money
app, not a hype-y crypto product.

- **Person & address.** Speaks to the user as **"you"**; refers to itself as **"we"**
  ("**We'll** send a verification code"). Never "I".
- **Tone.** Reassuring and concrete. Benefit-led, action-first. Short sentences.
  e.g. *"Transfer to anyone, anywhere. No queues, no branches — just tap and it's done."*
- **Casing.** **Sentence case everywhere** — headings, buttons, labels, menu items
  ("Add Money", "Enter your phone number", "I already have an account"). The only
  uppercase is **micro section labels** (10–12px, `600`, `+0.06em` tracking):
  `AVAILABLE BALANCE`, `WEEKLY SPEND`, `RECENT TRANSACTIONS`.
- **Headlines** use a two-tone trick: a black phrase + a colored continuation —
  *"Send money **in seconds**"* (the second line in primary blue).
- **Buttons** are verbs or verb phrases: **Continue, Next, Add Money, Send, Pay,
  See all, Export, + New**. Tertiary actions are bare text links ("I already have an
  account", "Resend code").
- **Numbers & money** are first-class: large, **monospace (JetBrains Mono)**, tabular,
  grouped with separators (`₦ 284,500.00`). Deltas read `↑ 12.4% this week` /
  `↓ 0.2 from last`; credits `+₦ 350,000`, debits `−₦ 2,000` (true minus, not hyphen).
- **Microcopy** sets expectations ("Last updated: just now", "New users will be asked to
  create a profile") and labels transaction states plainly (Credit / Debit / Pending).
- **Emoji**: used **sparingly** — a waving 👋 in the home greeting, and small glyphs in
  web "recent activity" rows. Not a system-wide device; never in buttons or marketing
  headers. Don't add emoji to new surfaces unless mirroring those two patterns.
- **No jargon, no exclamation-mark spam, no ALL-CAPS sentences.**

---

## Visual foundations

**Color.** A blue-led palette. `#352eff` electric blue is the light-mode brand; `#0053ff`
royal blue partners it in gradients; `#7c9dff` periwinkle is the hover tint and `#030192`
deep indigo is the pressed state. **Dark mode flips the accent to magenta `#ff00ff`** on
`#171717` — where the primary action becomes an **outline** button (magenta border + text,
transparent fill), not a magenta-filled surface. Neutrals are a 9-step mono ramp on near-black `#171717`. Semantic colors:
muted-olive **success `#629c28`**, **danger `#ff0000`**, **warning `#ff8400`**, **info
`#144cc7`**, each with a `~10%` "-soft" fill for backgrounds. There are also large
decorative ramps (poliPurple, orangeSunshine, pinkPong, manna, neoPaccha, parkGreen) in
`tokens.reference.css` for illustration/data-viz — not core UI.

**Typography.** **FT Sans** (Fyscal Tech's own typeface, self-hosted from `fonts/`) is the
single brand UI face — a humanist sans shipping four cuts: **Light 300, Regular 400, Medium
500, SemiBold 600**. SemiBold is the heaviest cut, so heading weights of 700/800 are mapped
to the SemiBold file (rendered at its true weight, no faux-bold). **JetBrains Mono** is the
separate, fixed face for code, token names, currency, and OTP digits. Display sizes tighten
tracking (`-0.02em` to `-0.03em`).

**Spacing & layout.** Strict **4px grid** (4→54). Mobile screens are **393×852** with
**20px** edge padding and a ~343px content column. Web app shell is a **220px sidebar +
fluid main**, max ~1080px. Generous vertical rhythm; sections separated by 1px hairlines
rather than heavy dividers.

**Shape / corners.** The system is fully **squared** — a **zero-radius** language. Buttons,
inputs, OTP slots, cards, stat/transaction tiles, the balance/hero card, and bottom sheets
all use **0** radius (`--radius-xs/sm/md/lg/xl` are all `0`). Inputs are **underline-only**
(no box — just a 2px bottom rule). The only round things are **chips, badges, avatars, and
toggles** (`9999px`), plus the realistic device-bezel / browser-window chrome.

**Backgrounds.** Mostly **flat white / `#f2f2f7` iOS-tint** surfaces — no busy textures or
photography in-app. The one expressive move is the **135° blue→royal-blue gradient** on the
balance card and onboarding hero (with a matching blue glow shadow). The marketing/overview
surfaces add a soft radial primary-tint glow in a corner. Code previews sit on near-black
`#0d0d0d`.

**Borders & dividers.** Hairline **1px** in `#efefef` (light) / `#484848` (dark) for
dividers and card outlines; inputs default to a `#cccccc` 1px outline that turns primary on
focus. High-contrast ink borders (`#171717`) exist but are used rarely.

**Shadows / elevation.** Soft, **layered, low-opacity** shadows tinted near-black
(`rgba(16,16,19,…)`) — e.g. `0 16px 32px -4px …/0.10`. Never harsh or pure-black. The
balance card gets a colored **blue glow** (`0 8px 32px rgba(53,46,255,0.35)`). Inputs use a
whisper `0 1px 2px rgba(0,0,0,.05)`.

**Focus & states.** Focus = **3px primary ring** (`rgba(53,46,255,0.4)`) + primary border.
**Hover** lightens toward periwinkle (`#7c9dff`) or a faint primary-tint fill; on web, ghost
buttons fill with `#efefef`. **Press/active** darkens to deep indigo (`#030192`) and shrinks
slightly (`transform: scale(.985)`). **Disabled** = mono-200 fill + mono-400 text.

**Transparency & blur.** Used purposefully: sticky top bars use `backdrop-filter: blur(8px)`;
the balance-card action buttons are translucent white over the gradient
(`rgba(255,255,255,.18)`); soft fills are `color`/hex with `1a` (10%) alpha.

**Motion.** Restrained and quick. Transitions are **0.12–0.2s** on color/background/border;
press feedback is a tiny scale-down; chart bars animate height `0.3s`. **No bounces, no
parallax, no decorative looping animation.** Easing is default/ease — nothing flashy.

**Cards.** White surface, 1px `#efefef` border, **0 radius** (squared), generous 16–24px
padding, soft shadow only when elevated (most list cards are border-only / flat). Stat and
transaction rows pair a square **icon tile** (soft-tinted bg) with
title + meta + a right-aligned mono value.

---

## Iconography

- **Official brand set:** the Fyscal iconography sheet ships **77 two-tone line icons**
  (blue `#352EFF` → magenta `#FF00FF`, ~1.875px stroke, round caps), extracted to
  `assets/icons/icon-01.svg … icon-77.svg` and shown in the **Brand icons** card. Use these
  for brand-forward surfaces (marketing, hero, feature grids) where the two-tone look is wanted.
- **Functional UI set:** in product UI, icons are **inline SVG, ~1.8px stroke, round
  caps/joins**, 20–24px viewbox, inheriting a single color from context (`currentColor` /
  `--icon/*` tokens: default ink, active primary, subtle placeholder, disabled mono-200).
- **No icon font, no sprite sheet, no PNG icons** in the source — every glyph is a small
  hand-rolled SVG path placed directly in markup. The set is custom (not Lucide/Heroicons)
  but visually **Lucide-adjacent**: same weight and round-cap geometry.
- **Recommendation for new work:** match the existing stroke icons. If you need glyphs not
  already drawn, use **[Lucide](https://lucide.dev)** (`stroke-width="1.8"`, 24px) as the
  closest CDN match — it blends in cleanly. *(Substitution — flag if exact parity matters.)*
- **Brand mark:** a **2×2 grid of rounded squares**, the fourth at **40% opacity**, white on
  a primary-blue rounded tile. Saved here as:
  - `assets/logo-mark.svg` — full color tile (64px)
  - `assets/logo-mark-mono.svg` — `currentColor`, for inline/sidebar use
  - `assets/logo-lockup.svg` — mark + "MaV" wordmark (Jakarta `800`)
- **Brand/payment glyphs:** Apple / Google / Facebook social-login marks appear in full
  brand color on auth screens; country flags use **emoji flags** in the phone picker.
- **Emoji as icons:** only the two sanctioned spots (home greeting 👋, web activity feed).
  Don't introduce emoji elsewhere.

---

## Index / manifest

Root files:

| File | What it is |
|---|---|
| `README.md` | This document — brand, content, visual & icon foundations. |
| `colors_and_type.css` | **Start here.** Curated, short-named color + type + spacing + shadow vars. Light/dark. |
| `tokens.reference.css` | The **full** Figma-verbatim token set (200+ tokens, slash names, component states, all themes). Import for exact parity. |
| `SKILL.md` | Agent Skill manifest — how to build with this system. |
| `assets/` | Logos (`logo-mark`, `logo-mark-mono`, `logo-lockup`) + `reference/` customiser screenshots. |
| `preview/` | Design-system specimen cards (rendered in the Design System tab). |
| `ui_kits/` | High-fidelity, interactive recreations of the products. |

UI kits (see each kit's own `README.md`):

- **`ui_kits/mobile-app/`** — the Fyscal consumer money app (iOS frame): onboarding,
  phone login, OTP, home/balance dashboard, send-money. JSX components + interactive
  `index.html`.
- **`ui_kits/web-app/`** — the MaV web design-system console: sidebar app shell, DS-analytics
  dashboard, component/foundation Explore library, profile Settings. JSX components +
  interactive `index.html`.
- **`ui_kits/website/`** — the MaV marketing website (grounded in `web/01-landing.html`):
  gradient hero with token band, stats, 3-up features, platform showcase, pricing, CTA,
  footer, plus a live Components gallery route. JSX components + interactive `index.html`.

Fonts: the brand face **FT Sans** is **self-hosted** from `fonts/` (Light/Regular/Medium/
SemiBold) and is the only UI typeface. **JetBrains Mono** (the separate fixed face for
code/currency/digits) is loaded from Google Fonts via the `@import` at the top of
`colors_and_type.css`. Nothing was substituted.
