# REVIEW — items that need your eyes

Only the things requiring a human decision or input. Everything else is done and verified.

1. **The specs aren't in the repo.** All current site copy is *interim* — it's the copy we agreed in this session, not the final `/specs` files (`agentic-sales-copy-changelog.md`, `brand.md`, `stateside-certified-onepager.md`), which don't exist in the repo. Push or send those three files and I'll replace `content/site.js` with the real content (structure/styles unchanged).

2. **Contact form is a stub.** `<form action="#">` doesn't send anywhere yet. Before launch it needs a real handler — Formspree, Netlify Forms, or an email endpoint. Tell me which and I'll wire it.

3. **Generated pages + `BASE_URL` at domain time.** `index.html` and `es/index.html` are now **build output** from `build.js` (`template.html` + `content/site.js`) — don't hand-edit them; edit `content/site.js` and I rebuild. When the custom domain (e.g. agenticsales.com) goes live, update the single `BASE_URL` line at the top of `build.js` so the social/SEO URLs (`og:image`, `canonical`, `hreflang`) point at the real domain instead of the github.io address.

4. **Copy I wrote that wasn't in any spec.** A few connective phrases were authored this session (not from a spec): the showcase cite "Every corridor · the same standard," the corridor map's "Your market" node label, and the closing CTA heading "Claim your territory." Confirm these or replace them in `content/site.js`.

5. **Spanish translation needs a native-speaker proof before launch.** It's AI-generated Latin American Spanish — structure is verified, but wording should be reviewed for tone/market fit. Specific word choices to confirm: "Guardrailed" → *"Con Límites Claros"*; "Playbooks" → *"guiones de respuesta"*; "corridor" → *"corredor"*; "Founding Rate" → *"Tarifa Fundadora"*; "2 deals" → *"2 cierres"*. Edit any of these in `content/site.js` under the `es:` block.

6. **Spanish-browser auto-redirect is OFF (by choice).** Everyone lands on English at `/` and switches with the toggle. If you'd rather Spanish-language browsers land on `/es/` automatically, say so and I'll add it.

---
_Resolved: Miles Vidor's headshot (`images/milesheadshot.png`) is live; social/SEO is now language-correct (English at `/`, Spanish at `/es/`) via build-time prerender — link previews and search engines see real per-language content._
