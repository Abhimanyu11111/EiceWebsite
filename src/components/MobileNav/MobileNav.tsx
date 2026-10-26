"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "@/components/Icons/Icons";
import styles from "./MobileNav.module.css";

const links = [
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Resources", href: "#videos" },
  { label: "About Us", href: "#" },
];

// Hamburger menu shown in place of the desktop nav on small screens.
export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className={styles.mobileNav}>
      <button
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className={`${styles.toggle} ${open ? styles.open : ""}`}
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>
      <nav aria-label="Mobile navigation" className={`${styles.panel} ${open ? styles.panelOpen : ""}`} id="mobile-menu">
        <ul>
          {links.map((link) => (
            <li key={link.label}>
              <a className={styles.link} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
                <ChevronRight className={styles.chevron} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
