# DECISIONS

Judgment calls made during the content/structure refactor (the "scaffold").
Each line: the call + one-line reasoning.

## Architecture
1. **Buildless runtime content injection** (`content/site.js` data + `data-c` hooks in `index.html` + `content.js` renderer) chosen over a build step — preserves the zero-CI "deploy from a branch" Pages workflow we just got working; edit content → push → live, no pipeline to break.
2. **Content stored as one JS object** (`window.CONTENT` in `content/site.js`) rather than `/content/*.md` markdown — the copy is highly structured (button labels, prices, stat numbers, lists), and a JS global loads on both `file://` and `https://` with no fetch/CORS step and no in-browser markdown parser.
3. **Single content file, not per-page** — the site is currently one page; a single `site.js` is the simplest "one place to edit," and the nested-key shape scales cleanly if pages are added later.
4. **Title + meta description live in content** (filled by the renderer) to honor "all editable copy in one place." Tradeoff: non-JS crawlers see an empty `<title>`/description in static HTML. The static `og:` tags still cover social previews. (See REVIEW #4 — prerender available if organic SEO matters.)

## Implementation (from the refactor subagent)
5. **`content.js` runs immediately at end-of-body, not on `DOMContentLoaded`** — so the injected `#year` span exists before `script.js` runs next; the DOM is already fully parsed at that point.
6. **Pricing `price-amount` stores full innerHTML** including the nested `<span class="price-unit">…</span>` as one content value — keeps the class structure intact without adding an extra wrapper element, while the copy stays editable.
7. **Brand wordmark kept static** (`Stateside`, `Certified™`, `a Roi Digital Consulting venture` in the header, and the brand `aria-label`) — these are fixed brand-identity marks and a functional attribute, not marketing copy.
8. **Desktop + mobile nav share the same `nav.*` keys** — one edit updates both, by design.

## Content provenance
9. **All current copy is INTERIM** — carried over from this session's agreed edits (the B2B / "90-Day Sprint" pivot), because the `/specs` files referenced for the build (`agentic-sales-copy-changelog.md`, `brand.md`, `stateside-certified-onepager.md`) are **not present in the repo**. When the specs are provided, `content/site.js` is swapped wholesale — structure and styles stay put.

## Bilingual toggle (EN / ES)
10. **Content is now `{ en: {...}, es: {...} }`** in `content/site.js` — both languages live in the one editable file; the renderer injects the active language. Same edit-content-only workflow, now per language.
11. **Default language = the visitor's browser language** (`navigator.language`; starts with `es` → Spanish, otherwise English). The visitor's explicit EN/ES choice is then remembered via `localStorage`. English is always the fallback.
12. **Spanish is an AI translation** (neutral Latin American register) — structure/keys/inline-HTML/brand-names/prices/acronyms all preserved (acronym expansions translated, acronyms kept). Flagged for native-speaker proofing (see REVIEW).
