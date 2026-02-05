'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

import { Button } from '@/shared/ui/button';

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
  const prevButton = (
    <Button variant={'rounded'} onClick={prev} disabled={isStart}>
      <ChevronLeft />
    </Button>
  );

  const nextButton = (
    <Button variant={'rounded'} onClick={next} disabled={isEnd}>
      <ChevronRight />
    </Button>
  );

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
