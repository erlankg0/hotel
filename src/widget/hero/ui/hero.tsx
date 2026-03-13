'use client';

import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

import { FullVideo } from '@/widget/full-video';

import styles from './styles.module.scss';

import type { HeroPros } from '../model/type';

export function Hero({ title, preTitle, subtitle, poster, video, slot }: HeroPros) {
  const worldRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!worldRef.current || !title?.length) return;

    const words = title;
    let currentIndex = 0;

    const animateWord = () => {
      if (!worldRef.current) return;

      gsap.to(worldRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          if (!worldRef.current) return;

          currentIndex = (currentIndex + 1) % words.length;

          worldRef.current.textContent = words[currentIndex];

          gsap.set(worldRef.current, { y: 30 });

          gsap.to(worldRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
          });
        },
      });
    };

    gsap.fromTo(
      worldRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
    );

    const interval = setInterval(animateWord, 3000);

    return () => clearInterval(interval);
  }, [title]);

  return (
    <section className={styles.hero}>
      <div className={styles.hero__inner}>
        <div className={styles.hero__text}>
          {preTitle && (<div className={styles.hero__text__pre_title}>
            <p>{preTitle}</p>
            <ChevronDown />
          </div>)}
          {title && (<h1 className={styles.hero__text__main_title}><span ref={worldRef}>{title[0]}</span></h1>)}
          {slot && (<>{slot}</>)}
          {subtitle && (
            <p>{subtitle}</p>
          )}
        </div>
        <div className={styles.desktop}>
          <FullVideo url={video} poster={poster} />
        </div>
      </div>
    </section>
  );
}