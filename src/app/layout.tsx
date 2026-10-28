import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import JsonLd from "@/components/JsonLd/JsonLd";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import TalkToExpert from "@/components/TalkToExpert/TalkToExpert";
import { pageSeo } from "@/config/seo";
import { siteConfig } from "@/config/site";
import { localBusinessSchemas, organizationSchema, schemaGraph, websiteSchema } from "@/lib/schema";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Site-wide defaults. Each page overrides these with buildMetadata().
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: `${siteConfig.name} | ${pageSeo.home.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: pageSeo.home.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <JsonLd data={schemaGraph(organizationSchema(), websiteSchema(), ...localBusinessSchemas())} />
        <SmoothScroll />
        {children}
        <TalkToExpert />
      </body>
    </html>
  );
}
