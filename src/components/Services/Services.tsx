import Image from "next/image";
import Carousel from "@/components/Carousel/Carousel";
import Container from "@/components/Container/Container";
import Reveal from "@/components/Reveal/Reveal";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import styles from "./Services.module.css";

const services = [
  {
    title: ["AI & Data", "Engineering"],
    description: "Turn raw data into working intelligence — models, pipelines, and analytics built for production, not prototypes.",
    icon: "/assets/icons/ai-brain.png",
    image: "/assets/images/service-ai-data.png",
  },
  {
    title: ["Digital & Application", "Engineering"],
    description: "Design and modernize the digital products your business runs on, from legacy systems to new builds.",
    icon: "/assets/icons/digitalocean.png",
    image: "/assets/images/service-digital-engineering.png",
  },
  {
    title: ["Cloud &", "Infrastructure"],
    description: "Architect secure, resilient cloud environments that scale with demand instead of breaking under it.",
    icon: "/assets/icons/cloud-server.png",
    image: "/assets/images/service-cloud-infrastructure.png",
  },
  {
    title: ["Enterprise", "Solutions"],
    description: "Connect fragmented systems into one coherent workflow across the business.",
    icon: "/assets/icons/cloud-network.png",
    image: "/assets/images/service-enterprise-solutions.png",
  },
];

export default function Services() {
  return (
    <section aria-labelledby="services-title" className={styles.services} id="services">
      <Container>
        <SectionHeader
          action="Explore Our Services"
          description="From AI and data to cloud and application engineering, we help enterprises solve complex challenges, modernize systems, and accelerate business growth."
          eyebrow="Our Services"
          id="services-title"
          title="Engineering for Business Transformation"
          variant="services"
        />
        <Carousel className={styles.grid}>
          {services.map((service, index) => (
            <Reveal delay={index * 90} key={service.title.join(" ")}>
              <article className={styles.card}>
                <div className={styles.head}>
                  <Image alt="" className={styles.icon} height={44} src={service.icon} width={44} />
                  <h3 className={styles.title}>
                    {service.title[0]}
                    <br />
                    {service.title[1]}
                  </h3>
                </div>
                <p className={styles.description}>{service.description}</p>
                <a className={styles.link} href="#">
                  Learn more
                  <Image alt="" height={22} src="/assets/icons/arrow-square-blue.png" width={22} />
                </a>
                <Image
                  alt={service.title.join(" ")}
                  className={styles.image}
                  height={152}
                  src={service.image}
                  width={228}
                />
              </article>
            </Reveal>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
