import Image from "next/image";
import Container from "@/components/Container/Container";
import CountUp from "@/components/CountUp/CountUp";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Metrics.module.css";

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "16+", label: "Years of Experience" },
  { value: "98%", label: "Client Retention" },
  { value: "60+", label: "Global Clients" },
];

export default function Metrics() {
  return (
    <section className={styles.metrics}>
      <Image alt="" className={styles.background} fill sizes="100vw" src="/assets/images/blue-gradient-bg.png" />
      <Container className={styles.inner}>
        <Reveal className={styles.main}>
          <h2 className={styles.title}>Proven Experience. Measurable Impact.</h2>
          <p className={styles.description}>
            Over a decade of engineering experience, successful project delivery, and trusted partnerships across
            industries and geographies.
          </p>
          <dl className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className={styles.value}>
                  <CountUp value={stat.value} />
                </dt>
                <dd className={styles.label}>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
        <Reveal className={styles.partnerships} delay={150}>
          <Image alt="" height={60} src="/assets/icons/globe-white.png" width={60} />
          <div>
            <p className={styles.partnershipsTitle}>
              Technology{" "}
              <br />
              partnerships
            </p>
            <p className={styles.partnershipsText}>for a smarter, more connected world</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
