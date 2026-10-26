import Image from "next/image";
import Container from "@/components/Container/Container";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Clients.module.css";

const clients = [
  { src: "/assets/logos/clients/halliburton.png", alt: "Halliburton", width: 136, height: 36 },
  { src: "/assets/logos/clients/tata.png", alt: "Tata", width: 97, height: 28 },
  { src: "/assets/logos/clients/pg.png", alt: "P&G", width: 57, height: 24 },
  { src: "/assets/logos/clients/norton-rose-fulbright.png", alt: "Norton Rose Fulbright", width: 137, height: 16 },
  { src: "/assets/logos/clients/slb.png", alt: "SLB", width: 61, height: 36 },
  { src: "/assets/logos/clients/iic.png", alt: "India International Centre", width: 150, height: 30 },
];

export default function Clients() {
  return (
    <section aria-labelledby="clients-title" className={styles.clients}>
      <Container>
        <Reveal>
          <h2 className={styles.title} id="clients-title">
            Trusted by global enterprises
          </h2>
          <ul className={styles.logos}>
            {clients.map((client) => (
              <li key={client.alt}>
                <Image alt={client.alt} height={client.height} src={client.src} width={client.width} />
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
