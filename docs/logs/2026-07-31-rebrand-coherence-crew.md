# Rebrand: Our House → Coherence Crew

**Date:** 2026-07-31
**Scope:** `web/` (index.html, story.html, business.html) — copy/branding only; no layout, color, font, or structure changes.
**Revert point:** commit `96e0e10` (state immediately before the rebrand).

## What changed

- **Brand name** replaced everywhere user-facing: page `<title>`s, meta descriptions,
  nav brand links, footer brand spans, body copy on The Story page, and the
  8-capitals readout label ("In Our House" → "In the Crew").
- **Naming rules applied:** primary "Coherence Crew"; "the Coherence Crew" where a
  sentence needs the article; community collectively "the Crew"; domain and email
  remain mytcmusic.com (untouched).
- **Footer tagline:** "One wave · one house" → "One wave · one Crew".

## New heroes

- **index.html H1:** "We bring your gift and your business into coherence."
  (plain text — no accent color on "coherence," per default)
  Subhead: "We turn your gift into a business that runs — recurring revenue, less
  admin, your time back. Not more hustle. More capacity."
  CTA, microcopy, and eyebrow unchanged.
- **business.html H1:** "Now let's bring **yours into coherence.**" (kicker accent on
  the second half, matching the page's existing pattern; approved in session)
- **story.html H1:** "Coherence **Crew**" (kicker on "Crew," matching prior pattern)

## Intentional literal "house" uses kept (not brand)

- "The House Call" offer name + "Apply for a House Call" (business.html) — literal
  house-call idiom; flagged in session, approved to keep.
- "all ages in the house, always" (story.html) — colloquial.

## Image assets needing manual replacement

None. `web/` contains no logo, favicon, or social-share images — the brand is pure
text. (Also noted: the site has no Open Graph/Twitter tags at all; consider adding
them under the new brand later.)

## Notes

- **"Our House" is retired from user-facing copy and reserved for future use.**
- Internal strategy docs (`OUR_HOUSE_*.md`, `CLAUDE.md`, README) still use the old
  name — out of scope for this pass, by agreement.
- **Reminder: mirror this decision to the vault.**
