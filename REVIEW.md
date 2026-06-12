# REVIEW — items that need your eyes

Only the things requiring a human decision or input. Everything else is done and verified.

1. **The specs aren't in the repo.** All current site copy is *interim* — it's the copy we agreed in this session, not the final `/specs` files (`agentic-sales-copy-changelog.md`, `brand.md`, `stateside-certified-onepager.md`), which don't exist in the repo. Push or send those three files and I'll replace `content/site.js` with the real content (structure/styles unchanged).

2. **Missing image — Miles's headshot.** `images/milesheadshot.jpg` isn't in the repo, so his team card shows the "M" fallback. Drop the file into `images/` (any of `.jpg/.jpeg/.png` — the card auto-detects) and it appears.

3. **Contact form is a stub.** `<form action="#">` doesn't send anywhere yet. Before launch it needs a real handler — Formspree, Netlify Forms, or an email endpoint. Tell me which and I'll wire it.

4. **Social/SEO meta is partly hardcoded and slightly stale.** The `og:title`/`og:description` tags (used for link previews) are still the old "Latin American brokerage… top US firm" line — they don't reflect the 90-Day Sprint pivot and aren't editable via `content/site.js` yet. Also: the page `<title>` and meta description now render via JS, so non-JS crawlers see them empty. If organic search matters, I can add a tiny prerender step so the static HTML carries them. Want that?

5. **Copy I wrote that wasn't in any spec.** A few connective phrases were authored this session (not from a spec): the showcase cite "Every corridor · the same standard," the corridor map's "Your market" node label, and the closing CTA heading "Claim your territory." Confirm these or replace them in `content/site.js`.
