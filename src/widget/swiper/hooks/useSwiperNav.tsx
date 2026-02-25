'use client';

import { useRef, useState } from 'react';

import { NavButton } from '../ui/NavButton';

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

  const prevButton = <NavButton onClick={prev} side={'left'} isDisabled={isStart} className={'text-black'} />;
  const nextButton = <NavButton onClick={next} side={'right'} isDisabled={isEnd} className={'text-black'} />;

  return {
    onSwiper,
    onSlideChange,
    prev,
    next,
    prevButton,
    nextButton,
    isStart,
    isEnd,
  };
}
