# EICE Website – Progress

_Last updated: 27 Oct 2026_

## Done

### Home page sections
Header (with Products dropdown and mobile nav), Hero, Clients, Products, Services, Industries, Videos, Metrics, Contact, Footer and the WhatsApp button.

### Products hub page (/products, new)
Built from `Product hubpage Final.pdf`. Header, footer and WhatsApp button are the shared ones.
- **Sections:** Hero, Industry fit, Hospitality, Logistics, Enterprise IT & Security, AI & Automation, Engineering lineage banner, FAQ, Contact.
- **New shared components:** `ProductsHero`, `ProductGroup` (section heading plus card grid), `ProductCard` (wide / compact / feature), `EngineeringBanner`, `Faq` (native `<details>`, no JavaScript). Page content lives in `src/content/products-hub.ts`.
- **Reused and extended:** `IndustryFit` moved here from the home page and restyled to this design (cyan eyebrow, lighter background, cards jump to each section). `Contact` now takes `title`, `description`, `points` and `variant` (the home page keeps its defaults). `SectionHeader` description is optional, with a new `faq` variant. New `CheckCircle` icon and `--line` colour.
- **Images:** no asset export was supplied, so the original photos were extracted from the PDF file itself (not screenshots) and saved as WebP in `public/assets/images/products-hub/`. The banner photo is cropped from the banner artwork; the banner background is a CSS gradient.
- **Navigation:** Products in the header, the mobile nav, "Explore All Products" in the mega menu and "View all products" in the footer go to `/products`. The logo goes to `/`. The header logo uses `preload` (Next 16 deprecates `priority`).
- **SEO:** `pageSeo.products` (placeholder copy for the SEO team), WebPage + BreadcrumbList + FAQPage JSON-LD, listed in the sitemap.
- **Checked:** measured against the PDF at 1440px (section heights within 1–2px, hero within 1px), plus 1920px and 390px mobile. Type check and lint pass, console clean.
- **Open points:**
  - FAQ answers are not in the design. Draft answers are in `products-hub.ts` (marked TODO) and need sign-off.
  - Product links point at `/products/<slug>` and the banner at `/services`. Those pages don't exist yet.
  - The PDF's contact form sits ~38px further right than the shared form. The shared layout was kept.
  - Ask the designer for the exported images (and the banner background) to replace the extracted ones.

### "Talk to an Expert" widget (replaces the WhatsApp button)
- `src/components/TalkToExpert/`, added once in `layout.tsx`, so it shows on every page. The old `WhatsAppButton` was removed.
- Floating pill button opens a glass panel (backdrop blur) with the enquiry form: name, work email, company, service of interest, requirements. Submitting shows the "Thank You!" screen with WhatsApp and Book a Call options.
- Accessible: `role="dialog"`, `aria-expanded` on the button, focus moves into the panel, Esc and the close button return focus to the button.
- Sizes come from the design screenshots, which were taken at 75% zoom, so everything is scaled by 4/3 (title 24px, labels 13px, panel 450px).
- **Open points:**
  - The form doesn't send anywhere yet (`TODO (backend)` in `TalkToExpert.tsx`).
  - `siteConfig.whatsappUrl` needs the WhatsApp number and `siteConfig.bookingUrl` the booking link (`src/config/site.ts`).
  - The design's button says "Sumbit Enquiry"; it was spelt "Submit Enquiry". The "or choose another way to connect" line uses the muted grey instead of near-white so it can be read (WCAG contrast).

