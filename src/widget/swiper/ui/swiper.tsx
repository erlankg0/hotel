'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '@/shared/ui/button';

import { useSwiperNav } from '../hooks/useSwiperNav';
import { useSwiperSegmentProgress } from '../hooks/useSwiperSegmentProgress';

import styles from './swiper.module.scss';

import type { SwiperProps } from '../model/type';


export function SwiperUI({ delay, slides, spaceBetween = 32, slidesPerView = 1, controls, navs, centeredSlides }: SwiperProps) {
  const nav = useSwiperNav();

  const {
    Segments,
    onSwiper,
    onSlideChange,
    onAutoplayTimeLeft,
  } = useSwiperSegmentProgress({ segments: slides.length });

  return (
    <div className={styles.wrapper}>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        centeredSlides={centeredSlides}
        onSwiper={(swiper) => {
          nav.onSwiper(swiper);
          onSwiper(swiper);
        }}
        onSlideChange={(swiper) => {
          nav.onSlideChange(swiper);
          onSlideChange(swiper);
        }}
        autoplay={{ delay: delay }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        modules={[A11y, Autoplay]}
        className={styles.swiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.controls}>
        {controls && (<>{Segments}</>)}
        {navs && (<div className={styles.controls__nav}>
          <Button variant={'rounded'} onClick={nav.prev} disabled={nav.isStart}>
            <ChevronLeft />
          </Button>

          <Button variant={'rounded'} onClick={nav.next} disabled={nav.isEnd}>
            <ChevronRight />
          </Button>
        </div>)}
      </div>
    </div>
  );
}
