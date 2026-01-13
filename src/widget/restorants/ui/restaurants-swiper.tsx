'use client';

import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useSwiperNav, useSwiperSegmentProgress } from '@/features/Carousel';
import { Button } from '@/shared/ui/button';

import styles from './restaurant-swiper.module.scss';

export function RestaurantsSwiper() {
  const nav = useSwiperNav();

  const {
    Segments,
    onSwiper,
    onSlideChange,
    onAutoplayTimeLeft,
  } = useSwiperSegmentProgress({ segments: 6 });

  return (
    <div className={styles.wrapper}>
      <Swiper
        slidesPerView={1}
        spaceBetween={32}
        onSwiper={(swiper) => {
          nav.onSwiper(swiper);
          onSwiper(swiper);
        }}
        onSlideChange={(swiper) => {
          nav.onSlideChange(swiper);
          onSlideChange(swiper);
        }}
        autoplay={{ delay: 3000 }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        modules={[A11y, Autoplay]}
        className={styles.swiper}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>


      </Swiper>

      <div className={styles.controls}>
        {Segments}

        <Button onClick={nav.prev} disabled={nav.isStart}>
          prev
        </Button>

        <Button onClick={nav.next} disabled={nav.isEnd}>
          next
        </Button>
      </div>
    </div>
  );
}
