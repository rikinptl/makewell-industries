# Makewell Industries — Current Website Audit

**URL:** https://makewellindustries.co.in/  
**Audit date:** June 17, 2026  
**Pages downloaded:** 26 HTML snapshots in `site-audit/pages/`

---

## 1. Company Overview

| Field | Details |
|-------|---------|
| **Name** | Makewell Industries (Makewell Industries Private Limited) |
| **Founded** | 1993 |
| **Location** | Plot No 6 Survey No 1189, Kubadthal Kuha Road, Opp Gajanan Irrigation, Ahmedabad-382433, Gujarat, India |
| **Tagline** | Advanced Pressing for Modern Manufacturing |
| **Business** | Manufacturer of hydraulic presses, hot press machines, cold press machines, and woodworking machinery |
| **Primary email** | sales@makewellindustries.co.in |
| **Secondary email** | darshilhirani7734@gmail.com |
| **Primary phone** | +91 99745 86889 |
| **WhatsApp** | +91 86902 21173 |
| **Other phones** | +91 98252 36038, +91 96242 54445 |

---

## 2. Site Map (26 pages)

### Main Pages (7)
| Page | URL | Purpose |
|------|-----|---------|
| Home | `/index.php` | Hero, stats, products, why choose us, industries, testimonials |
| About Us | `/about-us.php` | Company history, vision/mission/values, team strengths |
| Products (listing) | `/product.php` | All products grid with category filters |
| Application | `/application.php` | Industries served (Laminate, Paper, Plywood, Rubber, Wooden Pencils) |
| Gallery | `/gallery.php` | Photo gallery of installations/products |
| Catalogues | `/catalogues.php` | PDF catalogue downloads (gated behind form) |
| Contact Us | `/contact-us.php` | Contact form, office address, map |

### Category Pages (2)
| Page | URL |
|------|-----|
| Hydraulic Hot Press Machine | `/hydraulic-hot-press-machine.php` |
| Wood Working Machine | `/wood-working-machine.php` |

### Product Detail Pages (17)

**Hydraulic Hot Press Machine:**
1. Plywood Block Board Flush Door Hot Press Machine — `/plywood-block-board-flush-door-hot-press-machine.php`
2. Shuttering Plywood Hot Press Machine — `/shuttering-plywood-hot-press-machine.php`
3. Hydraulic Press For HPL — `/hydraulic-press-for-hpl.php`
4. Pre-Press / Pre-Lam — `/pre-press-hydraulic-press.php`
5. Electric Boiler Hot Press — `/electric-boiler-hot-press.php`
6. Core Dry Press — `/core-dry-press-machine.php`
7. Cold Press — `/cold-press-machine.php`
8. Metal Door Press Machine — `/metal-door-press-machine.php`
9. Fiberglass Hot Press — `/fiberglass-hot-press.php`
10. Hydraulic Press for Waste Recycling Plastic Sheet — `/hydraulic-press-for-waste-recycling-plastic-sheet.php`
11. Hydraulic Press for Rubber Press — `/rubber-press.php`

**Wood Working Machine:**
12. CNC Router Machine — `/cnc-router-machine.php`
13. Panel Saw — `/panel-saw.php`
14. Beam Saw Machine — `/beam-saw-machine.php`
15. Multiboring Machine — `/multiboring-machine.php`

**Orphan / Hidden pages (not in main nav):**
16. Edge Bander — `/edge-bander.php` (listed on homepage but not in nav submenu)
17. Auto Edge Banding Machine — `/auto-edge-banding-machine.php` (commented out in nav)

---

## 3. Homepage Sections

1. **Hero slider** — 6 banner images (`makewell-b1` through `makewell-b6`)
2. **About intro** — Founded 1993, Ahmedabad; hydraulic press manufacturer
3. **Stats counters** — Years of experience, happy customers, project installations, expert workers (animated odometer)
4. **Product showcase** — Filterable grid (All / Hydraulic Hot Press / Wood Working) — 16 products
5. **Why Choose Us** — Vision, Mission, Core Values (Ethics, Transparency, Responsibility)
6. **Feature cards** — Experience, Professional, Safety, Sustainability, Integrity, Reliable
7. **Industries We Serve** — Laminate, Paper, Plywood, Rubber, Wooden Pencils
8. **Testimonials** — 3 client reviews (Girish Patel, Minesh Trivedi, Yashasvi Dhule)
9. **Indiawood 2026** promo image

---

## 4. Navigation Structure

```
Home
About us
Product ▼
  ├── Hydraulic Hot Press Machine ▼
  │     ├── Plywood Block Board Flush Door Hot Press Machine
  │     ├── Shuttering Plywood Hot Press Machine
  │     ├── Hydraulic Press For HPL
  │     ├── Pre-Press / Pre-Lam
  │     ├── Electric Boiler Hot Press
  │     ├── Core Dry Press
  │     ├── Cold Press
  │     ├── Metal Door Press Machine
  │     ├── Fiberglass Hot Press
  │     ├── Hydraulic Press for Waste Recycling Plastic Sheet
  │     └── Hydraulic Press for Rubber Press
  └── Wood Working Machine ▼
        ├── Electric Boiler Hot Press (duplicate)
        ├── Cold Press (duplicate)
        ├── CNC Router Machine
        ├── Panel Saw
        ├── Beam Saw Machine
        └── Multiboring Machine
Application
Gallery
Contact
[Get Quote] — opens inquiry modal
```

**Sticky sidebar (all pages):** Send Inquiry | Catalogue | WhatsApp  
**Floating:** WhatsApp button (bottom-right)

---

## 5. Product Page Template

