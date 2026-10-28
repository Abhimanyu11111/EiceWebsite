"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { ArrowForward, ArrowRight, CheckIcon, CloseIcon, HeadsetIcon, PhoneIcon } from "@/components/Icons/Icons";
import { siteConfig } from "@/config/site";
import { OPEN_EXPERT_EVENT } from "./OpenExpertButton";
import styles from "./TalkToExpert.module.css";

const services = [
  "AI & Data Engineering",
  "Digital & Application Engineering",
  "Cloud & Infrastructure",
  "Business & Enterprise Solutions",
  "Managed Services",
  "Products",
  "Not sure yet",
];

type Step = "closed" | "form" | "thanks";

/** Contact options shown under the form and on the thank-you screen. */
function ContactOptions({ withArrow, onBookCall }: { withArrow?: boolean; onBookCall: () => void }) {
  return (
    <ul className={withArrow ? styles.optionList : styles.optionGrid}>
      <li>
        <a className={styles.option} href={siteConfig.whatsappUrl} rel="noopener noreferrer" target="_blank">
          <Image
            alt=""
            className={`${styles.optionIcon} ${styles.whatsapp}`}
            height={28}
            src="/assets/icons/whatsapp.png"
            width={28}
          />
          <span className={styles.optionText}>
            <span className={styles.optionTitle}>Chat on WhatsApp</span>
            <span className={styles.optionSub}>Get quick answers</span>
          </span>
          {withArrow ? <ArrowForward className={styles.optionArrow} /> : null}
        </a>
      </li>
      <li>
        <a className={styles.option} href={siteConfig.bookingUrl} onClick={onBookCall}>
          <PhoneIcon className={`${styles.optionIcon} ${styles.phone}`} />
          <span className={styles.optionText}>
            <span className={styles.optionTitle}>Book a Call</span>
            <span className={styles.optionSub}>Schedule a consultation</span>
          </span>
          {withArrow ? <ArrowForward className={styles.optionArrow} /> : null}
        </a>
      </li>
    </ul>
  );
}

/** Floating "Talk to an Expert" button with a glass enquiry panel. Shown on every page. */
export default function TalkToExpert() {
  const [step, setStep] = useState<Step>("closed");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const panelId = `${id}-panel`;
  const titleId = `${id}-title`;

  const close = () => {
    setStep("closed");
    toggleRef.current?.focus();
  };

  // Page buttons (OpenExpertButton) open the panel too.
  useEffect(() => {
    const open = () => setStep("form");
    window.addEventListener(OPEN_EXPERT_EVENT, open);
    return () => window.removeEventListener(OPEN_EXPERT_EVENT, open);
  }, []);

  // Esc closes the panel; opening moves focus into it.
  useEffect(() => {
    if (step === "closed") return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setStep("closed");
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLElement>("input, h2[tabindex]")?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO (backend): send the enquiry to the CRM / email API before showing the thank-you screen.
    setStep("thanks");
  };

  const isOpen = step !== "closed";

  return (
    <div className={styles.widget}>
      {isOpen ? (
        <div
          aria-labelledby={titleId}
          className={styles.panel}
          data-lenis-prevent
          id={panelId}
          ref={panelRef}
          role="dialog"
        >
          <button aria-label="Close" className={styles.close} onClick={close} type="button">
            <CloseIcon className={styles.closeIcon} />
          </button>

          {step === "form" ? (
            <>
              <h2 className={styles.title} id={titleId}>
                Talk to an Expert
              </h2>
              <p className={styles.subtitle}>Tell us a few details and our team will get in touch with you.</p>
              <form className={styles.form} onSubmit={onSubmit}>
                <label className={styles.field}>
                  <span>Name *</span>
                  <input autoComplete="name" name="name" placeholder="Enter your name" required type="text" />
                </label>
                <label className={styles.field}>
                  <span>Work Email *</span>
                  <input autoComplete="email" name="email" placeholder="Enter your work email" required type="email" />
                </label>
                <label className={styles.field}>
                  <span>Company Name *</span>
                  <input
                    autoComplete="organization"
                    name="company"
                    placeholder="Enter your company name"
                    required
                    type="text"
                  />
                </label>
                <label className={styles.field}>
                  <span>Service of Interest</span>
                  <select defaultValue="" name="service">
                    <option disabled value="">
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service}>{service}</option>
                    ))}
                  </select>
                </label>
                <label className={styles.field}>
                  <span>Tell us about your requirements *</span>
                  <textarea name="requirements" placeholder="Put the details here..." required />
                </label>
                <button className={styles.submit} type="submit">
                  Submit Enquiry
                  <ArrowRight className={styles.submitArrow} strokeWidth={2.2} />
                </button>
              </form>
              <p className={styles.divider}>or choose another way to connect</p>
              <ContactOptions onBookCall={() => setStep("closed")} />
            </>
          ) : (
            <div className={styles.thanks}>
              <span className={styles.tick}>
                <CheckIcon className={styles.tickIcon} />
              </span>
              <h2 className={styles.thanksTitle} id={titleId} tabIndex={-1}>
                Thank You!
              </h2>
              <p className={styles.thanksText} role="status">
                Your enquiry has been submitted successfully.
              </p>
              <p className={styles.thanksNote}>
                Our team will get back to you shortly.
                <br />
                In the meantime, you can also:
              </p>
              <hr className={styles.rule} />
              <ContactOptions onBookCall={() => setStep("closed")} withArrow />
            </div>
          )}
        </div>
      ) : null}

      <button
        aria-controls={isOpen ? panelId : undefined}
        aria-expanded={isOpen}
        className={styles.toggle}
        onClick={() => (isOpen ? close() : setStep("form"))}
        ref={toggleRef}
        type="button"
      >
        <HeadsetIcon className={styles.toggleIcon} />
        Talk to an Expert
      </button>
    </div>
  );
}
