# Metricly Web — UI Kit (Product-Analytics Dashboard)

A high-fidelity analytics console built in the **Fyscal brand system** (electric blue
`#352eff`, FT Sans, JetBrains Mono figures, zero-radius geometry). Modeled on a SaaS
metrics dashboard: KPI summary, monthly analytics, revenue & subscription plans, and a
subscriber table.

## Run it
Open `index.html`. Click sidebar items (Dashboard / Analytics / Revenue / Users) to switch
the active section; Settings & Help open the profile console.

## Files
| File | Contents |
|---|---|
| `index.html` | Mounts the shell + view router. Loads React 18 + Babel + the JSX below. |
| `Icons.jsx` | Line-icon set (2px stroke) + carets/calendar/chevrons + `WBrandMark`. |
| `Shell.jsx` | `BrowserChrome`, `Sidebar` (real **Fyscal logo**, search, collapsible **sub-nav** on Dashboard/Analytics/Revenue/Users, Teams with **role pills**), `RolePill` (Admin/Finance/Compliance/Observer), `TopBar`, `BtnSm`. |
| `Widgets.jsx` | Dashboard widgets + the `Dashboard` / `Explore` / `Settings` views. |

## Dashboard widgets (the star view)
- **`KpiCard`** — metric + green/red delta caret + “vs last period”; 5 across (Total Users,
  New Signups, Active Users, Churn Rate, MRR) under a `DateDropdown` (“Last 7 days”).
- **`MiniCard`** — titled analytics card with a footer slot. Three charts:
  **`GroupedBars`** (Daily vs Monthly active users), **`LineReturning`** (returning users
  W1–W8, SVG line), **`BarsLeaving`** (churn by month). All have y-axis + x-axis labels.
- **`RevenueArea`** — MRR area chart (SVG gradient fill) with the $84.2k + MoM chip.
- **`SubscriptionDonut`** — segmented donut (Free / Pro / Enterprise) with a center total and
  a count/percent legend table.
- **`SubscribedTable`** — customer table: avatar + name/email, plan, MRR, status pill, since.

## Conventions
- All color/type/spacing from `../../colors_and_type.css`. **Zero border-radius** on cards,
  bars, and chips (the only rounds are avatar circles, status/delta pills, and the date pill).
- Charts are hand-built SVG/flex — no chart library. Money/figures use `--font-mono`.
- Components export to `window` (Babel scripts don't share scope).

## Routing note
Dashboard is the fully-built star. **Analytics / Revenue / Users** highlight and route to the
Dashboard view (a real product would give each its own page; this kit focuses on the main
console). **Settings / Help** open the profile console (`Settings`). The legacy `Explore`
component is retained in `Widgets.jsx` but no longer in the nav.

