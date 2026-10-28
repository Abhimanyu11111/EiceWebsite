"use client";

import type { ReactNode } from "react";

/** Event the floating Talk to an Expert widget listens for. */
export const OPEN_EXPERT_EVENT = "eice:open-expert";

/** A page button that opens the Talk to an Expert enquiry panel. */
export default function OpenExpertButton({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <button
      aria-haspopup="dialog"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_EXPERT_EVENT))}
      type="button"
    >
      {children}
    </button>
  );
}
