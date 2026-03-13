'use client';

import gsap from 'gsap';
import { useEffect, useRef } from 'react';

import styles from './styles.module.scss';

export function Title() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const words = titleRef.current.querySelectorAll('span');

    gsap.fromTo(
      words,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.inOut',
        stagger: 0.45,
      },
    );
  }, []);

  return (
    <div ref={titleRef} className={styles.title}>
      <span className="text-red-500">Ma&</span>
      <span className="text-green-500">Me&</span>
      <span className="text-blue-500">Pa</span>
    </div>
  );
}