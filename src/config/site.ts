/**
 * Company-wide details used by metadata, JSON-LD, robots.txt and the sitemap.
 * Set NEXT_PUBLIC_SITE_URL to the live domain in production (see .env.example).
 */
export const siteConfig = {
  name: "EICE",
  legalName: "EICE Technology",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_US",
  logo: "/assets/logos/eice-logo.png",

  // TODO (SEO team): replace with a 1200 x 630 share image.
  defaultOgImage: "/assets/images/hero-bg.webp",

  // TODO (SEO team): X / Twitter handle, e.g. "@eice".
  twitterHandle: undefined as string | undefined,

  // TODO (SEO team): full profile URLs (LinkedIn, YouTube, Facebook, X, Instagram).
  socialLinks: [] as string[],

  // TODO (SEO team): public contact email and phone.
  email: undefined as string | undefined,
  telephone: undefined as string | undefined,

  // Same offices as the footer's "Our Global Presence".
  offices: [
    {
      id: "usa",
      name: "EICE Technology - USA",
      streetAddress: "11011 Richmond Ave, Suite 715",
      addressLocality: "Houston",
      addressRegion: "TX",
      postalCode: "77042",
      addressCountry: "US",
    },
    {
      id: "india",
      name: "EICE Technology - India",
      streetAddress: "6th floor, Platina Heights, C-24, Sector 62",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201301",
      addressCountry: "IN",
    },
  ],
};

/** Turns a site path like "/about" into a full URL on the live domain. */
export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
