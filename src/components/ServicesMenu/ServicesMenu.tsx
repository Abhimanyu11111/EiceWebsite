import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons/Icons";
import { servicePath } from "@/content/services";
import styles from "./ServicesMenu.module.css";

type Service = { name: string; slug: string; description: string };
type Group = { label: string; services: Service[] };

// One icon per service, named after the page slug.
const icon = (slug: string) => `/assets/icons/services/menu/${slug}.png`;

// The four homepage service clusters. The first two sit side by side; the rest scroll below.
const aiData: Group = {
  label: "AI & Data Engineering",
  services: [
    {
      name: "AI Development Services",
      slug: "ai-development-services",
      description: "Generative AI, machine learning and enterprise AI solutions",
    },
    {
      name: "Chatbot Development",
      slug: "chatbot-development",
      description: "Chatbots for web, WhatsApp and voice, with human handoff",
    },
    {
      name: "AI Agents & Automation",
      slug: "ai-agents-automation",
      description: "Autonomous agents and workflow automation",
    },
    {
      name: "AI-Enabled Engineering Excellence Center",
      slug: "ai-enabled-engineering-excellence-center",
      description: "AI-assisted engineering and delivery",
    },
    { name: "Data Analytics", slug: "data-analytics", description: "Turn business data into actionable insights" },
  ],
};

const digitalApplication: Group = {
  label: "Digital & Application Engineering",
  services: [
    { name: "App Development", slug: "app-development", description: "Custom applications and SaaS products" },
    { name: "Web Development", slug: "web-development", description: "Responsive websites and web platforms" },
    { name: "Mobile Development", slug: "mobile-development", description: "Mobile apps for business needs" },
    { name: "UI/UX Consulting", slug: "ui-ux", description: "Research-led, user-centred digital experiences" },
    { name: "Software Testing", slug: "software-testing", description: "Quality assurance and software reliability" },
    { name: "App Consulting", slug: "app-consulting", description: "Application strategy and technical guidance" },
  ],
};

const lowerGroups: Group[] = [
  {
    label: "Cloud & Infrastructure",
    services: [
      { name: "Cloud Services", slug: "cloud", description: "Cloud adoption, migration and management" },
      { name: "DevOps", slug: "devops", description: "CI/CD, automation and delivery optimisation" },
      { name: "IoT Solutions", slug: "iot", description: "Sensors and SCADA systems connected to alerts and decisions" },
    ],
  },
  {
    label: "Enterprise Solutions",
    services: [
      {
        name: "Digital Transformation",
        slug: "digital-transformation",
        description: "Modernise processes, systems and operations",
      },
      { name: "RPA Development", slug: "rpa-development", description: "Automate repetitive, rules-based tasks" },
      { name: "GIS Solutions", slug: "gis", description: "Geospatial data, mapping and location intelligence" },
    ],
  },
];

function ServiceLink({ service }: { service: Service }) {
  return (
    <li>
      <Link className={styles.item} href={servicePath(service.slug)}>
        <Image alt="" className={styles.icon} height={48} src={icon(service.slug)} width={48} />
        <span className={styles.text}>
          <span className={styles.name}>{service.name}</span>
          <span className={styles.description}>{service.description}</span>
        </span>
        <ArrowRight className={styles.arrow} />
      </Link>
    </li>
  );
}

function Column({ group, className }: { group: Group; className: string }) {
  return (
    <div className={className}>
      <p className={styles.label}>{group.label}</p>
      <ul className={styles.list}>
        {group.services.map((service) => (
          <ServiceLink key={service.slug} service={service} />
        ))}
      </ul>
    </div>
  );
}

/** Mega menu under "Services". The service list scrolls inside the menu. */
export default function ServicesMenu() {
  return (
    <div className={styles.menu}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Our Services</p>
        <p className={styles.heading}>Engineering Solutions for Real Business Needs</p>
        <p className={styles.introText}>
          From AI and application development to cloud infrastructure and enterprise transformation, we help businesses
          build, connect, and scale technology.
        </p>
        <Link className={styles.exploreAll} href="/#services">
          Explore All Services
          <ArrowRight className={styles.exploreArrow} strokeWidth={2} />
        </Link>
      </div>

      {/* data-lenis-prevent: the mouse wheel scrolls this list, not the page behind it. */}
      <div className={styles.catalog} data-lenis-prevent>
        <div className={`${styles.row} ${styles.rowMain}`}>
          <Column className={styles.leftColumn} group={aiData} />
          <Column className={styles.rightColumn} group={digitalApplication} />
        </div>
        {lowerGroups.map((group) => (
          <div className={styles.row} key={group.label}>
            <p className={styles.label}>{group.label}</p>
            <ul className={styles.grid}>
              {group.services.map((service) => (
                <ServiceLink key={service.slug} service={service} />
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.featured}>
        <p className={styles.featuredLabel}>Featured Service</p>
        <p className={styles.featuredName}>AI Development Services</p>
        <p className={styles.featuredText}>
          Move beyond AI prototypes with solutions designed around your data, workflows and production requirements.
        </p>
        <Link className={styles.featuredButton} href={servicePath("ai-development-services")}>
          Explore Service
          <ArrowRight className={styles.featuredArrow} strokeWidth={2} />
        </Link>
        <Image
          alt=""
          className={styles.featuredImage}
          height={759}
          sizes="194px"
          src="/assets/images/services/ai-development-hero.webp"
          width={1023}
        />
      </div>
    </div>
  );
}
