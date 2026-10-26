import Image from "next/image";
import { ArrowRight } from "@/components/Icons/Icons";
import styles from "./ProductsMenu.module.css";

type Product = { name: string; description: string; icon: string };

const icon = (name: string) => `/assets/icons/features/${name}.png`;

const aiAutomation: Product[] = [
  { name: "EICE Voice", description: "AI voice-powered order management", icon: icon("microphone") },
  { name: "Ask EICE", description: "AI-powered knowledge search", icon: icon("document-idea") },
  { name: "EICE AIM", description: "AI-powered lead generation", icon: icon("team-settings") },
  { name: "EICE Catalyst", description: "Integrated AI engineering platform", icon: icon("ai-chip") },
];

const erpLogistics: Product[] = [
  { name: "EICE Rise", description: "Hospitality ERP platform", icon: icon("hospitality-bell") },
  { name: "EasyLogy", description: "Logistics management", icon: icon("delivery-truck-check") },
  { name: "EICE SmartFit", description: "Cargo management", icon: icon("shipping-container") },
  { name: "EICEOps", description: "Help desk management", icon: icon("timer") },
];

const securityCompliance: Product[] = [
  { name: "VeriLock", description: "MFA & access control", icon: icon("secure-lock") },
  { name: "InfraSight", description: "Infrastructure monitoring", icon: icon("monitor-analytics") },
];

const sync: Product[] = [
  { name: "iSyncdrive", description: "Enterprise cloud sync client", icon: icon("cloud-upload") },
  { name: "iSyncLite", description: "Lightweight sync tool", icon: icon("package-sync") },
];

const featuredPoints = [
  "Front desk & reservations",
  "POS & banquet operations",
  "Inventory & procurement",
  "Finance & reporting",
];

function ProductLink({ product }: { product: Product }) {
  return (
    <li>
      <a className={styles.item} href="#">
        <Image alt="" className={styles.icon} height={48} src={product.icon} width={48} />
        <span className={styles.text}>
          <span className={styles.name}>{product.name}</span>
          <span className={styles.description}>{product.description}</span>
        </span>
        <ArrowRight className={styles.arrow} />
      </a>
    </li>
  );
}

function Group({ label, products, className }: { label: string; products: Product[]; className?: string }) {
  return (
    <div className={className}>
      <p className={styles.label}>{label}</p>
      <ul className={styles.list}>
        {products.map((product) => (
          <ProductLink key={product.name} product={product} />
        ))}
      </ul>
    </div>
  );
}

export default function ProductsMenu({ className }: { className?: string }) {
  return (
    <div className={className ? `${styles.menu} ${className}` : styles.menu}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Our Products</p>
        <p className={styles.heading}>AI Software That Solves Real Business Problems</p>
        <p className={styles.introText}>
          Explore AI-powered products and business platforms built to simplify workflows, optimise operations, and
          solve industry-specific challenges.
        </p>
        <a className={styles.exploreAll} href="#products">
          Explore All Products
          <ArrowRight className={styles.exploreArrow} strokeWidth={2} />
        </a>
      </div>

      <div className={styles.catalog}>
        <div className={`${styles.row} ${styles.rowMain}`}>
          <Group className={styles.leftColumn} label="AI & Automation" products={aiAutomation} />
          <Group className={styles.rightColumn} label="ERP & Logistics" products={erpLogistics} />
        </div>
        <div className={`${styles.row} ${styles.rowSecurity}`}>
          <p className={styles.label}>Security & Compliance</p>
          <ul className={styles.pair}>
            {securityCompliance.map((product) => (
              <ProductLink key={product.name} product={product} />
            ))}
          </ul>
        </div>
        <div className={`${styles.row} ${styles.rowSync}`}>
          <p className={styles.label}>Sync</p>
          <ul className={styles.pair}>
            {sync.map((product) => (
              <ProductLink key={product.name} product={product} />
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.featured}>
        <p className={styles.featuredLabel}>Featured Product</p>
        <p className={styles.featuredName}>EICE Rise</p>
        <p className={styles.featuredText}>A complete hospitality management suite.</p>
        <ul className={styles.points}>
          {featuredPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <a className={styles.learnMore} href="#">
          Learn more
          <ArrowRight className={styles.learnMoreArrow} strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}
