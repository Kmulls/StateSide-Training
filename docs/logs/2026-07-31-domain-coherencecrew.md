# Domain change: mytcmusic.com → coherencecrew.com

**Date:** 2026-07-31 (same day as the Coherence Crew rebrand; owner decision)
**Prepared on branch, merged only after DNS was confirmed.**

## What changed

- `web/CNAME`: `coherencecrew.com`
- `.github/workflows/pages.yml`: Pages custom-domain registration → `coherencecrew.com`
- `web/index.html` footer: displays `coherencecrew.com`
- `CLAUDE.md` guardrails updated: repo domain rule now pins `coherencecrew.com`

## DNS (Namecheap, Advanced DNS)

- Apex `@`: four A records → 185.199.108.153, 185.199.109.153,
  185.199.110.153, 185.199.111.153
- `www`: CNAME → `kmulls.github.io.`
- Namecheap default parking/redirect records removed.

## Consequences / follow-ups

- **mytcmusic.com stops being served by Pages** once this deploys (GitHub Pages
  allows one custom domain per site). Visitors to the old domain will 404 unless
  a redirect is set up at the registrar (Namecheap URL Redirect → coherencecrew.com).
- HTTPS cert for the new domain is provisioned by GitHub after the first deploy —
  can take minutes to ~1 hour. Then enable **Enforce HTTPS** in Settings → Pages.
- Recommended: verify the domain in GitHub Settings → Pages → verified domains
  to prevent domain takeover.
- Booking/Calendly and Google Form links unchanged (not domain-dependent).
