import { preload } from "react-dom";
import Container from "@/components/Container/Container";
import { ArrowRight } from "@/components/Icons/Icons";
import styles from "./Hero.module.css";

export default function Hero() {
  // The artwork is a CSS background, so tell the browser to fetch it early.
  preload("/assets/images/hero-bg.webp", { as: "image", fetchPriority: "high" });

  return (
    <section className={styles.hero}>
      <Container>
        <p className={styles.badge}>
          <span aria-hidden="true" className={styles.badgeDot} />
          AI . Engineering . Global enterprises
        </p>
        <h1 className={styles.title}>
          AI Engineered for{" "}
          <br />
          Global Enterprise
        </h1>
        <p className={styles.description}>
          AI-powered products and enterprise technology solutions that help businesses automate work, optimise
          operations, and scale with confidence.
        </p>
        <div className={styles.actions}>
          <a className={styles.primaryButton} href="#products">
            Explore Products
            <ArrowRight className={styles.arrow} strokeWidth={2.2} />
          </a>
          <a className={styles.outlineButton} href="#services">
            Explore Services
            <ArrowRight className={styles.arrow} strokeWidth={2.2} />
          </a>
        </div>
      </Container>
    </section>
  );
}
