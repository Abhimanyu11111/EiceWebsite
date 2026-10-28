import Clients from "@/components/Clients/Clients";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Industries from "@/components/Industries/Industries";
import Metrics from "@/components/Metrics/Metrics";
import Products from "@/components/Products/Products";
import Services from "@/components/Services/Services";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import Videos from "@/components/Videos/Videos";
import JsonLd from "@/components/JsonLd/JsonLd";
import { pageSeo } from "@/config/seo";
import { schemaGraph, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const seo = pageSeo.home;

export const metadata = {
  ...buildMetadata(seo),
  // Home page shows "EICE | ..." instead of the usual "... | EICE" template.
  title: { absolute: `EICE | ${seo.title}` },
};

export default function Home() {
  return (
    <>
      <JsonLd data={schemaGraph(webPageSchema(seo))} />
      <SiteHeader />
      <main>
        <Hero />
        <Clients />
        <Products />
        <Services />
        <Industries />
        <Videos />
        <Metrics />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
