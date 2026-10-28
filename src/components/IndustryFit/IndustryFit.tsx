import Container from "@/components/Container/Container";
import { ArrowForward, BuildingIcon, HotelIcon, TruckIcon } from "@/components/Icons/Icons";
import Reveal from "@/components/Reveal/Reveal";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import styles from "./IndustryFit.module.css";

const sectors = [
  { name: "Hospitality", products: "EICE Rise, EICE Voice", href: "#hospitality", Icon: HotelIcon },
  { name: "Logistics", products: "Easylogy, EICE SmartFit", href: "#logistics", Icon: TruckIcon },
  { name: "Enterprise IT & Security", products: "iSync, InfraSight, Ops", href: "#enterprise-it", Icon: BuildingIcon },
];

export default function IndustryFit() {
  return (
    <section aria-labelledby="industry-fit-title" className={styles.industryFit} id="industry-fit">
      <Container>
        <SectionHeader
          description="Most of our enterprise software products map to an industry. Hotels and clubs would look at EICE Rise, logistics teams at Easylogy and EICE SmartFit, and IT teams at the enterprise range."
          eyebrow="Sector alignment"
          id="industry-fit-title"
          title="Industry fit"
          variant="industryFit"
        />
        <ul className={styles.grid}>
          {sectors.map(({ name, products, href, Icon }, index) => (
            <li key={name}>
              <Reveal delay={index * 80}>
                <a className={styles.card} href={href}>
                  <div className={styles.icon}>
                    <Icon className={styles.iconSvg} />
                  </div>
                  <div className={styles.text}>
                    <h3 className={styles.name}>{name}</h3>
                    <p className={styles.products}>{products}</p>
                  </div>
                  <ArrowForward className={styles.arrow} />
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
