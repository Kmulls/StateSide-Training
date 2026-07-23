# Our House — Homepage Hero Rebuild Spec
Color-agnostic by design: pull the real palette, fonts, and theme behavior from the
existing CSS and match them exactly. Do not introduce new colors or fonts.

## The job
The current homepage hero (index.html, the "Welcome home." block) is nearly empty at
the top of the fold and does not convert. Replace it with a hero that, in five
seconds, (1) names who it's for, (2) states the business outcome, and (3) drives ONE
action: Book a call. Change index.html only.

## Visual rules — match, don't invent
- Reuse the site's existing color hex values (light AND dark theme), fonts, button
  styles, radii, and spacing. No new palette, no new fonts.
- Honor the existing light/dark theme toggle — correct in both.
- Extend the visual language already on the site, don't impose a different one. If
  there's a background motif or texture, build on it; if it's clean, keep it clean.
- Fill the fold — no large empty band above the first content.

## Audience (avatar)
The practitioner-entrepreneur: coaches, facilitators, teaching artists,
movement/wellness pros, workshop leaders, studio owners, community-builders — people
who already deliver the magic but lack the business machinery (systems, tech,
recurring revenue) around it. They want a business that runs and pays, without
becoming a full-time marketer or tech person.

## Exact hero copy — use verbatim
- Eyebrow: For coaches, facilitators, creators & community-builders
- Headline (H1): You create the magic. We build what carries it.
- Subhead: Our House gives you the systems, the tech, and the community to turn your
  gift into a business that runs — recurring revenue, less admin, your time back.
  Not more hustle. More capacity.
- Primary CTA (button): Book a call
- CTA microcopy: A 30-minute vision call. We'll map what's capping your growth —
  no pressure.
- (Secondary "or come to a gathering →" link removed 2026-07-23 at Kevin's
  direction — one action only.)
- Qualifier line: For practitioners with an audience, a practice, and a vision for
  something bigger.
- Scarcity line: Now assembling the first cohort — 8 to 12 practitioners.

Alt headline if business-forward is preferred: "Build a real business around your
gift — without becoming a full-time marketer." Default to the H1 above.

## Conversion anatomy (top to bottom)
1. Eyebrow (avatar — instant self-selection)
2. H1 (the transformation)
3. Subhead (the business promise, plain words)
4. One dominant primary CTA: Book a call — loudest element on the fold
5. CTA microcopy (removes friction)
6. Qualifier + scarcity lines (thin meta row)

## Booking wiring
- Single BOOKING_URL constant at the top of the file so it's swapped once.
- Placeholder: https://cal.com/your-link
- If no scheduler exists yet, fall back to business.html#apply so the button is
  never dead.

## Quality floor
Responsive to mobile (CTA comfortably tappable). Visible keyboard focus on CTA and
secondary link. Respect prefers-reduced-motion. No layout shift; nav and theme
toggle keep working.

## Definition of done
- index.html hero replaced; old "Welcome home." block removed.
- Renders correctly in both light and dark theme using the site's real tokens.
- Single dominant Book a call CTA wired to the constant.
- Copy matches this spec verbatim.
- Other pages untouched.

## Positioning context
Reflects the v3 hybrid positioning: business outcome in the headline, the
ecosystem/community as the method and moat.
