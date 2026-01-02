'use client';

import { ChevronDown } from 'lucide-react';

import { FullVideo } from '@/widget/full-video';

import styles from './styles.module.scss';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__inner}>
        <div className={styles.hero__text}>
          <div className={styles.hero__text__pre_title}>
            <p>Welcome to</p>
            <ChevronDown />
          </div>
          <h1 className={styles.hero__text__main_title}>Utopia World hotel</h1>
          <p>Alanya, Kargıcak</p>
        </div>
        <div className={styles.desktop}>
          <FullVideo url={'/video/utopia.mp4'} />
        </div>
        <div className={'fixed w-full h-2 bg-black z-40'}>
          Erlan Aaaa
        </div>
      </div>
    </section>
  );
}