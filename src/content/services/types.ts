/** Icons drawn in the navy squares on the cards. Leave `icon` out to show an empty square. */
export type ServiceIconName =
  | "arrowUpRight"
  | "rows"
  | "columns"
  | "sparkle"
  | "target"
  | "waves"
  | "squareDot"
  | "halfCircle"
  | "gear";

/**
 * Content for one /services/<slug> page. Every service page uses the same
 * template (src/components/ServiceDetail), so only this data changes.
 */
export type ServicePage = {
  slug: string;
  /** Short name for breadcrumbs and structured data, e.g. "AI Development Services". */
  name: string;
  seo: { title: string; description: string; keywords: string[] };
  hero: {
    /** The h1, shown on two lines. */
    title: [string, string];
    description: string;
    /** Leave out until the image is ready; a placeholder box is shown instead. */
    image?: { src: string; alt: string };
  };
  overview: { title: string; paragraphs: string[] };
  challenges: { title: string; text: string; icon?: ServiceIconName }[];
  services: {
    title: string;
    items: { title: string; text: string; tags: string[]; icon?: ServiceIconName }[];
  };
  approach: { title: string; paragraphs: string[] };
  /** "How we work": the five steps. */
  steps: { title: string; text: string }[];
  industries: { title: string; text: string }[];
  regions: { title: string; intro: string; items: { name: string; text: string }[]; closing: string };
  delivered: { title: string; text: string };
  technology: { title: string; rows: { label: string; items: string }[] };
  cta: { title: string; text: string };
};
