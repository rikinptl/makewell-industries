# Makewell Industries — Website

Next.js site for [Makewell Industries](https://makewellindustries.co.in/).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Deploy on Vercel

This app lives in the `web/` subdirectory of the repo. Vercel must use **`web` as the Root Directory**.

### First-time setup

1. Push this repo to GitHub (`rikinptl/makewell-industries`).
2. In [Vercel](https://vercel.com/new), import the repository.
3. **Root Directory:** set to `web` (required — do not deploy from repo root).
4. Framework, build command, and output are auto-detected (Next.js).
5. Add environment variable (Production + Preview):

   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_SITE_URL` | Your production URL, e.g. `https://makewellindustries.co.in` |

   Vercel also sets `VERCEL_URL` automatically for preview deploys; `NEXT_PUBLIC_SITE_URL` is used for canonical URLs, sitemap, and Open Graph tags on production.

6. Deploy.

### Custom domain

After the first deploy, add your domain under **Project → Settings → Domains** (e.g. `makewellindustries.co.in`). Update `NEXT_PUBLIC_SITE_URL` to match the primary domain and redeploy.

### What works out of the box

- All 29 routes are statically generated at build time (no server/database required).
- Product images load from `makewellindustries.co.in` via `next/image` remote patterns.
- `/sitemap.xml` and `/robots.txt` are generated automatically.
- No secrets or API keys are required for the current static site.

### Forms

Quote/inquiry forms are UI-only today (no backend). Wire to Formspree, Resend, or a Vercel serverless route when ready.
