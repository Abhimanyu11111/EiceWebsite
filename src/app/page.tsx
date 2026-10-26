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
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";

export default function Home() {
  return (
    <>
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
      <WhatsAppButton />
    </>
  );
}
