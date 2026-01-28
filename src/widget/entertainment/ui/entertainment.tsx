'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Balloon } from 'lucide-react';
import { useRef } from 'react';

import { Text } from '@/shared/ui/text';
import { FullVideo } from '@/widget/full-video';

import styles from './styles.module.scss';

gsap.registerPlugin(ScrollTrigger);

export function Entertainment() {
  const desktopRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!videoRef.current) return;

    gsap.set(videoRef.current, {
      scale: 0.4,
      borderRadius: 24,
      transformOrigin: 'center center',
    });

    gsap.to(videoRef.current, {
      scale: .9,
      borderRadius: 24,
      scrollTrigger: {
        trigger: videoRef.current,
        start: 'top center',
        end: 'center center',
        scrub: 1.7,
      },
    });
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <Text tag="span" variant="kicker">
            Entertainment
          </Text>
        </header>
      </div>
      <div className={'container'}>
        <article className={styles.section__content}>
          <div className={styles.section__top}>
            <div className={styles.section__text}>
              <span>Анимация</span>
              <span><Balloon size={44} /></span>
              <span>Utopia World</span>
            </div>
            <ul className={styles.section__info}>
              <li>Взрослая</li>
              <li>Десткая</li>
              <li>Программа</li>
            </ul>
          </div>

          <div className={styles.footer}>
            <div>1</div>
            <div>2</div>
          </div>

        </article>
      </div>

      <div className={styles.wrapper}>
        <div ref={desktopRef} className={styles.desktop}>
          <div className={styles.desktop__pin}>
            <div ref={videoRef} className={styles.desktop__video}>
              <FullVideo url="/video/utopia.mp4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}