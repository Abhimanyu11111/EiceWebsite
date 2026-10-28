import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd/JsonLd";
import ServiceDetail from "@/components/ServiceDetail/ServiceDetail";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import { getServicePage, servicePageSeo, servicePages } from "@/content/services";
import { breadcrumbSchema, schemaGraph, serviceSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">) {
  const page = getServicePage((await params).slug);
  return page ? buildMetadata(servicePageSeo(page)) : {};
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const page = getServicePage((await params).slug);
  if (!page) notFound();

  const seo = servicePageSeo(page);

  return (
    <>
      <JsonLd
        data={schemaGraph(
          webPageSchema(seo),
          serviceSchema({ path: seo.path, name: page.name, description: seo.description }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: page.name, path: seo.path },
          ]),
        )}
      />
      <SiteHeader />
      <main>
        <ServiceDetail page={page} />
      </main>
      <SiteFooter />
    </>
  );
}
