import type { ReactNode } from "react";
import { ArrowRight } from "@/components/Icons/Icons";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./SectionHeader.module.css";

type Variant = "products" | "services" | "industries" | "videos";

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
  description: ReactNode;
  action: string;
  variant: Variant;
}) {
  return (
    <Reveal className={`${styles.header} ${styles[variant]}`}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.title} id={id}>
        {title}
      </h2>
      <div className={styles.row}>
        <p className={styles.description}>{description}</p>
        <a className={styles.button} href="#">
          {action}
          <ArrowRight className={styles.arrow} />
        </a>
      </div>
    </Reveal>
  );
}
