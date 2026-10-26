import Image from "next/image";
import Container from "@/components/Container/Container";
import { ArrowRight } from "@/components/Icons/Icons";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div aria-hidden="true" className={styles.imageFrame}>
        <Image
          alt=""
          className={styles.image}
          fill
          priority
          quality={95}
          sizes="(max-width: 900px) 1600px, (max-width: 1440px) 1437px, min(100vw, 1655px)"
          src="/assets/images/hero-globe.png"
        />
      </div>
      <Container className={styles.content}>
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
