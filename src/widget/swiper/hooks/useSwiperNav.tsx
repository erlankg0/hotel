'use client';

import { useRef, useState } from 'react';

import type { Swiper as SwiperType } from 'swiper';

export function useSwiperNav() {
  const swiperRef = useRef<SwiperType | null>(null);

  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const onSwiper = (swiper: SwiperType) => {
    swiperRef.current = swiper;
    setIsStart(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const onSlideChange = (swiper: SwiperType) => {
    setIsStart(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const prev = () => swiperRef.current?.slidePrev();
  const next = () => swiperRef.current?.slideNext();
  
  return {
    onSwiper,
    onSlideChange,
    prev,
    next,
    isStart,
    isEnd,
  };
}
