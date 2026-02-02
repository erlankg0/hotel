'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Balloon, Group, Axe } from 'lucide-react';
import { useRef } from 'react';

import { cn } from '@/shared/lib/utils';
import { Rolling } from '@/shared/ui/rooling';
import { Text } from '@/shared/ui/text';
import { FullVideo } from '@/widget/full-video';

import styles from './styles.module.scss';

gsap.registerPlugin(ScrollTrigger);

export function Entertainment() {
  const desktopRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLDivElement | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!videoRef.current) return;

    gsap.set(videoRef.current, {
      scale: 0.4,
      borderRadius: 24,
      transformOrigin: 'center center',
    });

    gsap.to(videoRef.current, {
      scale: 1.1,
      borderRadius: 24,
      scrollTrigger: {
        trigger: videoRef.current,
        start: 'top center',
        end: 'center center',
        scrub: 1,
      },
    });

    if (topRef.current) {
      gsap.to(topRef.current, {
        y: -200,
        opacity: 0,
        scrollTrigger: {
          trigger: videoRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <section className={`${styles.section} panel`}>
      <div className={'container'}>
        <header className={styles.section__col}>
          <Text tag={'span'} variant={'kicker'}>Entertainment</Text>
          <Text tag={'h2'} variant={'title'}>Развлечения</Text>
          <Text tag={'p'} variant={'subtitle'}>
            Захватывающие шоу, яркая анимация и неповторимая средиземноморская атмосфера — каждый момент здесь
            превращается в праздник!
          </Text>
        </header>
      </div>

      <div className={styles.section__wrapper}>
        <article className={styles.section__content}>
          <div className={styles.section__video}>
            <div ref={desktopRef} className={styles.desktop}>
              <div className={styles.desktop__pin}>
                <div ref={videoRef} className={styles.desktop__video}>
                  <FullVideo url="/video/part.mp4" />
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}