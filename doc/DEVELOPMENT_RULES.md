# EICE Website – Development Rules

The EICE website is a public site. Every change must follow these rules for **SEO**, **performance (Lighthouse / Core Web Vitals)** and **accessibility (WCAG 2.1 AA)**.

Stack: Next.js 16 (App Router), React 19, TypeScript, CSS Modules (no Tailwind).

> This Next.js version has breaking changes. Read the matching guide in `node_modules/next/dist/docs/` before writing Next.js-specific code (see `AGENTS.md`).

---

## 1. SEO

- **Metadata on every page.** Add the page to `src/config/seo.ts`, then use the helper:
  ```ts
  // Static page
  export const metadata = buildMetadata(pageSeo.about);

  // Dynamic page (e.g. /products/[slug])
  export async function generateMetadata({ params }) {
    const item = await getProduct((await params).slug);
    return buildMetadata({ path: `/products/${item.slug}`, title: item.name, description: item.summary });
  }
  ```
  This sets the title, description, keywords, canonical URL, OpenGraph and Twitter card.
- **SEO content comes from the SEO team.** Developers add placeholders marked `TODO (SEO team)`. The final text goes only into `src/config/seo.ts` and `src/config/site.ts`.
- **Structured data (JSON-LD).** Organization, WebSite and LocalBusiness are added site-wide in `layout.tsx`. Each page adds its own entity (WebPage, Product, Service…) with `<JsonLd data={schemaGraph(...)} />` using the builders in `src/lib/schema.ts`.
- **Sitemap and robots** are generated from `src/config/seo.ts`. A page added there is in the sitemap automatically (unless `noIndex: true`).
- **Headings:** exactly one `<h1>` per page, then `<h2>` → `<h3>` in order. Never skip a level, and never pick a heading level for its size.
- **Real links:** use real paths (`href="/services"`), not `href="#"`, so crawlers can follow them.
- **Live domain:** `NEXT_PUBLIC_SITE_URL` must be set in production (see `.env.example`). Without it, every URL points to localhost.

## 2. Performance (Lighthouse 90+, Core Web Vitals)

- **Server Components by default.** Add `"use client"` only for state, interactivity or browser APIs, and keep those components small.
- **Images:** use `next/image` with `width`/`height` (or `fill` inside a positioned parent) and a correct `sizes`. Only the LCP image (the hero) gets `priority`.
- **Large images:** convert big PNGs to WebP. Plain CSS backgrounds are not optimised by Next.js, so keep them small.
- **No layout shift (CLS):** reserve space for images, banners, embeds and anything that loads late.
- **Fonts:** load only through `next/font` with `display: "swap"`.
- **Minimal client JavaScript:** avoid heavy libraries when plain CSS or HTML can do the job.
- **Clean console:** no errors, warnings or deprecated APIs.

## 3. Accessibility (WCAG 2.1 AA)

- **Landmarks:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- **Focus:** every link, button and form field must show a visible, high-contrast `:focus-visible` outline. Never use a bare `outline: none`.
- **Keyboard:** everything works with the keyboard alone, with no keyboard traps. Menus and dialogs close with Esc.
- **Images:** descriptive `alt` for informative images and `alt=""` for decorative ones.
- **ARIA:** `aria-label` on icon-only buttons and links, `aria-expanded` / `aria-controls` on toggles, and `aria-hidden="true"` on decorative icons.
- **Contrast:** text and UI parts meet AA (4.5:1 for normal text, 3:1 for large text and UI). Check text placed over images too.
- **Motion:** respect `prefers-reduced-motion`.

## 4. Code style

- **Simple CSS** that reproduces the PDF design ("Eice Homepage Final.pdf"). Avoid complex positioning or math tricks when a plain rule works.
- **Check layouts at 1440px (design width), 1920px (wide screens) and mobile.**
- **One component per folder:** `Component.tsx` + `Component.module.css`.
- **Before finishing a change:** run `npx tsc --noEmit` and `npx eslint src`.

## 5. Design and consistency

The site is growing from one page into a large website. A UI designer designs every page in Figma, and the designs are shared as PDFs.

- **Build exactly to the PDF.** Match spacing, font sizes, weights, colours, radii and shadows at 1440px (the design width).
- **Use the supplied images.** Designs may come with exported images (assets). Use those files, never crops or screenshots of the PDF. Convert large PNG/JPG files to WebP, save them under `public/assets/` with clear names (e.g. `service-cloud.webp`), and keep the originals unchanged.
- **Reuse before creating.** Use the existing shared pieces: `Container`, `SectionHeader`, `Icons`, the button styles and the colour variables in `src/app/globals.css` (`--navy`, `--cyan`, `--ink`, `--body`, `--muted`, `--border`…). Don't hard-code a colour that already has a variable.
- **Same thing, same component.** If a new page repeats something (a card, button, section header or banner), use or extend the existing component rather than copying it.
- **New patterns become shared components.** When a design introduces something that will appear on several pages, build it once in `src/components/`.
- **Design conflicts:** if a new PDF differs slightly from an existing pattern (e.g. a button 2px taller), raise it with the designer or team lead before adding a near-duplicate style.
- **Header and footer** are shared across all pages. Change them in one place only.

## 6. Checklist for a new page

1. Render the PDF design and list which existing components can be reused.
2. Add the page entry in `src/config/seo.ts`, with placeholder text for the SEO team.
3. Export `metadata` or `generateMetadata` using `buildMetadata()`.
4. Add page JSON-LD with `<JsonLd />`.
5. Use one `<h1>` and an ordered heading structure.
6. Use `next/image` for images, with correct `alt` and `sizes`.
7. Make sure every interactive element has visible focus and works with the keyboard.
8. Check the page at 1440px, 1920px and mobile, and confirm the console is clean.
