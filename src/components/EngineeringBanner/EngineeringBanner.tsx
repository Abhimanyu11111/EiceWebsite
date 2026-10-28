import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container/Container";
import { ArrowRight } from "@/components/Icons/Icons";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./EngineeringBanner.module.css";

/** Dark banner linking the products to the engineering services. */
export default function EngineeringBanner() {
  return (
    <section aria-labelledby="engineering-lineage-title" className={styles.section}>
      <Container>
        <Reveal className={styles.banner}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>Engineering lineage</p>
            <h2 className={styles.title} id="engineering-lineage-title">
              Built by the team that <br />
              delivers the projects
            </h2>
            <p className={styles.description}>
              Our enterprise software products come from the same engineering team that delivers our enterprise projects,
              under the same CMMI Level 3 and ISO-certified processes. If you need more than a product off the shelf, our
              services cover the integration and custom work around it.
            </p>
            <Link className={styles.link} href="/services">
              Explore Engineering Services
              <ArrowRight className={styles.arrow} strokeWidth={2} />
            </Link>
          </div>
          <div className={styles.media}>
            <Image
              alt="EICE engineers reviewing a delivery pipeline together"
              className={styles.image}
              fill
              sizes="(max-width: 900px) 100vw, 454px"
              src="/assets/images/products-hub/engineering-team.webp"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
