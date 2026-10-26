import Image from "next/image";
import Carousel from "@/components/Carousel/Carousel";
import Container from "@/components/Container/Container";
import { ArrowRight } from "@/components/Icons/Icons";
import Reveal from "@/components/Reveal/Reveal";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import styles from "./Industries.module.css";

const industries = [
  {
    name: "Oil & Gas",
    description: "Optimize operations, strengthen safety, and improve asset performance.",
    image: "/assets/images/industry-oil-gas.png",
  },
  {
    name: "Hospitality",
    description: "Streamline hotel and club operations with intelligent hospitality solutions.",
    image: "/assets/images/industry-hospitality.png",
  },
  {
    name: "Logistics",
    description: "Improve supply chain visibility, efficiency, and operational control.",
    image: "/assets/images/industry-logistics.png",
  },
  {
    name: "Enterprise",
    description: "Modernize business operations with integrated, scalable technology...",
    image: "/assets/images/industry-corporate.png",
  },
  {
    name: "Legal",
    description: "Simplify legal workflows, automate documentation, and improve case...",
    image: "/assets/images/industry-legal.png",
  },
];

export default function Industries() {
  return (
    <section aria-labelledby="industries-title" className={styles.industries} id="industries">
      <Container>
        <SectionHeader
          action="Explore All Industries"
          description="Tailored products and technology solutions to address the unique challenges of every industry."
          eyebrow="Industries"
          id="industries-title"
          title="Industry Depth, Applied Globally."
          variant="industries"
        />
        <Carousel className={styles.grid}>
          {industries.map((industry, index) => (
            <Reveal delay={index * 80} key={industry.name}>
              <article className={styles.card}>
                <div className={styles.image}>
                  <Image alt={industry.name} fill sizes="220px" src={industry.image} />
                </div>
                <div className={styles.body}>
                  <h3 className={styles.name}>{industry.name}</h3>
                  <p className={styles.description}>{industry.description}</p>
                  <a className={styles.link} href="#">
                    Explore
                    <ArrowRight className={styles.arrow} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
