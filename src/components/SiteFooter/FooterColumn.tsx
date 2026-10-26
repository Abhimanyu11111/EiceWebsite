"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "@/components/Icons/Icons";
import styles from "./SiteFooter.module.css";

// A footer link column. On phones the heading toggles the list (accordion); on larger screens it is always open.
export default function FooterColumn({
  children,
  className,
  heading,
}: {
  children: ReactNode;
  className: string;
  heading: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.column} ${className} ${open ? styles.columnOpen : ""}`}>
      <button aria-expanded={open} className={styles.heading} onClick={() => setOpen((value) => !value)} type="button">
        {heading}
        <ChevronDown className={styles.headingChevron} />
      </button>
      {children}
    </div>
  );
}
