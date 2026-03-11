'use client';
import { useCallback } from 'react';

import { Text } from '@/shared/ui/text';
import { SwiperUI, useSwiperNav, useSwiperSegmentProgress } from '@/widget/swiper';

import styles from './styles.module.scss';

import type { SlideProps } from '../model/type';
import type { Swiper as SwiperType } from 'swiper';

export function Slider({ slides, title, kicker, subtitle, slidesPerView = 1.3 }: SlideProps) {
  const {
    onSwiper: navOnSwiper,
    onSlideChange: navOnSlideChange,
    nextButton,
    prevButton,
  } = useSwiperNav();

  const {
    Segments,
    onSwiper,
    onSlideChange,
  } = useSwiperSegmentProgress({ segments: slides.length, className: 'bg-gray-300' });

  const handleOnSwiper = useCallback((swiper: SwiperType) => {
    onSwiper(swiper);
    navOnSwiper(swiper);
  }, [navOnSwiper, onSwiper]);

  const handleOnSlideChange = useCallback((swiper: SwiperType) => {
    onSlideChange(swiper);
    navOnSlideChange(swiper);
  }, [navOnSlideChange, onSlideChange]);

  const hasManySlides = slides.length > 1;

  return (
    <section className={styles.section} aria-label="Food & Bar">
      <div className="container">
        <header className={styles.header}>
          {kicker && (<Text tag={'span'} variant={'kicker'}>{kicker}</Text>)}
          {title && (<Text tag={'h2'} variant={'title'}>{title}</Text>)}
          {subtitle && (<Text tag={'p'} variant={'subtitle'}>{subtitle}</Text>)}
        </header>

        <SwiperUI
          delay={5000}
          slidesPerView={slidesPerView}
          spaceBetween={16}
          autoplay
          progressControls={hasManySlides && Segments}
          navButtons={
            hasManySlides && (
              <>
                {prevButton}
                {nextButton}
              </>
            )
          }
          onSwiper={handleOnSwiper}
          onSlideChange={handleOnSlideChange}
          slides={slides}
        />
      </div>
    </section>
  );
}
