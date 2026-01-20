'use client';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

import { Contact, useContact } from '@/features/contact';
import { Modal } from '@/shared/ui/modal';
import { FullVideo } from '@/widget/full-video';

import styles from './styles.module.scss';

export function Hero() {
  const { isOpen, setIsOpen } = useContact();
  const worldRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!worldRef.current) return;

    const words = ['Utopia World Resort', 'Utopia World Hotel'];
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
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.hero__inner}>
        <div className={styles.hero__text}>
          <div className={styles.hero__text__pre_title}>
            <p>Welcome</p>
            <ChevronDown />
          </div>
          <h1 className={styles.hero__text__main_title}>
            <span ref={worldRef}>Utopia World Hotel</span>
          </h1>
          <p>Alanya, Kargıcak</p>
        </div>
        <div className={styles.desktop}>
          <FullVideo url={'/video/utopia.mp4'} poster={'/images/poster.jpg'} />
        </div>
      </div>
      <Modal content={<Contact />} isOpen={isOpen} onClose={setIsOpen} />
    </section>
  );
}