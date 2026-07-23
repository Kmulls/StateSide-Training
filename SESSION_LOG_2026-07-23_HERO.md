# Session log — Homepage hero rebuild (2026-07-23)

Branch: `claude/our-house-hero-redesign-dgoi5e` · Spec: `OUR_HOUSE_HERO_SPEC.md`

## What changed
`web/index.html` only. The "Welcome home." hero was replaced with the conversion
hero from the spec: eyebrow → H1 ("You create the magic. We build what carries
it.") → subhead → dominant "Book a call" CTA → microcopy → secondary gathering
link → qualifier + scarcity meta row. All spec copy used verbatim.

## Decisions
1. **Design tokens reused, none invented.** Colors, fonts, radii, and focus
   styles were read from the live CSS. The CTA button reuses the `.btn.primary`
   recipe from business.html (foxfire pill, mono uppercase, hover-invert),
   scaled up as the loudest element on the fold. The green "kicker" accent from
   the old hero carries over onto the H1's second sentence, and the sprout +
   roots-canvas motif was kept (sprout slightly smaller to make room).
2. **Booking wiring.** `BOOKING_URL` constant at the top of the file, set to
   `https://calendly.com/tcmusic/30min`. The anchor's HTML fallback href is
   `business.html#apply`, upgraded to `BOOKING_URL` by JS — the button is never
   dead, even with scripts blocked.
3. **Secondary link** points to `what-we-do.html` (no dedicated events anchor
   exists yet).
4. **Fold tuning.** Hero top padding reduced (clamp 5.5–7.5rem) so the full
   anatomy, including the scarcity line, sits above the fold at 1440×900.
5. **Out of scope, deliberately:** a pre-call VSL landing page and the Google
   Form intake (embed link captured below) were raised mid-session. They change
   the funnel (CTA → VSL → form → Calendly vs. CTA → Calendly) and deserve
   their own page + decision, not a bolt-on to this hero. **Open decision.**
   Form embed: `https://docs.google.com/forms/d/e/1FAIpQLSdXl56yb2uVhSDIdHZrGs1KYWXQhG0ew7Q2r3rLqnzFBq1_cA/viewform?embedded=true`
6. Page `<title>`/meta description still say "Welcome Home" — left untouched
   per spec scope; worth revisiting alongside the funnel decision.

## Follow-up (same session)
A copy-simplification sweep (closing-quote sections removed on all four pages,
Bob Marley quote block removed, uniform "Ready when you are." + Book a call
closes) was built, verified, and then **fully reverted** at Kevin's direction:
the first-draft homepage was fine, and the copy edits will be made by hand.
The PR therefore contains the hero rebuild only. The sweep survives in git
history (commit fdf2064, reverted) if any of it is wanted later.

## Positioning ruling (Kevin, 2026-07-23)
**v3 hybrid positioning overrides everything** — business outcome in the
headline, the ecosystem/community as the method and moat. Where the older
strategy docs (OFFER_BRAND_GAMEPLAN.md seeker/hub funnel) conflict with v3,
v3 wins. Site copy should be brought into line with v3, not the reverse.

## Verification
Rendered headlessly (Chromium) at 1440×900 dark, 1440×900 light, 390×844
mobile, plus a toggle-click test: no JS errors, CTA href resolves to the
Calendly link, theme toggle flips correctly (`data-theme` override path), full
anatomy above the fold in both themes, reduced-motion paths unchanged.

## Deploy note
Pages deploys `web/` on push to **main** — nothing goes live until this branch
is merged.
