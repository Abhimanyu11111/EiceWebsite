import type { ReactNode } from "react";
import Container from "@/components/Container/Container";
import { ArrowRight, CheckCircle } from "@/components/Icons/Icons";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Contact.module.css";

const homeTitle = (
  <>
    Let&apos;s Solve Your Next
    <br />
    Challenge.
  </>
);

const homeDescription =
  "Tell us what your business needs. We'll help you explore the right product or technology solution.";

/** Enquiry section. The home page uses the defaults; other pages pass their own copy. */
export default function Contact({
  title = homeTitle,
  description = homeDescription,
  points,
  variant,
}: {
  title?: ReactNode;
  description?: string;
  /** Short reassurances shown with a tick under the description. */
  points?: string[];
  variant?: "products";
}) {
  return (
    <section
      aria-labelledby="contact-title"
      className={variant ? `${styles.contact} ${styles[variant]}` : styles.contact}
      id="contact"
    >
      <Container className={styles.inner}>
        <Reveal>
          <p className={styles.eyebrow}>Contact</p>
          <h2 className={styles.title} id="contact-title">
            {title}
          </h2>
          <p className={styles.description}>{description}</p>
          {points?.length ? (
            <ul className={styles.points}>
              {points.map((point) => (
                <li key={point}>
                  <span className={styles.pointIcon}>
                    <CheckCircle className={styles.pointSvg} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
        </Reveal>
        <Reveal delay={120}>
          <form className={styles.form}>
            <label className={styles.field}>
              <span>Name*</span>
              <input name="name" placeholder="Enter name" required type="text" />
            </label>
            <label className={styles.field}>
              <span>Work email*</span>
              <input name="email" placeholder="Enter your email" required type="email" />
            </label>
            <label className={`${styles.field} ${styles.wide} ${styles.company}`}>
              <span>Company *</span>
              <input name="company" placeholder="Enter your company’s name" required type="text" />
            </label>
            <label className={`${styles.field} ${styles.wide} ${styles.requirements}`}>
              <span>Tell us about your requirements*</span>
              <textarea name="requirements" placeholder="Kindly put the details here..." required />
            </label>
            <button className={styles.submit} type="submit">
              Submit Enquiry
              <ArrowRight className={styles.arrow} />
            </button>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
