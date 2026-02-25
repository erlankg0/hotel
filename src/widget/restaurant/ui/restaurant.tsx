'use client';
import { useCallback } from 'react';

import { RestaurantSlide, RESTAURANTS } from '@/entities/restaurant';
import { Text } from '@/shared/ui/text';
import { SwiperUI, useSwiperNav, useSwiperSegmentProgress } from '@/widget/swiper';

import styles from './styles.module.scss';

import type { Swiper as SwiperType } from 'swiper';


export function Restaurant() {
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
  } = useSwiperSegmentProgress({ segments: RESTAURANTS.length });

  const handleOnSwiper = useCallback((swiper: SwiperType) => {
    onSwiper(swiper);
    navOnSwiper(swiper);
  }, [navOnSwiper, onSwiper]);

  const handleOnSlideChange = useCallback((swiper: SwiperType) => {
    onSlideChange(swiper);
    navOnSlideChange(swiper);
  }, [navOnSlideChange, onSlideChange]);

  return (
    <section className={styles.section} aria-label="Food & Bar">
      <div className="container">
        <header className={styles.header}>
          <Text tag={'span'} variant={'kicker'}>Food & Bar</Text>
          <Text tag={'h2'} variant={'title'}>Наши рестораны</Text>
          <Text tag={'p'} variant={'subtitle'}> Изысканные вкусы, авторская подача и атмосфера Средиземноморья</Text>
        </header>

        <SwiperUI
          delay={5000}
          slidesPerView={1.3}
          spaceBetween={16}
          autoplay
          progressControls={Segments}
          navButtons={(
            <>
              {prevButton}
              {nextButton}
            </>
          )}
          onSwiper={handleOnSwiper}
          onSlideChange={handleOnSlideChange}
          slides={RESTAURANTS.map((restaurant, index) => (
            <RestaurantSlide key={index} {...restaurant} />
          ))}
        />
      </div>
    </section>
  );
}
