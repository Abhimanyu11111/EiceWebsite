import Image from "next/image";
import Container from "@/components/Container/Container";
import { ChevronRight, CircleArrow } from "@/components/Icons/Icons";
import Reveal from "@/components/Reveal/Reveal";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import styles from "./Videos.module.css";

const videos = [
  {
    name: "EICEAIM",
    description: "Automate lead generation, qualification, and follow-ups to engage prospects more...",
    image: "/assets/images/video-eiceaim.png",
  },
  {
    name: "SmartFit",
    description: "Plan smarter 3D container loads to maximize capacity and reduce wasted shipping ...",
    image: "/assets/images/video-smartfit.png",
  },
  {
    name: "EICE Rise",
    description: "Unify front desk, housekeeping, POS, banquet operations, inventory, and finance ...",
    image: "/assets/images/video-eice-rise.png",
  },
];

export default function Videos() {
  return (
    <section aria-labelledby="videos-title" className={styles.videos} id="videos">
      <Container>
        <SectionHeader
          action="Watch all videos"
          description="Explore how EICE platforms solve real business challenges through intelligent automation, connected workflows, and practical technology."
          eyebrow="Videos & Demos"
          id="videos-title"
          title="See Our Products in Action"
          variant="videos"
        />
        <Reveal className={styles.layout}>
          <article className={styles.featured}>
            <a aria-label="Play AskEICE video" className={styles.featuredThumb} href="#">
              <Image alt="" fill sizes="616px" src="/assets/images/video-askeice-featured.png" />
              <Image alt="" className={styles.playLarge} height={64} src="/assets/icons/play-white-lg.png" width={64} />
              <span className={styles.duration}>2:19</span>
            </a>
            <div className={styles.featuredBody}>
              <p className={styles.featuredLabel}>Featured video</p>
              <h3 className={styles.featuredTitle}>AskEICE — Your Knowledge, One Conversation Away</h3>
              <p className={styles.featuredDescription}>
                Explore product demos and discover how EICE solutions help businesses simplify workflows, optimize
                operations, and achieve better outcomes.
              </p>
            </div>
          </article>

          <span aria-hidden="true" className={styles.divider} />

          <div className={styles.list}>
            <button aria-label="Previous videos" className={styles.scrollButton} type="button">
              <CircleArrow className={styles.scrollUp} direction="up" />
            </button>
            <ul className={styles.items}>
              {videos.map((video) => (
                <li key={video.name}>
                  <a className={styles.item} href="#">
                    <span className={styles.thumb}>
                      <Image alt="" fill sizes="123px" src={video.image} />
                      <Image
                        alt=""
                        className={styles.playSmall}
                        height={32}
                        src="/assets/icons/play-white-sm.png"
                        width={32}
                      />
                    </span>
                    <span className={styles.text}>
                      <span className={styles.name}>{video.name}</span>
                      <span className={styles.description}>{video.description}</span>
                    </span>
                    <ChevronRight className={styles.chevron} />
                  </a>
                </li>
              ))}
            </ul>
            <button aria-label="Next videos" className={styles.scrollButton} type="button">
              <CircleArrow className={styles.scrollDown} direction="down" />
            </button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