Each product page follows this layout:
- Breadcrumb (Home → Product name)
- **Left:** Image slider with thumbnails (Fancybox lightbox)
- **Right:** Product title, description paragraph, CTA buttons (Make an Inquiry, Download)
- **Below:** Description section, specifications table (varies by product)
- **Bottom:** Related products / cross-sell sections on some pages
- Inquiry modal + catalogue download modal (global)

---

## 6. Forms & Lead Capture

| Form | Action | Fields |
|------|--------|--------|
| Inquiry modal (popup on load) | `inquiry-action.php` | Name, Email, City, Phone, Requirement, Captcha |
| Catalogue download | `catalogue-action.php` | Name, Email, Phone, Captcha |
| Contact page | `inquiry-action.php` | Same as inquiry |

**Lead gen touchpoints:** Popup on page load, sticky sidebar, Get Quote button, WhatsApp, phone links, product inquiry buttons.

---

## 7. Tech Stack (Current)

| Layer | Technology |
|-------|------------|
| Backend | PHP (`.php` pages, form handlers) |
| CSS | Bootstrap, custom `main.css`, Poppins font |
| JS | jQuery, Swiper, Slick Carousel, Fancybox, Odometer (counters) |
| Analytics | Google Tag Manager (`GTM-WTBGR7SX`) |
| Images | WebP format, SVG logo |
| Hosting | Apache (404 pages confirm) |

---

## 8. Assets Inventory

- **Logo:** `Makewell-web.svg`, `Makewell-white.svg`, `makewell-logo.webp`
- **Favicon:** `makewell-fev.webp`
- **Banners:** 6 homepage slider images
- **Product images:** Organized under `assets/images/inner-pages/products/detail-product/`
- **Icons:** Experience, Professional, Safety, Sustainability, Integrity, Reliable
- **Industry images:** Laminates, Paper, Plywood, Rubber, Wooden Pencils
- **Client logo:** Mechpro
- **Event:** Indiawood 2026 banner

Saved locally: `site-audit/assets/logo.svg`, `site-audit/assets/favicon.webp`

---

## 9. Content to Preserve for Redesign

### Brand messaging
- **Vision:** "To become a leading force in engineering and project management, delivering exceptional results that exceed client expectations."
- **Mission:** "To see a Makewell machine powering every woodworking factory—in every city, every state, across our nation."
- **Core values:** Ethics, Transparency, Responsibility

### Testimonials
1. Girish Patel — "Makewell Industries delivers top-notch ply products — superior quality, excellent finish, and trusted performance every time."
2. Minesh Trivedi — "Makewell Industries offers consistently good products with reliable quality and excellent value for money."
3. Yashasvi Dhule — "Impressed by the prompt and professional client support — Makewell Industries truly values their customers."

### Key selling points
- 30+ years experience (founded 1993)
- Custom hydraulic press design capability
- Ahmedabad-based manufacturing
- 24/7 customer service claim
- Competitive pricing, robust construction

---

## 10. Issues Found (Redesign Opportunities)

### Critical
- **Same `<title>` and meta description on ALL 26 pages** — bad for SEO
- **No sitemap.xml or robots.txt**
- **Wrong email in legacy header:** `infofinland@gmail.com` (template leftover, appears in commented HTML)
- **Invalid HTML:** `<head>` tag appears before `<html>` tag
- **Social links are `#` placeholders** — Facebook, Twitter, YouTube, LinkedIn not connected

### Navigation & UX
- **Edge Bander** on homepage but missing from nav
- **Auto Edge Banding Machine** page exists but nav link is commented out
- **Duplicate products** in Wood Working submenu (Electric Boiler Hot Press, Cold Press appear in both categories)
- **Popup inquiry modal** fires on every page load — intrusive
- **Desktop nav hidden** (`style="display: none;"` on `#mobile-menu`) — may rely on JS to show
- **Inconsistent phone number formatting** across pages

### Content
- Generic section titles reused ("Advanced Pressing for Modern Manufacturing" on multiple unrelated pages)
- Some product pages have minimal unique content (spec tables vary: 0–14 rows)
- Stats counters show "00+" until JS animates — poor without JS
- Copyright says 2025, company name inconsistency (Sole Proprietorship vs Private Limited)

### Performance
- Each page is ~53–129 KB of HTML (heavy, lots of inline/duplicate markup)
- Multiple CSS/JS libraries loaded on every page
- No lazy loading evident on images

---

## 11. Recommended New Site Structure

For the redesign, suggest a cleaner IA:

```
/                          Home
/about                     About Us
/products                  Product listing
/products/[slug]           Individual product (17 products)
/applications              Industries served
/gallery                   Photo gallery
/catalogue                 PDF downloads
/contact                   Contact + inquiry form
```

**Optional additions:**
- `/blog` or `/news` for SEO
- `/case-studies` for installation stories
- `/faq` for common buyer questions

---

## 12. Files in This Audit

```
site-audit/
├── SITE-AUDIT.md          ← This document
├── assets/
│   ├── logo.svg
│   └── favicon.webp
└── pages/                 ← Full HTML snapshots of all 26 pages
    ├── index.html
    ├── about-us.html
    ├── product.html
    ├── ... (23 more)
```

---

## 13. Next Steps for Redesign

1. **Confirm tech stack** — Next.js/React static site vs WordPress vs keep PHP?
2. **Brand guidelines** — Colors, typography beyond Poppins, logo usage
3. **Content audit with client** — Verify product list, remove orphans, update copy
4. **Photography** — New hero images, factory shots, team photos?
5. **SEO strategy** — Unique titles/descriptions per page, schema markup for products
6. **Lead capture** — Replace captcha forms with modern solution (or reCAPTCHA v3)
7. **Hosting/domain** — Keep same domain, plan migration

---

*Ready to proceed with full redesign when you give the go-ahead.*
