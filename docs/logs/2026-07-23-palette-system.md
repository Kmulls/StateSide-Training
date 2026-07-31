# Our House — two-color palette system (2026-07-23)

## Decision
Direction A (First Light) as the base, with Direction B's warmth brought in as a
second accent — a **two-color system**, applied from the uploaded color-system spec
(`ourhousecolorsystem.html`), reconciled against `docs/design/palette-preview.html`.

- **GREEN = action / forward motion** — carries the business promise.
- **AMBER = warmth / hearth / belonging** — carries the community.

Where the SOP's "pull from palette-preview" conflicted with the uploaded
color-system doc, the color-system doc won (newer, role-complete, and its golden
amber matches intent better than Direction B's terracotta). Kevin approved the
reconciled token table before application.

## Role assignments (semantic tokens)
GREEN (`--foxfire` / `--foxfire-deep`): primary CTA fill, links, hover, sprout mark,
build-sequence/forward-motion markers, focus rings, headline kicker accent.
AMBER (`--ember` graphic, `--warm-text` legible text): eyebrows + small labels,
gathering/community markers (flagship = the cohort), card edges, washes.

## The one hard rule
**One action color per screen.** Amber is never a button/primary CTA. Verified: no
`background:var(--ember)` on any interactive element. The flagship "Apply for the
Cohort" / House Call CTAs were amber-filled — switched to green fill. Secondary
actions are green-outline ghosts, never amber fill.

## Tokens
| Role | Light | Dark (firelight) |
| --- | --- | --- |
| ground | #FBF6EC | #1A1410 |
| ground-2 / card | #FFFDF8 | #241C16 |
| surface / chip | #F3ECDD | #2A2018 |
| ink | #221C15 | #F2E9DA |
| muted | #6B6053 | #BFB09A |
| line | rgba(34,28,21,.12) | rgba(242,233,218,.14) |
| action (green) | #1F7A4C | #3FA96B |
| action-deep | #17603C | #5FC489 |
| amber graphic | #E8A93F | #E8A93F |
| amber text (--warm-text) | #A05E0B | #EFB859 |

Fonts: headings **Bricolage Grotesque**, body/labels **Hanken Grotesk** (Google Fonts).
Default theme is now the bright light palette; dark is warm firelight, not near-black.

## Contrast (WCAG AA, ≥4.5:1 for body + buttons)
LIGHT: ink 15.66 · muted 5.70 · green button (white) 5.32 · green link 4.94 ·
amber-text eyebrow 4.75 — all pass. Amber graphic #E8A93F = 1.92 → **decorative
only, never text** (by design; `--warm-text` is the legible variant).
DARK: ink 15.15 · muted 8.59 · amber eyebrow 10.14 · green accent 8.46 · green
button (dark label) 5.70 — all pass. (Fixed the doc's #2F9A62 dark button, which
failed at 3.55, to bright-green fill with dark label.)

## Copy fix landed same pass
Homepage subhead trimmed: cut the category list — "Our House turns your gift into a
business that runs — recurring revenue, less admin, your time back. Not more
hustle. More capacity."

## Verification
All three pages, both themes: fonts load (Bricolage/Hanken), zero JS errors,
eyebrows amber, buttons green, theme toggle flips #FBF6EC → #1A1410. Reduced-motion
disables button hover-lift; focus rings visible; no layout shift; content/links
preserved.

## Open
- `what-we-do.html` was deleted earlier this session; system applied to the three
  live pages (index, story, business). Rebuild if that page returns.
- Price anchors on the Cohort/Buildout still Kevin's to set.
- Firelight dark ground #1A1410 is intentionally deep-warm; can lift a notch if it
  reads too close to black in situ.

**Mirror this decision to the Obsidian vault.**
