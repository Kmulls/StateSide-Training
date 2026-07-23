# Repo guardrails — READ FIRST

## What this repo is
This repo hosts **Our House** — the musical community gathering brand — and its
website (the `web/` folder), deployed to GitHub Pages at **mytcmusic.com**.

## Hard rules
1. **One repo, one project, one domain.** Do NOT build, host, or deploy any
   other project or domain from this repo. If a task concerns a different
   project (e.g. agenticsales), it belongs in that project's own repository —
   create or add it, never reuse this one.
2. **Before touching GitHub Pages** (workflows, CNAME, deploys): check the
   repo's existing Pages configuration and custom domain first. A deploy
   replaces whatever Pages is currently serving.
3. The Pages custom domain for this repo must only ever be `mytcmusic.com`.

## History that motivated these rules
In June 2026 a session built the agenticsales.com site on a branch here
(`claude/landing-page-54i2jb`) instead of its own repo. In July 2026 another
session deployed the Our House site, unknowingly replacing agenticsales'
Pages content and inheriting its custom domain. Untangling that cost real
time. Don't repeat it.

## Layout
- `web/` — the three-page static site (index, story, business)
- `.github/workflows/pages.yml` — deploys `web/` to Pages on push to main
- `OUR_HOUSE_ACTIVATION.md`, `OFFER_BRAND_GAMEPLAN.md` — brand & strategy docs
