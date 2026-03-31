'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

import { HotelAbout } from '@/entities/hotel';
import { RESTAURANTS, RestaurantSlide } from '@/entities/restaurant';
import { AwardsMarquee } from '@/widget/awards';
import { Entertainment } from '@/widget/entertainment';
import { Hero } from '@/widget/hero';
import { Rooms } from '@/widget/rooms';
import { Slider } from '@/widget/slider';

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const pageRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray<HTMLElement>('.panel:not([data-panel-static="true"])');

    panels.forEach((panel) => {
      gsap.fromTo(
        panel,
        {
          autoAlpha: 0,
          y: 48,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: panel,
            start: 'top 85%',
            once: true,
          },
        },
      );
    });
  }, { scope: pageRef });

  return (
    <main ref={pageRef}>
      <section className="panel">
        <Hero
          subtitle={'Alanya, Kargıcak'}
          preTitle={'Welcome'}
          title={['Utopia World Hotel', 'Utopia World Resort']}
          video={'/video/utopia.mp4'}
          poster={'/images/poster.jpg'}
        />
      </section>
      <section className="panel"><HotelAbout /></section>
      <Entertainment />
      <section className="panel">
        <Slider
          kicker={'Food & Bar'}
          title={'Наши рестораны'}
          subtitle={'Изысканные вкусы, авторская подача и атмосфера Средиземноморья'}
          slides={RESTAURANTS.map((restaurant, index) => (
            <RestaurantSlide key={index} {...restaurant} />
          ))}
        />
      </section>
      <section className="panel"><AwardsMarquee /></section>
      <section className="panel"><Rooms /></section>
    </main>
  );
}
