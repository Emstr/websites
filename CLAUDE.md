# Kolider Digital — Project Brief

## What This Is

A Next.js monorepo that serves two purposes:

1. **Kolider Digital landing page** (`/`) — the agency's own site, selling web design + GEO services to small London businesses
2. **Prospect demo sites** (`/[slug]`) — fully built demo websites for specific real-world prospects, used as cold outreach ("I built your site — take a look")

The business model: find small businesses with terrible websites, build them a demo, send a cold email with the link, charge £500 flat + £20/month hosting.

## Tech Stack

- Next.js 15, React 19, TypeScript
- Tailwind CSS 4
- Deployed on Vercel via GitHub (auto-deploys on push to `main`)
- All sites live under one Vercel project as route segments

## Repo Structure

```
app/
  page.tsx                  # Kolider Digital homepage
  components/
    ClientsModal.tsx         # Press '?' to see all demo sites
  [site-slug]/               # One directory per prospect demo
    layout.tsx               # Site-specific layout (fonts, colors)
    page.tsx                 # Homepage
    components/
      Header.tsx
      Footer.tsx
    services/page.tsx
    about/page.tsx
    contact/page.tsx
    faq/page.tsx
    quote/page.tsx           # (some sites)
    fees/page.tsx            # (some sites)
    globals.css              # Site-specific Tailwind theme vars
    sitemap.ts
    robots.ts

public/
  work/                      # Portfolio screenshots for Kolider homepage

prospects/
  london-notaries.md         # Prospect research: notaries
  financial-advisers.md      # Prospect research: IFAs
  outreach-strategy.md       # 30 business types, email templates, pricing
  cold-email-strategy.md     # Research-backed cold email guide
```

## Current Demo Sites

| Slug | Prospect | Vertical | Status |
|------|----------|----------|--------|
| `camden-notary` | Linda Okagbue | Notary | Ready (fix hero image first — see below) |
| `notary-public-camden` | Kuddus Solicitors | Notary | Ready |
| `notary-public-hackney` | Kuddus Solicitors | Notary | Ready |
| `notary-public-southwark` | Kuddus Solicitors | Notary | Ready |
| `notary-public-tower-hamlets` | Kuddus Solicitors | Notary | Ready |
| `notary-public-belsize-park` | Bernard Cordell | Notary | Ready |
| `notary-public-holborn` | Unknown | Notary | Ready |
| `notary-public-islington` | Unknown | Notary | Ready |
| `notary-public-stamford-hill` | Unknown | Notary | Ready |
| `notary-southwark` | Unknown | Notary | Ready |
| `alpha-investments` | Alpha Investments & Financial Planning | IFA | Ready |
| `total-finance` | Total Finance (UK) Ltd | IFA | Ready |

## Known Issues

- `camden-notary` references `/hero-bg.jpg` in its homepage which doesn't exist in `/public/`. The hero renders without a background photo. Fix: remove the `<Image>` component and replace with a CSS gradient in the hero section.

## How to Add a New Demo Site

1. Copy an existing site directory that matches the vertical (e.g. `cp -r app/camden-notary app/new-site-slug`)
2. Update `layout.tsx` — change the site title, description, and theme colours
3. Update `components/Header.tsx` — change the brand name and nav hrefs to use the new slug
4. Update `components/Footer.tsx` — same
5. Update `page.tsx` and all sub-pages — swap in the prospect's real name, location, services, phone, email
6. Update `sitemap.ts` and `robots.ts` — change the base URL slug
7. Add the new site to the `ClientsModal.tsx` in `app/components/`
8. Push to `main` — Vercel deploys automatically

**Critical rule:** All internal links must be slug-prefixed. Use `/new-site-slug/services` not `/services`. Getting this wrong causes 404s (root-level routes don't exist for sub-sites).

## Outreach Model

- **Cold email** with demo link — "I built your site, take a look"
- **Pricing:** £500 flat fee to go live + £20/month hosting
- **Bulk deal:** £500/site for multi-site clients (e.g. Kuddus Solicitors has 4 sites)
- **Pivot rule:** 10 outreaches with no reply in 3 days = switch vertical

Full email templates and strategy: `prospects/outreach-strategy.md`
Cold email research and best practices: `prospects/cold-email-strategy.md`
Prospect lists with contact details: `prospects/london-notaries.md`, `prospects/financial-advisers.md`

## Priority Outreach Targets

1. **Kuddus Solicitors** — reception@kuddussolicitors.com — bulk deal for 4 notary sites
2. **Linda Okagbue** — 07985 405640 — camdennotary.co.uk, behind competitors in rankings
3. **Alpha Investments** — 020 3397 7730 — Mayfair office, outdated WordPress site

## Kolider Digital Brand

- Name: Kolider Digital
- Pitch: web design + GEO (Generative Engine Optimization) for London small businesses
- GEO angle: AI tools like ChatGPT and Perplexity recommend businesses based on their web presence — outdated sites don't get cited
- Tone: confident, direct, no agency fluff
