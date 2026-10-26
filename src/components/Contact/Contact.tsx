import Container from "@/components/Container/Container";
import { ArrowRight } from "@/components/Icons/Icons";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section aria-labelledby="contact-title" className={styles.contact} id="contact">
      <Container className={styles.inner}>
        <Reveal>
          <p className={styles.eyebrow}>Contact</p>
          <h2 className={styles.title} id="contact-title">
            Let&apos;s Solve Your Next
            <br />
            Challenge.
          </h2>
          <p className={styles.description}>
            Tell us what your business needs. We&apos;ll help you explore the right product or technology solution.
          </p>
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
