import Image from "next/image";
import Carousel from "@/components/Carousel/Carousel";
import Container from "@/components/Container/Container";
import { ArrowRight } from "@/components/Icons/Icons";
import Reveal from "@/components/Reveal/Reveal";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import styles from "./Products.module.css";

const products = [
  {
    name: "EICE Rise ERP",
    tagline: "Hospitality Management Suite",
    description: "Unify front desk, housekeeping, POS, banquet operations, inventory, and finance with an integrated ...",
    image: "/assets/images/products/eice-rise.png",
  },
  {
    name: "SmartFit",
    tagline: "Intelligent Load Optimization",
    description: "Maximize cargo space with smarter load planning, improve container utilization, and reduce wasted ...",
    image: "/assets/images/products/smartfit.png",
  },
  {
    name: "AskEICE",
    tagline: "The Knowledge Agent",
    description: "Get verified answers from your organization's documents through WhatsApp on mobile or ...",
    image: "/assets/images/products/askeice.png",
  },
  {
    name: "EICEAIM",
    tagline: "The Action Agent",
    description: "Automate lead generation, qualification, and follow-ups with AI-powered outreach and ...",
    image: "/assets/images/products/eiceaim.png",
  },
];

export default function Products() {
  return (
    <section aria-labelledby="products-title" className={styles.products} id="products">
      <Container>
        <SectionHeader
          action="Explore All Products"
          description={
            <>
              From intelligent automation to industry-specific platforms, EICE products help{" "}
              <br />
              businesses streamline workflows, improve efficiency, and solve real operational challenges.
            </>
          }
          eyebrow="Our Products"
          id="products-title"
          title="AI Products That Drive Business"
          variant="products"
        />
        <Carousel className={styles.grid}>
          {products.map((product, index) => (
            <Reveal delay={index * 90} key={product.name}>
              <article className={styles.card}>
                <div className={styles.body}>
                  <h3 className={styles.name}>{product.name}</h3>
                  <p className={styles.tagline}>{product.tagline}</p>
                  <p className={styles.description}>{product.description}</p>
                </div>
                <div className={styles.image}>
                  <Image alt={product.name} fill sizes="290px" src={product.image} />
                </div>
                <a className={styles.link} href="#">
                  Learn more
                  <ArrowRight className={styles.arrow} />
                </a>
              </article>
            </Reveal>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
