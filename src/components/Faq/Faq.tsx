import Container from "@/components/Container/Container";
import Reveal from "@/components/Reveal/Reveal";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import styles from "./Faq.module.css";

/** Question list. Native <details> elements: keyboard friendly and no JavaScript needed. */
export default function Faq({
  eyebrow,
  title,
  faqs,
}: {
  eyebrow: string;
  title: string;
  faqs: { question: string; answer: string }[];
}) {
  return (
    <section aria-labelledby="faq-title" className={styles.faq} id="faq">
      <Container>
        <div className={styles.inner}>
          <SectionHeader eyebrow={eyebrow} id="faq-title" title={title} variant="faq" />
          <Reveal className={styles.list}>
            {faqs.map((faq) => (
              <details className={styles.item} key={faq.question} name="faq">
                <summary className={styles.question}>
                  <h3 className={styles.questionText}>{faq.question}</h3>
                  <span aria-hidden="true" className={styles.icon} />
                </summary>
                <p className={styles.answer}>{faq.answer}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
