import type { Metadata } from "next";
import type { PageSeo } from "@/config/seo";
import { siteConfig } from "@/config/site";

/**
 * Builds the full metadata for one page: title, description, keywords,
 * canonical URL, OpenGraph, Twitter card and robots.
 *
 * Static pages:   export const metadata = buildMetadata(pageSeo.home);
 * Dynamic pages:  export async function generateMetadata({ params }) {
 *                   const item = await getItem((await params).slug);
 *                   return buildMetadata({ path: `/products/${item.slug}`, title: item.name, ... });
 *                 }
 */
export function buildMetadata(page: PageSeo): Metadata {
  const image = page.image ?? siteConfig.defaultOgImage;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords?.length ? page.keywords : undefined,
    alternates: { canonical: page.path },
    openGraph: {
      type: "website",
      url: page.path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title: page.title,
      description: page.description,
      images: [{ url: image, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitterHandle,
      title: page.title,
      description: page.description,
      images: [image],
    },
    robots: page.noIndex ? { index: false, follow: false } : undefined,
  };
}
