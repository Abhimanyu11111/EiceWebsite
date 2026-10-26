# EICE Website – Progress

_Last updated: 26 Oct 2026_

## Done

### Home page sections
Header (with Products dropdown and mobile nav), Hero, Clients, Products, Services, Industries, Videos, Metrics, Contact, Footer and the WhatsApp button.

### Hero section rework
- **Problem:** on wide screens (1920px) the hero image was pinned to the right with a fade on the left. The globe got pushed to the edge and the layout didn't match the PDF design.
- **Fix:** replaced the absolutely positioned `next/image` frame (with its clamp/mask math) with a plain CSS background (`background: url(...) center / cover`). The section keeps the same shape as the artwork, so the full picture shows at every width.
- **New image:** `public/assets/images/hero-bg.webp`, a full-resolution 2924×1120 WebP made from the PNG (204 KB instead of 2.4 MB).
- The browser is told to fetch the hero image early with `preload()`.
- **Checked** at 1440px (matches the PDF), 1920px and mobile.

### SEO structure (the content will come from the SEO team)
| File | Purpose |
|---|---|
| `src/config/seo.ts` | Each page's title, description, keywords, share image and sitemap settings. **The SEO team edits this file.** |
| `src/config/site.ts` | Company details: domain, logo, offices, social links, email, phone. |
| `src/lib/seo.ts` | `buildMetadata()` builds the title, description, keywords, canonical URL, OpenGraph and Twitter card. |
| `src/lib/schema.ts` | JSON-LD builders: Organization, WebSite, LocalBusiness (USA and India offices), WebPage. |
| `src/components/JsonLd/JsonLd.tsx` | Renders JSON-LD safely (escapes `<`). |
| `src/app/robots.ts` / `src/app/sitemap.ts` | Built from `src/config/seo.ts`. |
| `src/app/layout.tsx` | Site defaults (`metadataBase`, title template) and site-wide JSON-LD. |
| `src/app/page.tsx` | Home page metadata and WebPage JSON-LD. |
| `.env.example` | `NEXT_PUBLIC_SITE_URL`, the live domain. |

Checked on the dev server: meta tags, canonical, OpenGraph, Twitter card, JSON-LD, `/robots.txt` and `/sitemap.xml` all render. Type check and lint pass.

### Already in place
- `next/font` (Poppins) with `display: swap`.
- `next/image` used for most images, with `alt` text.
- Only small interactive parts use `"use client"`.
- One `<h1>` on the home page, then `h2` and `h3` in order.
- ARIA attributes on the mobile nav, footer accordion, sections and icons.

## Waiting on others

**From the SEO team:**
- Final title, description and keywords for each page (`src/config/seo.ts`).
- A 1200×630 share image (the hero image is used for now).
- Social profile URLs, X handle, public email and phone (`src/config/site.ts`).

**Before going live:**
- Set `NEXT_PUBLIC_SITE_URL` to the real domain.

## To do (gaps found in the audit)

| Priority | Item | Rule |
|---|---|---|
| High | Add visible `:focus-visible` outlines to every link, button and field. There are none yet, and Contact and Footer CSS use `outline: none`. | WCAG |
| High | Replace the 15 `href="#"` placeholder links with real page paths as pages are built. | SEO / WCAG |
| Medium | Shrink large CSS background images: `world-map-wave-bg.png` (876 KB, footer) and the product menu card backgrounds. Convert them to WebP. | Performance |
| Medium | Check colour contrast of text over the hero image and other image backgrounds. | WCAG |
| Medium | Run Lighthouse (mobile and desktop) and fix anything below 90. | Performance / SEO |
| Low | Remove the unused `hero-globe.png` and `hero-globe.webp` if nothing else needs them. | Cleanup |
| Later | Build the inner pages (products, services, industries, about, contact, legal), each following the new-page checklist in `DEVELOPMENT_RULES.md`. | — |
