"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./Carousel.module.css";

const AUTO_DELAY = 3500;
const RESUME_AFTER = 6000;

// Card grid that becomes a one-card-at-a-time swipe carousel on phones (layout comes from
// `className`): it auto-advances while on screen, pauses while the user is touching it, and shows dots.
export default function Carousel({ children, className }: { children: ReactNode; className: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = Children.count(children);

  useEffect(() => {
    const track = ref.current;
    if (!track) return;

    let visible = false;
    let pausedUntil = 0;
    const scrollable = () => track.scrollWidth > track.clientWidth + 1;
    const step = () => (track.children[1] as HTMLElement | undefined)?.offsetLeft ?? 0;
    const current = () => {
      const width = step() - (track.children[0] as HTMLElement).offsetLeft;
      return width > 0 ? Math.round(track.scrollLeft / width) : 0;
    };

    const onScroll = () => setActive(current());
    const pause = () => (pausedUntil = Date.now() + RESUME_AFTER);

    const observer = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting), { threshold: 0.5 });
    observer.observe(track);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setInterval(() => {
      if (reduceMotion || !visible || !scrollable() || Date.now() < pausedUntil) return;
      const next = (current() + 1) % track.children.length;
      const target = track.children[next] as HTMLElement;
      track.scrollTo({ left: target.offsetLeft - (track.children[0] as HTMLElement).offsetLeft, behavior: "smooth" });
    }, AUTO_DELAY);

    track.addEventListener("scroll", onScroll, { passive: true });
    track.addEventListener("pointerdown", pause);
    track.addEventListener("touchstart", pause, { passive: true });
    track.addEventListener("wheel", pause, { passive: true });
    return () => {
      window.clearInterval(timer);
      observer.disconnect();
      track.removeEventListener("scroll", onScroll);
      track.removeEventListener("pointerdown", pause);
      track.removeEventListener("touchstart", pause);
      track.removeEventListener("wheel", pause);
    };
  }, []);

  const goTo = (index: number) => {
    const track = ref.current;
    if (!track) return;
    const first = track.children[0] as HTMLElement;
    const target = track.children[index] as HTMLElement;
    track.scrollTo({ left: target.offsetLeft - first.offsetLeft, behavior: "smooth" });
  };

  return (
    <>
      <div className={className} ref={ref}>
        {children}
      </div>
      <div className={styles.dots}>
        {Array.from({ length: count }, (_, index) => (
          <button
            aria-label={`Show card ${index + 1}`}
            className={`${styles.dot} ${index === active ? styles.dotActive : ""}`}
            key={index}
            onClick={() => goTo(index)}
            type="button"
          />
        ))}
      </div>
    </>
  );
}
