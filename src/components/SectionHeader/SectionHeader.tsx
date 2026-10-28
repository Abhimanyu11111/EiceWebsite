import type { ReactNode } from "react";
import { ArrowRight } from "@/components/Icons/Icons";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./SectionHeader.module.css";

type Variant = "products" | "services" | "industries" | "industryFit" | "videos" | "faq";

export default function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  action,
  variant,
}: {
  id: string;
  eyebrow: string;
  title: string;
  /** Leave out for sections with a heading only. */
  description?: ReactNode;
  /** Button label. Leave out for sections without a button. */
  action?: string;
  variant: Variant;
}) {
  return (
    <Reveal className={`${styles.header} ${styles[variant]}`}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.title} id={id}>
        {title}
      </h2>
      {description || action ? (
        <div className={styles.row}>
          {description ? <p className={styles.description}>{description}</p> : null}
          {action ? (
            <a className={styles.button} href="#">
              {action}
              <ArrowRight className={styles.arrow} />
            </a>
          ) : null}
        </div>
      ) : null}
    </Reveal>
  );
}
