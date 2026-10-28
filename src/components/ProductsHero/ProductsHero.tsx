import Image from "next/image";
import Container from "@/components/Container/Container";
import { ArrowRight } from "@/components/Icons/Icons";
import styles from "./ProductsHero.module.css";

// Four overlapping photo panels. Each panel shows a slice of a wider photo; `left`
// is where the photo starts inside its panel (measured from the design).
const panels = [
  { src: "/assets/images/products-hub/eice-rise.webp", alt: "Hotel receptionist checking in a guest", left: "-159.3%" },
  { src: "/assets/images/products-hub/hero-logistics.webp", alt: "Cargo truck at a container port", left: "-16.2%" },
  { src: "/assets/images/products-hub/hero-ai.webp", alt: "AI assistant working alongside an employee", left: "-156.6%" },
  { src: "/assets/images/products-hub/hero-it.webp", alt: "IT professional using enterprise software", left: "-33.9%" },
];

export default function ProductsHero() {
  return (
    <section aria-labelledby="products-hero-title" className={styles.hero}>
      <Container className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.title} id="products-hero-title">
            AI Driven Enterprise <br />
            Software.
          </h1>
          <p className={styles.description}>
            Intelligent solutions that streamline operations and solve real business challenges.
          </p>
          <a className={styles.button} href="#contact">
            Talk to our team
            <ArrowRight className={styles.arrow} strokeWidth={2.2} />
          </a>
        </div>
        <div className={styles.art}>
          {panels.map((panel, index) => (
            <div className={styles.panel} key={panel.src}>
              <Image
                alt={panel.alt}
                className={styles.photo}
                height={810}
                loading={index === 0 ? undefined : "eager"}
                preload={index === 0}
                sizes="(max-width: 700px) 300px, 537px"
                src={panel.src}
                style={{ left: panel.left }}
                width={1440}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
