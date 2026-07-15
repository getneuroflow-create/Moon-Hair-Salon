# Moon Hair Studio

Premium bilingual (English / Español) website for **Moon Hair Studio** in Metuchen, NJ.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/                 # Routes: home, services, team, contact, reviews
  components/          # UI, layout, home sections, pages
  content/             # EN/ES dictionaries
  context/             # Language provider
  data/                # Services, team, reviews, FAQ, site config
  lib/                 # SEO + motion helpers
public/
  brand/logo.png       # Business logo
  media/intro.mp4      # Intro / hero video
```

## Editable content

| File | Purpose |
|------|---------|
| `src/data/site.ts` | Address, phone, socials, hours, maps |
| `src/data/services.ts` | Service menu + pricing labels |
| `src/data/team.ts` | Team placeholders |
| `src/data/reviews.ts` | Paraphrased review themes |
| `src/content/dictionaries.ts` | All UI copy (EN/ES) |

## Notes

- Hours, email, exact pricing, and named team members are structured as editable placeholders until confirmed.
- The scissors preloader runs once per browser session.
- Hero uses `/public/media/intro.mp4` (copied from `data/`).
