import type { MetadataRoute } from "next";
import { type PageSeo, pageSeo } from "@/config/seo";
import { absoluteUrl } from "@/config/site";
import { servicePageSeo, servicePages } from "@/content/services";

// Built from the same page list as the metadata, so the two never drift apart.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: PageSeo[] = [...Object.values(pageSeo), ...servicePages.map(servicePageSeo)];

  return pages
    .filter((page) => !page.noIndex)
    .map((page) => ({
      url: absoluteUrl(page.path),
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }));
}
