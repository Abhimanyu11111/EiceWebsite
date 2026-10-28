import type { PageSeo } from "@/config/seo";
import { aiDevelopmentServices } from "./ai-development-services";
import { chatbotDevelopment } from "./chatbot-development";
import { aiAgentsAutomation } from "./ai-agents-automation";
import { aiEnabledEngineeringExcellenceCenter } from "./ai-enabled-engineering-excellence-center";
import { dataAnalytics } from "./data-analytics";
import { appDevelopment } from "./app-development";
import { webDevelopment } from "./web-development";
import { mobileDevelopment } from "./mobile-development";
import { uiUx } from "./ui-ux";
import { softwareTesting } from "./software-testing";
import { appConsulting } from "./app-consulting";
import { cloud } from "./cloud";
import { devops } from "./devops";
import { iot } from "./iot";
import { digitalTransformation } from "./digital-transformation";
import { rpaDevelopment } from "./rpa-development";
import { gis } from "./gis";
import type { ServicePage } from "./types";

/** Every /services/<slug> page, in the order of the homepage service clusters. */
export const servicePages: ServicePage[] = [
  aiDevelopmentServices,
  chatbotDevelopment,
  aiAgentsAutomation,
  aiEnabledEngineeringExcellenceCenter,
  dataAnalytics,
  appDevelopment,
  webDevelopment,
  mobileDevelopment,
  uiUx,
  softwareTesting,
  appConsulting,
  cloud,
  devops,
  iot,
  digitalTransformation,
  rpaDevelopment,
  gis,
];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

export const servicePath = (slug: string) => `/services/${slug}`;

/** Metadata and sitemap settings for a service page. */
export function servicePageSeo(page: ServicePage): PageSeo {
  return {
    path: servicePath(page.slug),
    title: page.seo.title,
    description: page.seo.description,
    keywords: page.seo.keywords,
    image: page.hero.image?.src,
    changeFrequency: "monthly",
    priority: 0.8,
  };
}
