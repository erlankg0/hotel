'use client';

import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

import { FullVideo } from '@/widget/full-video';

import styles from './styles.module.scss';

import type { HeroPros } from '../model/type';

export function Hero({ title, preTitle, subtitle, poster, video, slot }: HeroPros) {
  const wordRef = useRef<HTMLSpanElement | null>(null);
  const words = Array.isArray(title) ? title.filter(Boolean) : [];
  const initialWord = words[0] ?? '';

  useEffect(() => {
    const element = wordRef.current;
    const words = Array.isArray(title) ? title.filter(Boolean) : [];

    if (!element || words.length === 0) return;

    element.textContent = words[0];

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(element, { clearProps: 'all' });
      return;
    }

    let currentIndex = 0;
    let wordTimeline: gsap.core.Timeline | null = null;

    const context = gsap.context(() => {
      gsap.set(element, {
        yPercent: 100,
        opacity: 0,
      });

      gsap.to(element, {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      });

      if (words.length < 2) return;

      wordTimeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 1.6,
      });

      wordTimeline
        .to(element, {
          delay: 2,
          yPercent: -100,
          opacity: 0,
          duration: 0.55,
          ease: 'power3.in',
          onComplete: () => {
            currentIndex = (currentIndex + 1) % words.length;
            element.textContent = words[currentIndex];

            gsap.set(element, {
              yPercent: 100,
            });
          },
        })
        .to(element, {
          yPercent: 0,
          opacity: 1,
          duration: 0.75,
          ease: 'power3.out',
        });
    }, element);

    return () => {
      wordTimeline?.kill();
      context.revert();
    };
  }, [title]);

  return (
    <section className={styles.hero}>
      <div className={styles.hero__inner}>
        {video && (
          <div className={styles.hero__media}>
            <FullVideo url={video} poster={poster} />
          </div>
        )}

        <div className={styles.hero__veil} />
        <div className={styles.hero__glow} aria-hidden />

        <div className={styles.hero__text}>
          {preTitle && (
            <div className={styles.hero__pre_title}>
              <p>{preTitle}</p>
              <ChevronDown />
            </div>
          )}

          {words.length > 0 && (
            <h1 className={styles.hero__main_title} aria-label={words.join(' / ')}>
              <span className={styles.hero__title_stage}>
                <span ref={wordRef} className={styles.hero__title_word} aria-hidden="true">
                  {initialWord}
                </span>
                <span className={styles.hero__title_measure} aria-hidden="true">
                  {words.map((word, index) => (
                    <span key={`${word}-${index}`} className={styles.hero__title_sizer}>
                      {word}
                    </span>
                  ))}
                </span>
              </span>
            </h1>
          )}

          {slot && (
            <div className={styles.hero__slot}>
              {slot}
            </div>
          )}

          {subtitle && (
            <p className={styles.hero__subtitle}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
