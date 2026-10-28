import type { ReactNode } from "react";
import Container from "@/components/Container/Container";
import ProductCard from "@/components/ProductCard/ProductCard";
import Reveal from "@/components/Reveal/Reveal";
import type { HubProduct } from "@/content/products-hub";
import styles from "./ProductGroup.module.css";

type Variant = "hospitality" | "logistics" | "enterprise" | "ai";

const cardVariant = {
  hospitality: "wide",
  logistics: "wide",
  enterprise: "compact",
  ai: "feature",
} as const;

/** One product family on the products hub: heading, intro and a row of product cards. */
export default function ProductGroup({
  id,
  title,
  description,
  products,
  variant,
}: {
  id: string;
  title: string;
  description: ReactNode;
  products: HubProduct[];
  variant: Variant;
}) {
  return (
    <section aria-labelledby={`${id}-title`} className={`${styles.group} ${styles[variant]}`} id={id}>
      <Container>
        <Reveal>
          <h2 className={styles.title} id={`${id}-title`}>
            {title}
          </h2>
          <p className={styles.description}>{description}</p>
        </Reveal>
        <ul className={styles.grid}>
          {products.map((product, index) => (
            <li key={product.name}>
              <Reveal className={styles.cell} delay={index * 80}>
                <ProductCard accentTitle={variant === "logistics"} product={product} variant={cardVariant[variant]} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
