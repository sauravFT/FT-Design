# MaV Mobile — UI Kit (Money App)

A high-fidelity, interactive recreation of the **Fyscal / MaV consumer money app** on an
iOS frame. Recreates the real auth-to-home flow plus a send-money journey. Pixel cues
(393×852 device, Dynamic Island, 4px-radius controls, gradient balance card, ₦ currency,
mono numerals) are lifted from the source system.

## Run it
Open `index.html`. Use the pill rail to jump to any screen, or tap through naturally:
**Onboarding → Login → OTP → Home → Send → success**.

## Files
| File | Contents |
|---|---|
| `index.html` | Mounts the app + screen-jump rail. Loads React 18 + Babel + the JSX below. |
| `Icons.jsx` | Line-icon set (1.8px stroke), `BrandMark`, Apple/Google glyphs. |
| `Primitives.jsx` | `PhoneFrame`, `StatusBar`, `Button`, `SocialButton`, `Field`, `OTPInput`, `BalanceCard`, `TxnRow`, `BottomNav`. |
| `ScreensAuth.jsx` | `Onboarding` (3-slide), `PhoneLogin` (country + phone), `OTPVerify` (auto-advance). |
| `ScreensApp.jsx` | `Home` (balance, stats, quick actions, weekly spend, transactions), `Send` (recipient, amount, quick chips), `SuccessOverlay`. |

## Conventions
- All color/type/spacing comes from `../../colors_and_type.css` (FT Sans active, `--font-mono`
  for money/OTP). No hardcoded hex outside gradient/overlay alphas.
- Components export to `window` (Babel scripts don't share scope) — see each file's
  `Object.assign(window, {...})` footer.
- Currency is the **Naira (₦)**; numerals are JetBrains Mono, tabular.

## Not included
This is a cosmetic kit — no real auth, no persistence, no backend. Settings, profile,
explore, and notifications screens exist in the source system but are out of scope here;
add them by following the same primitives.
