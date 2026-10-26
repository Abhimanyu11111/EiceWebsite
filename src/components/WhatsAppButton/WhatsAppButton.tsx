import Image from "next/image";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  return (
    <a aria-label="WhatsApp us" className={styles.whatsapp} href="#contact">
      <Image alt="" height={60} src="/assets/icons/whatsapp.png" width={60} />
      <span className={styles.bubble}>WhatsApp us</span>
    </a>
  );
}
