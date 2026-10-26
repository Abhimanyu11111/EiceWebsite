import Image from "next/image";
import Container from "@/components/Container/Container";
import { ArrowRight, ChevronRight, PinIcon } from "@/components/Icons/Icons";
import FooterColumn from "./FooterColumn";
import styles from "./SiteFooter.module.css";

const socials = [
  { name: "YouTube", icon: "/assets/icons/social-youtube.png" },
  { name: "Facebook", icon: "/assets/icons/social-facebook.png" },
  { name: "X", icon: "/assets/icons/social-x.png" },
  { name: "Instagram", icon: "/assets/icons/social-instagram.png" },
  { name: "LinkedIn", icon: "/assets/icons/social-linkedin.png" },
];

const products = [
  { name: "AskEICE", tagline: "The Knowledge Agent" },
  { name: "EICEAIM", tagline: "The Action Agent" },
  { name: "SmartFit", tagline: "Intelligent Load Optimization" },
  { name: "EICE Rise ERP", tagline: "Hospitality Management Suite" },
];

const linkColumns = [
  {
    heading: "Services",
    className: styles.services,
    links: [
      "AI & Data Engineering",
      "Digital & Application Engineering",
      "Cloud & Infrastructure",
      "Business & Enterprise Solutions",
      "Managed Services",
    ],
    viewAll: "View all Services",
  },
  {
    heading: "Industries",
    className: styles.industries,
    links: ["Oil & Gas", "Hospitality", "Logistics", "Enterprise", "Legal"],
    viewAll: "View all Industries",
  },
  {
    heading: "Explore EICE",
    className: styles.explore,
    links: ["About Us", "Case Studies", "Blog & Insights", "Careers", "Contact Us"],
  },
];

const presence = [
  {
    title: "USA",
    lines: ["11011 Richmond Ave, Suite 715,", "Houston, TX 77042"],
    icon: "/assets/icons/flag-usa.png",
  },
  {
    title: "INDIA",
    lines: ["6th floor, Platina Heights, C-24,", "Sector 62, Noida, Uttar Pradesh 201301"],
    icon: "/assets/icons/flag-india.png",
  },
  {
    title: "Serving Clients",
    lines: ["Across North America, Asia,", "Middle East and Europe"],
    icon: "/assets/icons/globe-blue.png",
  },
];

const legalLinks = ["Privacy Policy", "Terms of Use", "Cookie Policy", "Sitemap"];

function ViewAll({ label }: { label: string }) {
  return (
    <a className={styles.viewAll} href="#">
      {label}
      <ArrowRight className={styles.viewAllArrow} strokeWidth={2.2} />
    </a>
  );
}

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.top}>
        <div className={styles.brand}>
          <Image alt="EICE" height={55} src="/assets/logos/eice-logo.png" width={151} />
          <p className={styles.about}>
            AI-powered products and engineering services to help global enterprises modernize, innovate and grow with
            confidence.
          </p>
          <ul className={styles.socials}>
            {socials.map((social) => (
              <li key={social.name}>
                <a aria-label={social.name} href="#">
                  <Image alt="" height={34} src={social.icon} width={34} />
                </a>
              </li>
            ))}
          </ul>
          <hr className={styles.rule} />
          <p className={styles.subscribeTitle}>Subscribe to our updates</p>
          <p className={styles.subscribeText}>
            Get the latest insights, product updates
            <br />
            and industry trends from EICE.
          </p>
          <form className={styles.subscribeForm}>
            <input aria-label="Email address" placeholder="Enter your email address" type="email" />
            <button aria-label="Subscribe" type="submit">
              <Image alt="" height={32} src="/assets/icons/arrow-circle-navy.png" width={32} />
            </button>
          </form>
        </div>

        <FooterColumn className={styles.products} heading="Products">
          <ul>
            {products.map((item) => (
              <li key={item.name}>
                <a className={styles.link} href="#">
                  <span>
                    <span className={styles.productName}>{item.name}</span>
                    <span className={styles.productTagline}>{item.tagline}</span>
                  </span>
                  <ChevronRight className={styles.chevron} />
                </a>
              </li>
            ))}
          </ul>
          <ViewAll label="View all products" />
        </FooterColumn>

        {linkColumns.map((column) => (
          <FooterColumn className={column.className} heading={column.heading} key={column.heading}>
            <ul>
              {column.links.map((link) => (
                <li key={link}>
                  <a className={styles.link} href="#">
                    <span>{link}</span>
                    <ChevronRight className={styles.chevron} />
                  </a>
                </li>
              ))}
            </ul>
            {column.viewAll ? <ViewAll label={column.viewAll} /> : null}
          </FooterColumn>
        ))}
      </Container>

      <div className={styles.presence}>
        <Container>
          <p className={styles.presenceTitle}>
            <PinIcon className={styles.pin} />
            Our Global Presence
          </p>
          <ul className={styles.presenceList}>
            {presence.map((place) => (
              <li className={styles.presenceItem} key={place.title}>
                <Image alt="" height={36} src={place.icon} width={36} />
                <div>
                  <p className={styles.presenceName}>{place.title}</p>
                  {place.lines.map((line) => (
                    <p className={styles.presenceLine} key={line}>
                      {line}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <div className={styles.copyright}>
        <Container className={styles.copyrightInner}>
          <p>© 2026 EICE Technology. All rights reserved.</p>
          <ul className={styles.legal}>
            {legalLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
