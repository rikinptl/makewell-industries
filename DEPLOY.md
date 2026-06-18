# Vercel deployment checklist

## Repo layout

```
makewell-industries/
├── site-audit/     # not deployed
├── web/            # ← Vercel Root Directory
└── ...
```

## Vercel project settings

| Setting | Value |
|---------|-------|
| Root Directory | `web` |
| Framework Preset | Next.js |
| Build Command | `npm run build` (default) |
| Install Command | `npm install` (default) |
| Node.js Version | 20.x (from `engines` in package.json) |

## Environment variables

| Variable | Required | Notes |
|----------|----------|-------|
| `NEXT_PUBLIC_SITE_URL` | Recommended for production | Canonical URL for SEO/OG, e.g. `https://makewellindustries.co.in` |
| `VERCEL_URL` | Auto-set by Vercel | Used as fallback for preview deployments |

Copy `web/.env.example` for local reference.

## Post-deploy

1. Verify all pages load (homepage, `/products`, a few product detail URLs).
2. Check images render (remote images from current live site).
3. Confirm `/sitemap.xml` and `/robots.txt`.
4. Add custom domain in Vercel and point DNS.
5. Set `NEXT_PUBLIC_SITE_URL` to the live domain and redeploy.
