'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import girls from '../asset/image/girls.png';
import bg from '../asset/image/state.png';

import styles from './styles.module.scss';

gsap.registerPlugin(ScrollTrigger);

export function AdultEntertainment() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const girlsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'center center',
        end: '+=200%',
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.fromTo(
      girlsRef.current,
      { y: 50, scale: 0.95, opacity: 0 },
      { y: 0, scale: 1, opacity: 1, duration: 2, ease: 'power2.out' },
    );

    tl.to(
      girlsRef.current,
      { y: -30, duration: 0.5, ease: 'power2.inOut' },
      '+=0',
    );

    tl.fromTo(
      bgRef.current,
      { y: 0, scale: 1 },
      { y: -50, scale: 1.05, duration: 3, ease: 'none' },
      0,
    );
  }, []);

  return (
    <section className={styles.section} ref={containerRef}>
      <div
        ref={bgRef}
        className={`photo ${styles.layout}`}
        style={{ backgroundImage: `url(${bg.src})` }}
      />
      <div
        ref={girlsRef}
        className={`photo ${styles.layout} ${styles.topLayer}`}
        style={{ backgroundImage: `url(${girls.src})` }}
      />
    </section>
  );
}
