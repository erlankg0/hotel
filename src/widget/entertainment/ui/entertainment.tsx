'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Balloon, Axe, Laugh, HandHeart, Moon, Sun } from 'lucide-react';
import { useRef } from 'react';

import { Rolling } from '@/shared/ui/rooling';
import { Text } from '@/shared/ui/text';
import { FullVideo } from '@/widget/full-video';

import styles from './styles.module.scss';

gsap.registerPlugin(ScrollTrigger);

export function Entertainment() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!sectionRef.current || !videoRef.current) return;

    const media = gsap.matchMedia();

    media.add('(min-width: 992px) and (prefers-reduced-motion: no-preference)', () => {
      gsap.set(videoRef.current, {
        transformOrigin: 'center center',
        force3D: true,
      });

      gsap.fromTo(videoRef.current, {
        autoAlpha: 0.85,
        scale: 0.84,
        yPercent: 6,
      }, {
        autoAlpha: 1,
        scale: 1,
        yPercent: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'bottom center',
          scrub: 0.35,
          invalidateOnRefresh: true,
        },
      });
    });

    media.add('(max-width: 991px), (prefers-reduced-motion: reduce)', () => {
      gsap.set(videoRef.current, {
        clearProps: 'all',
      });
    });

    return () => {
      media.revert();
    };
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={`${styles.section} panel`} data-panel-static="true">
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
            <div className={styles.desktop}>
              <div className={styles.desktop__pin}>
                <div ref={videoRef} className={styles.desktop__video}>
                  <FullVideo url="/video/part.mp4" />
                </div>
              </div>
            </div>
            <Rolling icons={[Axe, Balloon, HandHeart, Laugh, Moon, Sun]} />
          </div>
        </article>
      </div>
    </section>
  );
}
