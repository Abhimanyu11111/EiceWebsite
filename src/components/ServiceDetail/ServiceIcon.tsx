import Image from "next/image";
import type { ServiceIconName } from "@/content/services/types";

// White glyphs from the design, drawn on a 20 x 20 grid.
const paths: Record<Exclude<ServiceIconName, "gear">, React.ReactNode> = {
  arrowUpRight: <path d="M4.5 15.5L14 6M8 5.5h6.5V12" fill="none" stroke="currentColor" strokeWidth="2.4" />,
  rows: (
    <path
      d="M3.4 3.4h13.2v13.2H3.4zM3.4 6.7h13.2M3.4 10h13.2M3.4 13.3h13.2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
    />
  ),
  columns: (
    <path
      d="M3.4 3.4h13.2v13.2H3.4zM6.7 3.4v13.2M10 3.4v13.2M13.3 3.4v13.2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
    />
  ),
  sparkle: <path d="M10 1.5C10.6 6.6 13.4 9.4 18.5 10 13.4 10.6 10.6 13.4 10 18.5 9.4 13.4 6.6 10.6 1.5 10 6.6 9.4 9.4 6.6 10 1.5z" />,
  target: (
    <g fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="10" cy="10" r="7.3" />
      <circle cx="10" cy="10" r="4.6" />
    </g>
  ),
  waves: (
    <path
      d="M4.5 6c1.8-1.8 3.7 1.6 5.5 0s3.7 1.6 5.5 0M4.5 10c1.8-1.8 3.7 1.6 5.5 0s3.7 1.6 5.5 0M4.5 14c1.8-1.8 3.7 1.6 5.5 0s3.7 1.6 5.5 0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  ),
  squareDot: (
    <>
      <path d="M3.8 3.8h12.4v12.4H3.8z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.6 7.6h4.8v4.8H7.6z" />
    </>
  ),
  halfCircle: <path d="M13 2.5v15a7.5 7.5 0 0 1 0-15z" />,
};

/** The white glyph inside a card's navy square. Nothing is drawn when no icon is set yet. */
export default function ServiceIcon({ name, className }: { name?: ServiceIconName; className: string }) {
  if (!name) return <span aria-hidden="true" className={className} />;

  return (
    <span aria-hidden="true" className={className}>
      {name === "gear" ? (
        <Image alt="" height={20} src="/assets/icons/services/gear.png" width={20} />
      ) : (
        <svg fill="currentColor" height="20" viewBox="0 0 20 20" width="20">
          {paths[name]}
        </svg>
      )}
    </span>
  );
}
