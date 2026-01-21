'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import styles from './styles.module.scss';

gsap.registerPlugin(ScrollTrigger);

export function Parallax() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const scrollWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;

      gsap.to(track, {
        x: -(scrollWidth - viewportWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          scrub: true,
          pin: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div ref={trackRef} className={styles.track}>
        <div className={styles.panel}>One</div>
        <div className={styles.panel}>Two</div>
        <div className={styles.panel}>Three</div>
        <div className={styles.panel}>Four</div>
      </div>
    </section>
  );
}
