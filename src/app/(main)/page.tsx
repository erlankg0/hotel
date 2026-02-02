'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

import { HotelAbout } from '@/entities/hotel';
import { AwardsMarquee } from '@/widget/awards';
import { Entertainment } from '@/widget/entertainment';
import { Hero } from '@/widget/hero';
import { Restaurant } from '@/widget/restaurant';
import { Rooms } from '@/widget/rooms';

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  useEffect(() => {
    const panels = gsap.utils.toArray<HTMLElement>('.panel');

    panels.forEach((panel) => {
      gsap.fromTo(
        panel,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: panel,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <section className="panel"><Hero /></section>
      <section className="panel"><HotelAbout /></section>
      <Entertainment />
      <section className="panel"><Restaurant /></section>
      <section className="panel"><AwardsMarquee /></section>
      <section className="panel"><Rooms /></section>
    </>
  );
}