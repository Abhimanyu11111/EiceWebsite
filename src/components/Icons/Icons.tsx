type IconProps = { className?: string };

export function ChevronDown({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 13 7" fill="none">
      <path d="M1 1l5.5 5L12 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronRight({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 7 13" fill="none">
      <path d="M1 1l5 5.5L1 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRight({ className, strokeWidth = 1.8 }: IconProps & { strokeWidth?: number }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 17 16" fill="none">
      <path
        d="M1 8h15M9 1l7 7-7 7"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CircleArrow({ className, direction }: IconProps & { direction: "up" | "down" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="10.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d={direction === "up" ? "M11 16V6.5M7 10.5l4-4 4 4" : "M11 6v9.5M7 11.5l4 4 4-4"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 16 20" fill="none">
      <path
        d="M8 0C3.6 0 0 3.5 0 7.9 0 13.6 8 20 8 20s8-6.4 8-12.1C16 3.5 12.4 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
        fill="currentColor"
      />
    </svg>
  );
}
