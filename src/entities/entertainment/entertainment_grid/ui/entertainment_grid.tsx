'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import styles from './styles.module.scss';

gsap.registerPlugin(ScrollTrigger);

export function EntertainmentGrid() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    gsap.fromTo(
      gridRef.current.querySelectorAll('.card'),
      {
        y: 60,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.05,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section className={styles.section}>
      <div ref={gridRef} className={styles.grid}>
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className={`card ${styles.card}`}>
            Card {i + 1}
          </div>
        ))}
      </div>
    </section>
  );
}
