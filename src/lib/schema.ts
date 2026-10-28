import { absoluteUrl, siteConfig } from "@/config/site";

/**
 * JSON-LD (schema.org) builders. Each entity has an @id so pages can point
 * at the organisation instead of repeating it.
 */
const organizationId = absoluteUrl("/#organization");
const websiteId = absoluteUrl("/#website");

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: absoluteUrl("/"),
    logo: absoluteUrl(siteConfig.logo),
    email: siteConfig.email,
    telephone: siteConfig.telephone,
    sameAs: siteConfig.socialLinks.length ? siteConfig.socialLinks : undefined,
    address: siteConfig.offices.map(postalAddress),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.name,
    url: absoluteUrl("/"),
    publisher: { "@id": organizationId },
    inLanguage: "en",
  };
}

export function localBusinessSchemas() {
  return siteConfig.offices.map((office) => ({
    "@type": "LocalBusiness",
    "@id": absoluteUrl(`/#office-${office.id}`),
    name: office.name,
    url: absoluteUrl("/"),
    image: absoluteUrl(siteConfig.logo),
    email: siteConfig.email,
    telephone: siteConfig.telephone,
    address: postalAddress(office),
    parentOrganization: { "@id": organizationId },
  }));
}

/** One page of the site, e.g. a product or service page. */
export function webPageSchema(page: { path: string; title: string; description: string }) {
  return {
    "@type": "WebPage",
    "@id": absoluteUrl(`${page.path}#webpage`),
    url: absoluteUrl(page.path),
    name: page.title,
    description: page.description,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
  };
}

/** Question-and-answer list, e.g. a page's FAQ section. */
/** A service EICE offers, e.g. one of the /services/<slug> pages. */
export function serviceSchema(service: { path: string; name: string; description: string }) {
  return {
    "@type": "Service",
    "@id": absoluteUrl(`${service.path}#service`),
    name: service.name,
    description: service.description,
    url: absoluteUrl(service.path),
    provider: { "@id": organizationId },
    areaServed: ["United States", "Europe", "Middle East", "Africa", "Asia"],
  };
}

export function faqPageSchema(path: string, faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    "@id": absoluteUrl(`${path}#faq`),
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** Breadcrumb trail, from the home page down to the current page. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Wraps several entities into one JSON-LD document. */
export function schemaGraph(...entities: object[]) {
  return { "@context": "https://schema.org", "@graph": entities };
}

function postalAddress(office: (typeof siteConfig.offices)[number]) {
  return {
    "@type": "PostalAddress",
    streetAddress: office.streetAddress,
    addressLocality: office.addressLocality,
    addressRegion: office.addressRegion,
    postalCode: office.postalCode,
    addressCountry: office.addressCountry,
  };
}
