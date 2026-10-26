import type { MetadataRoute } from "next";

/**
 * SEO content for every page. The SEO team edits this file only.
 * Adding a page here also adds it to sitemap.xml (unless noIndex is true).
 */
export type PageSeo = {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  /** Share image for this page; falls back to siteConfig.defaultOgImage. */
  image?: string;
  /** Keep the page out of search results and the sitemap. */
  noIndex?: boolean;
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority?: number;
};

export const pageSeo = {
  home: {
    path: "/",
    // TODO (SEO team): final title, description and keywords.
    title: "AI Engineered for Global Enterprise",
    description:
      "AI-powered products and enterprise technology solutions that help businesses automate work, optimise operations, and scale with confidence.",
    keywords: [],
    changeFrequency: "weekly",
    priority: 1,
  },
} satisfies Record<string, PageSeo>;
