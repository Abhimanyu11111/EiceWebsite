"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 1600;

// Counts from 0 up to the number in `value` ("200+", "98%") once it scrolls into view.
export default function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : value;
  const isNumeric = match !== null;

  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node || !isNumeric) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : DURATION;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = duration ? Math.min((now - start) / duration, 1) : 1;
          setCount(Math.round(target * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [isNumeric, target]);

  return (
    <span aria-label={value} ref={ref}>
      {isNumeric ? `${count}${suffix}` : value}
    </span>
  );
}
