import Image from "next/image";
import { ArrowForward, ArrowRight } from "@/components/Icons/Icons";
import type { HubProduct } from "@/content/products-hub";
import styles from "./ProductCard.module.css";

/**
 * Product card used on the products hub.
 * - "wide":    Hospitality and Logistics (short description, "Explore" link)
 * - "compact": Enterprise IT & Security (narrow card, 14px description)
 * - "feature": AI & Automation ("Learn more" footer under a divider)
 */
type Variant = "wide" | "compact" | "feature";

const imageSizes: Record<Variant, string> = {
  wide: "(max-width: 1000px) 100vw, 968px",
  compact: "(max-width: 600px) 100vw, (max-width: 1100px) 33vw, 224px",
  feature: "(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 290px",
};

export default function ProductCard({
  product,
  variant,
  accentTitle = false,
}: {
  product: HubProduct;
  variant: Variant;
  /** Navy title, as on the Logistics cards. */
  accentTitle?: boolean;
}) {
  const isFeature = variant === "feature";

  return (
    <article className={`${styles.card} ${styles[variant]}`}>
      <div className={styles.media}>
        <Image
          alt=""
          className={styles.image}
          fill
          sizes={imageSizes[variant]}
          src={product.image}
          style={product.imagePosition ? { objectPosition: product.imagePosition } : undefined}
        />
      </div>
      <div className={styles.body}>
        <h3 className={accentTitle ? `${styles.name} ${styles.accent}` : styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        {isFeature ? null : (
          <a className={styles.link} href={product.href}>
            Explore<span className={styles.srOnly}> {product.name}</span>
            <ArrowForward className={styles.linkArrow} />
          </a>
        )}
      </div>
      {isFeature ? (
        <div className={styles.footer}>
          <a className={styles.link} href={product.href}>
            Learn more<span className={styles.srOnly}> about {product.name}</span>
            <ArrowRight className={styles.footerArrow} strokeWidth={2} />
          </a>
        </div>
      ) : null}
    </article>
  );
}
