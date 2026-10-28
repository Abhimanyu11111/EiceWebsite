import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowRight } from "@/components/Icons/Icons";
import OpenExpertButton from "@/components/TalkToExpert/OpenExpertButton";
import type { ServicePage } from "@/content/services/types";
import ServiceIcon from "./ServiceIcon";
import styles from "./ServiceDetail.module.css";

// Same on every service page.
const stats = [
  { value: "180+", label: "projects delivered" },
  { value: "60+", label: "clients" },
  { value: "10+", label: "countries" },
  { value: "16+", label: "years" },
];
const certifications = [
  ["CMMI", "Level 3"],
  ["ISO", "9001"],
  ["ISO", "27001"],
  ["ISO/IEC", "20000"],
];

function Heading({ id, eyebrow, title }: { id: string; eyebrow: string; title: string }) {
  return (
    <>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.title} id={id}>
        {title}
      </h2>
    </>
  );
}

function TalkButton() {
  return (
    <OpenExpertButton className={styles.button}>
      Talk to our team
      <ArrowRight className={styles.buttonArrow} strokeWidth={2.2} />
    </OpenExpertButton>
  );
}

/** The template every /services/<slug> page is built from. Measured from the "AI Development Services" design at 1440px. */
export default function ServiceDetail({ page }: { page: ServicePage }) {
  const { hero, overview, challenges, services, approach, steps, industries, regions, delivered, technology, cta } = page;

  return (
    <>
      <section aria-labelledby="service-title" className={styles.hero}>
        <div className={`${styles.wrap} ${styles.heroInner}`}>
          <div>
            <h1 className={styles.heroTitle} id="service-title">
              {hero.title[0]}
              <br />
              {hero.title[1]}
            </h1>
            <p className={styles.heroText}>{hero.description}</p>
            <TalkButton />
          </div>
          {hero.image ? (
            <Image
              alt={hero.image.alt}
              className={styles.heroImage}
              height={759}
              preload
              sizes="341px"
              src={hero.image.src}
              width={1023}
            />
          ) : (
            <div aria-hidden="true" className={`${styles.heroImage} ${styles.placeholder}`} />
          )}
        </div>
      </section>

      <section aria-label="EICE at a glance" className={styles.trust}>
        <div className={styles.wrap}>
          <div className={styles.trustCard}>
            <dl className={styles.stats}>
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className={styles.statValue}>{stat.value}</dt>
                  <dd className={styles.statLabel}>{stat.label}</dd>
                </div>
              ))}
            </dl>
            <span aria-hidden="true" className={styles.trustDivider} />
            <ul aria-label="Certifications" className={styles.certs}>
              {certifications.map(([name, level]) => (
                <li className={styles.cert} key={name + level}>
                  {name}
                  <br />
                  {level}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="overview-title" className={styles.overview}>
        <div className={styles.wrap}>
          <Heading eyebrow="Overview" id="overview-title" title={overview.title} />
          <div className={styles.overviewText}>
            {overview.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="challenges-title" className={styles.challenges}>
        <div className={styles.wrap}>
          <Heading eyebrow="Challenges" id="challenges-title" title="Is this you?" />
          <ul className={styles.challengeGrid}>
            {challenges.map((item) => (
              <li className={styles.challengeCard} key={item.title}>
                <ServiceIcon className={styles.icon} name={item.icon} />
                <div>
                  <h3 className={styles.challengeTitle}>{item.title}</h3>
                  <p className={styles.challengeText}>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="services-title" className={styles.services}>
        <div className={styles.wrap}>
          <Heading eyebrow="Our services" id="services-title" title={services.title} />
          <ul className={styles.serviceGrid}>
            {services.items.map((item) => (
              <li className={styles.serviceCard} key={item.title}>
                <ServiceIcon className={styles.icon} name={item.icon} />
                <div>
                  <h3 className={styles.serviceTitle}>{item.title}</h3>
                  <p className={styles.serviceText}>{item.text}</p>
                  <p className={styles.tags}>{item.tags.join(" · ")}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="approach-title" className={styles.approach}>
        <div className={styles.wrap}>
          <div className={styles.approachGrid}>
            <div>
              <Heading eyebrow="Our approach" id="approach-title" title={approach.title} />
              <div className={styles.approachText}>
                {approach.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <span aria-hidden="true" className={styles.approachLine} />
            <div className={styles.process}>
              <h3 className={styles.processTitle}>How we work</h3>
              <ol className={styles.steps}>
                {steps.map((step) => (
                  <li className={styles.step} key={step.title}>
                    <span aria-hidden="true" className={styles.stepDot} />
                    <div>
                      <h4 className={styles.stepTitle}>{step.title}</h4>
                      <p className={styles.stepText}>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className={styles.industries}>
            <Heading eyebrow="Industries" id="industries-title" title="Where this fits" />
            <ul className={styles.industryGrid} style={{ "--columns": industries.length } as CSSProperties}>
              {industries.map((item) => (
                <li className={styles.industry} key={item.title}>
                  <h3 className={styles.industryTitle}>{item.title}</h3>
                  <p className={styles.industryText}>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className={styles.regionsBand}>
        <section aria-labelledby="regions-title" className={styles.wrap}>
          <Heading eyebrow="Overview" id="regions-title" title={regions.title} />
          <p className={styles.regionsIntro}>{regions.intro}</p>
          <ul className={styles.regionGrid}>
            {regions.items.map((region) => (
              <li key={region.name}>
                <h3 className={styles.regionName}>{region.name}</h3>
                <p className={styles.regionText}>{region.text}</p>
              </li>
            ))}
          </ul>
          <p className={styles.regionsClosing}>{regions.closing}</p>
        </section>

        <section aria-labelledby="delivered-title" className={styles.wrap}>
          <div className={styles.delivered}>
            <p className={styles.deliveredEyebrow}>Delivered Globally</p>
            <h2 className={styles.deliveredTitle} id="delivered-title">
              {delivered.title}
            </h2>
            <p className={styles.deliveredText}>{delivered.text}</p>
          </div>
        </section>

        <section aria-labelledby="technology-title" className={`${styles.wrap} ${styles.technology}`}>
          <h2 className={styles.title} id="technology-title">
            {technology.title}
          </h2>
          <ul className={styles.techList}>
            {technology.rows.map((row) => (
              <li key={row.label}>
                <strong>{row.label}:</strong> {row.items}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section aria-labelledby="cta-title" className={styles.cta}>
        <div className={styles.wrap}>
          <h2 className={styles.ctaTitle} id="cta-title">
            {cta.title}
          </h2>
          <p className={styles.ctaText}>{cta.text}</p>
          <TalkButton />
        </div>
      </section>
    </>
  );
}
