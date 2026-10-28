import Contact from "@/components/Contact/Contact";
import EngineeringBanner from "@/components/EngineeringBanner/EngineeringBanner";
import Faq from "@/components/Faq/Faq";
import IndustryFit from "@/components/IndustryFit/IndustryFit";
import JsonLd from "@/components/JsonLd/JsonLd";
import ProductGroup from "@/components/ProductGroup/ProductGroup";
import ProductsHero from "@/components/ProductsHero/ProductsHero";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import { pageSeo } from "@/config/seo";
import {
  aiProducts,
  enterpriseProducts,
  hospitalityProducts,
  logisticsProducts,
  productFaqs,
} from "@/content/products-hub";
import { breadcrumbSchema, faqPageSchema, schemaGraph, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const seo = pageSeo.products;

export const metadata = buildMetadata(seo);

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={schemaGraph(
          webPageSchema(seo),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: seo.path },
          ]),
          faqPageSchema(seo.path, productFaqs),
        )}
      />
      <SiteHeader />
      <main>
        <ProductsHero />
        <IndustryFit />
        <ProductGroup
          description="Hospitality software for hotels, resorts and clubs that want the front desk, dining and back office in one place."
          id="hospitality"
          products={hospitalityProducts}
          title="Hospitality"
          variant="hospitality"
        />
        <ProductGroup
          description="Logistics software for two different problems: knowing where your vehicles are, and fitting cargo into a container the right way."
          id="logistics"
          products={logisticsProducts}
          title="Logistics"
          variant="logistics"
        />
        <ProductGroup
          description="The everyday IT stack, split into five products: files, backups, logins, monitoring and the help desk. These enterprise software products are separate on purpose, so you can adopt one without the rest. Together they make up our IT management and security software."
          id="enterprise-it"
          products={enterpriseProducts}
          title="Enterprise IT & Security"
          variant="enterprise"
        />
        <ProductGroup
          description={
            <>
              <strong>Four products with AI at the core:</strong> a knowledge agent, an action agent, a voice ordering
              platform and an engineering platform. AskEICE and EICE AIM are our enterprise AI agents, one for answers and
              one for outreach. If you&apos;d rather have something built around your own data, that&apos;s our AI
              development services.
            </>
          }
          id="ai-automation"
          products={aiProducts}
          title="AI & Automation"
          variant="ai"
        />
        <EngineeringBanner />
        <Faq eyebrow="Got questions?" faqs={productFaqs} title="Questions about our enterprise software products" />
        <Contact
          description="If you're comparing enterprise software products and aren't sure which one fits, tell us what your team is trying to fix. We'll point you to the right product, or scope something around your workflow if none of them does."
          points={["Direct conversation with senior solution architects", "Rapid feasibility analysis within 48 hours"]}
          title={
            <>
              Have a business <br />
              problem to solve? <br />
              Let’s talk.
            </>
          }
          variant="products"
        />
      </main>
      <SiteFooter />
    </>
  );
}
