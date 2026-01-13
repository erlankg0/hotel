'use client';

import { useState } from 'react';

import type { Swiper as SwiperType } from 'swiper';

export function useSwiperDots() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const onSwiper = (swiper: SwiperType) => {
    setTotal(swiper.slides.length);
    setActiveIndex(swiper.activeIndex);
  };

  const onSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  const goTo = (swiper: SwiperType, index: number) => {
    swiper.slideTo(index);
  };

  return {
    activeIndex,
    total,
    onSwiper,
    onSlideChange,
    goTo,
  };
}
