# Stateside Certified™ — Landing Page

The marketing landing page for **Stateside Certified™**, a venture of Roi Digital
Consulting LLC: AI infrastructure + agent certification that makes a Latin American
brokerage perform like a top US firm, built for expat-heavy markets starting in
San Miguel de Allende.

## Stack

A self-contained static site — no build step, no dependencies.

- `index.html` — page markup and copy
- `styles.css` — design system + responsive layout
- `script.js` — sticky header, mobile nav, scroll-reveal, contact-form stub
- `images/` — San Miguel de Allende property photography (hero, showcase band, CTA)

Fonts (Fraunces + Inter) load from Google Fonts.

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

Drop the three files on any static host — GitHub Pages, Netlify, Vercel, Cloudflare
Pages, or an S3 bucket. No build required.

## Sections

Hero · The Problem · The Offer (AGENTIC Framework™ + Certification) · 90-Day Pilot &
Pricing · Team · Expansion Corridor · Contact

## Notes / TODO

- The contact form is a front-end stub — wire it to a real handler (Formspree, Netlify
  Forms, or a backend) before launch.
- Replace placeholder contact email and Myles's last name when confirmed.
