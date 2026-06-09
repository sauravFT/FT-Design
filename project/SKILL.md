---
name: mav-design
description: Use this skill to generate well-branded interfaces and assets for MaV / Fyscal (a mobile-first consumer fintech "money app" spanning iOS, Android, and web), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Key files:
- `README.md` — brand context, content/voice rules, visual foundations, iconography, manifest.
- `colors_and_type.css` — start here for any build: short-named color/type/spacing/shadow
  vars, plus light/dark themes. FT Sans is the active brand face.
- `tokens.reference.css` — the full Figma-verbatim token set (200+ tokens, component states)
  when you need exact parity with the source system.
- `fonts/` — self-hosted FT Sans (the brand typeface). `assets/` — logos.
- `preview/` — specimen cards for every foundation + component.
- `ui_kits/mobile-app/` and `ui_kits/web-app/` and `ui_kits/website/` — interactive React
  recreations with reusable JSX components (phone frame, balance card, transaction rows,
  sidebar console shell, charts, marketing hero/pricing/showcase, etc).

The look in one line: electric blue (`#352eff`) in light, magenta (`#ff00ff`) in dark (where
the primary action is an outline button, not a filled one), on near-black ink and white
surfaces; FT Sans + JetBrains Mono for money; a fully squared, zero-radius component language
(underline-only inputs); only chips/avatars/toggles stay round; soft layered shadows; one
signature blue→royal-blue gradient on the balance/hero; Naira (₦) currency. Voice: plain,
warm, sentence-case, "you/we".

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and
create static HTML files for the user to view — link `colors_and_type.css`, reuse the UI-kit
components, and pull logos from `assets/`. If working on production code, copy assets and read
the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build
or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_
production code, depending on the need.
