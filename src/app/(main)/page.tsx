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
    const motion = gsap.matchMedia();

    motion.add('(prefers-reduced-motion: no-preference)', () => {
      const panels = gsap.utils.toArray<HTMLElement>(
        '.panel:not([data-panel-static="true"])',
        pageRef.current,
      );

      panels.forEach((panel) => {
        gsap.fromTo(panel, {
          autoAlpha: 0,
          y: 32,
        }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          ease: 'power2.out',
          clearProps: 'transform,visibility,opacity',
          scrollTrigger: {
            trigger: panel,
            start: 'top 88%',
            once: true,
          },
        });
      });
    });

    return () => motion.revert();
  }, { scope: pageRef });

  return (
    <main ref={pageRef}>
      <section className="panel">
        <Hero
          subtitle={'Сосновые склоны, бирюзовое море и отдых над побережьем'}
          preTitle={'Аланья · Турция'}
          title={['Utopia World Hotel', 'Utopia World Resort']}
          video={'/video/utopia.mp4'}
          poster={'/images/hero-poster.webp'}
          action={{ href: '/book/book', label: 'Забронировать отдых' }}
        />
      </section>
      <section className="panel"><HotelAbout /></section>
      <Entertainment />
      <section className="panel">
        <Slider
          kicker={'Food & Bar'}
          title={'Наши рестораны'}
          subtitle={'Изысканные вкусы, авторская подача и атмосфера Средиземноморья'}
          slides={RESTAURANTS.map((restaurant) => (
            <RestaurantSlide key={restaurant.title} {...restaurant} />
          ))}
        />
      </section>
      <section className="panel"><AwardsMarquee /></section>
      <section className="panel"><Rooms /></section>
    </main>
  );
}
