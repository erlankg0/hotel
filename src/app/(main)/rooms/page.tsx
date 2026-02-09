'use client';

import Image from 'next/image';
import { useCallback } from 'react';

import { cn } from '@/shared/lib/utils';
import { BreadcrumbsUI } from '@/widget/breadcrumbs';
import { SwiperUI, useSwiperNav, useSwiperSegmentProgress } from '@/widget/swiper';

import styles from './page.module.scss';

import type { Swiper as SwiperType } from 'swiper';

export default function Page() {

  const {
    onSwiper: navOnSwiper,
    onSlideChange: navOnSlideChange,
    nextButton,
    prevButton,
  } = useSwiperNav();
  const {
    SegmentLine,
    onSwiper,
    onSlideChange,
    onAutoplayTimeLeft,
    activeIndex,
  } = useSwiperSegmentProgress({ segments: 3 });

  const handleOnSwiper = useCallback((swiper: SwiperType) => {
    onSwiper(swiper);
    navOnSwiper(swiper);
  }, [navOnSwiper, onSwiper]);

  const handleOnChangeSwiper = useCallback((swiper: SwiperType) => {
    onSlideChange(swiper);
    navOnSlideChange(swiper);
  }, [onSlideChange, navOnSlideChange]);

  return (
    <section className={cn(styles.section)}>
      <div className="container">
        <BreadcrumbsUI />
      </div>
      <div className={styles.section__hero}>
        <SwiperUI
          delay={5000}
          spaceBetween={0}
          onSwiper={handleOnSwiper}
          onSlideChange={handleOnChangeSwiper}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          autoplay={false}
          slides={[
            <div key="1" className="relative w-full h-150">
              <Image
                src="/images/parallax/hotel/sea.png"
                alt="Sea view"
                fill
                className="object-cover"
                sizes="100vw"
                loading={'lazy'}
              />
            </div>,

            <div key="2" className="relative w-full h-150">
              <Image
                src="/images/parallax/hotel/hotel.png"
                alt="Hotel view"
                fill
                className="object-cover"
                sizes="100vw"
                loading={'lazy'}
              />
            </div>,
            <div key="2" className="relative w-full h-150">
              <Image
                src="/images/parallax/hotel/hotel.png"
                alt="Hotel view"
                fill
                className="object-cover"
                sizes="100vw"
                loading={'lazy'}
              />
            </div>,
          ]}
        />
        <div className={styles.section__hero_controls}>
          <div className={'flex flex-col gap-2'}>
            <div className={styles.section__hero_nav}>
              {prevButton}
              {SegmentLine}
              {nextButton}
            </div>
            <div className={styles.section__hero_pagination}>
              <p>{activeIndex + 1}</p><p><strong>/</strong></p><p>4</p>
            </div>
          </div>
        </div>
      </div>

      <div className={'container'}>
        cards

      </div>
    </section>
  );
}