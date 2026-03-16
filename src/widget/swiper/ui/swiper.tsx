'use client';

import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './swiper.module.scss';

import type { SwiperProps } from '../model/type';

export function SwiperUI({
                           delay,
                           slides,
                           spaceBetween = 32,
                           slidesPerView = 1,
                           progressControls,
                           navButtons,
                           centeredSlides,
                           loop,
                           autoplay,
                           onSwiper,
                           onSlideChange,
                           onAutoplayTimeLeft,
                         }: SwiperProps) {

  return (
    <div className={styles.wrapper}>
      <Swiper
        loop={loop}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        centeredSlides={centeredSlides}
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}
        autoplay={autoplay ? { delay, disableOnInteraction: false } : false}
        onAutoplayTimeLeft={(_, timeLeft, totalTime) => {
          onAutoplayTimeLeft?.(_, timeLeft, totalTime);
        }}
        modules={[A11y, Autoplay]}
        className={styles.swiper}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
      {(progressControls || navButtons) && (
        <div className={styles.controls}>
          {progressControls && <>{progressControls}</>}
          {navButtons && (
            <div className={styles.controls__nav}>
              {navButtons}
            </div>
          )}
        </div>
      )}
    </div>
  );
}