### Service pages (/services/<slug>, 17 pages, new)
- **Template:** built from `AI Development Services.pdf`. Every page uses `src/components/ServiceDetail/`, so a design change applies to all 17. Sections: hero, trust strip, overview, "Is this you?", service cards, approach with "How we work", industries, regions, "Delivered Globally" band, technology, closing call to action.
- **Content:** one file per page in `src/content/services/`. Page 1 follows the design PDF; pages 2–17 were extracted from `EICE-Services-Content-All-Pages.docx` by script, so the wording matches the content pack exactly.
- **Not on the pages:** the content pack's Proof, Why EICE, FAQ and Related sections, because the design doesn't have them.
- **Buttons:** "Talk to our team" opens the Talk to an Expert popup (`OpenExpertButton`).
- **SEO:** meta title, description and keywords from the content pack; WebPage, Service and BreadcrumbList JSON-LD; all 17 pages in the sitemap.
- **Checked:** page 1 matches the PDF at 1440px within 1–2px (page height 5073px, the same as the design). 390px mobile has no sideways scroll. Type check and lint pass.
- **Open points:**
  - Pages 2–17 need a hero image (grey placeholder for now) and card icons (empty navy squares for now). Add `hero.image` and `icon` in each content file.
  - The design's band background had the page 1 text baked into the image, so it is now a CSS gradient in the same colours. Ask the designer for the background without text to get the wave texture back.
  - The band paragraph is brighter than the design (92% white instead of about 60%) so it passes WCAG AA.
  - Linked pages that don't exist yet: `/services` (hub), `/products/<slug>`, `/industries/...`, `/case-studies/...`.
  - The content pack is still a draft (see its Appendix C: Africa claim, company figures, legal review).

### Services mega menu (header, new)
- `src/components/ServicesMenu/`, opens on hover or keyboard focus over "Services", like the Products menu. Built from the two design screenshots (67% zoom, scaled by 1.5).
- Intro on the left, all 17 services in four groups in the middle (this list scrolls inside the menu), and a featured AI Development Services card on the right. Every service links to its `/services/<slug>` page.
- **Changed from the screenshots:**
  - Group labels follow the four homepage clusters. The screenshots repeat "AI & Data Engineering" and "ERP & Logistics", which were copied from the Products menu.
  - Chatbot Development and IoT Solutions had the AI Development description copied in; they now have their own short line.
- **Open points:**
  - The 17 service icons (`public/assets/icons/services/menu/<slug>.png`) were cut from the design screenshot at 48px. Ask the designer for SVG or 2x exports so they stay sharp on high-resolution screens.
  - "Services" in the header and "Explore All Services" go to the home page services section until a services hub page exists.

### Hero section rework
- **Problem:** on wide screens (1920px) the hero image was pinned to the right with a fade on the left. The globe got pushed to the edge and the layout didn't match the PDF design.
- **Fix:** replaced the absolutely positioned `next/image` frame (with its clamp/mask math) with a plain CSS background (`background: url(...) center / cover`). The section keeps the same shape as the artwork, so the full picture shows at every width.
- **New image:** `public/assets/images/hero-bg.webp`, a full-resolution 2924×1120 WebP made from the PNG (204 KB instead of 2.4 MB).
- The browser is told to fetch the hero image early with `preload()`.
- **Checked** at 1440px (matches the PDF), 1920px and mobile.

### Industry fit section
- Built for the home page, now used on the products hub instead: `src/components/IndustryFit/`.
- Reuses `SectionHeader` (its button is now optional) and adds `HotelIcon`, `TruckIcon`, `BuildingIcon` and `ArrowForward` to `Icons.tsx` (exact Material Symbols, same as the design).
- Light blue background with soft arcs is pure CSS (no image file was supplied).
- Cards are keyboard-focusable links with a visible focus outline.
- Measured against the design screenshot at 1440px: text, cards and icons are within 1px; section height matches (373px). Checked on mobile too.
- The background arcs are close but not pixel-identical (CSS recreation). If the designer exports the background image, swap it in.

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
| High | Replace the remaining `href="#"` placeholder links (header nav, mega menu items, footer) with real page paths as pages are built. | SEO / WCAG |
| Medium | Shrink large CSS background images: `world-map-wave-bg.png` (876 KB, footer) and the product menu card backgrounds. Convert them to WebP. | Performance |
| Medium | Check colour contrast of text over the hero image and other image backgrounds. | WCAG |
| Medium | Run Lighthouse (mobile and desktop) and fix anything below 90. | Performance / SEO |
| Low | Remove the unused `hero-globe.png` and `hero-globe.webp` if nothing else needs them. | Cleanup |
| Later | Build the inner pages (products, services, industries, about, contact, legal), each following the new-page checklist in `DEVELOPMENT_RULES.md`. | — |
