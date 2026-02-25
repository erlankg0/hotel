'use client';

import { useCallback, useMemo, useState, useRef } from 'react';

import { SegmentButton } from '@/widget/swiper/ui/segmentButton';

import type { UseSwiperSegmentProgressProps } from '../model/type';
import type { Swiper as SwiperType } from 'swiper';

export function useSwiperSegmentProgress({
                                           segments,
                                           onSegmentChange,
                                           duration = 5, // Длительность в секундах
                                         }: UseSwiperSegmentProgressProps & { duration?: number }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const onSwiper = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
    setActiveIndex(swiper.activeIndex);
  }, []);

  const onSegmentClick = useCallback(
    (index: number) => {
      const swiper = swiperRef.current;
      if (!swiper) return;

      swiper.slideTo(index);
      onSegmentChange?.(index);
    },
    [onSegmentChange],
  );

  const onSlideChange = useCallback(
    (swiper: SwiperType) => {
      setActiveIndex(swiper.activeIndex);
      onSegmentChange?.(swiper.activeIndex);
    },
    [onSegmentChange],
  );

  const handleNext = useCallback(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    if (swiper.isEnd) {
      swiper.slideTo(0);
    } else {
      swiper.slideNext();
    }
  }, []);

  const Segments = useMemo(() => {
    return (
      <div className="segments">
        {Array.from({ length: segments }).map((_, i) => (
          <SegmentButton
            key={i}
            index={i}
            isActive={i === activeIndex}
            isCompleted={i < activeIndex}
            duration={duration}
            onSegmentClick={onSegmentClick}
            onComplete={handleNext}
          />
        ))}
      </div>
    );
  }, [segments, activeIndex, onSegmentClick, handleNext, duration]);

  const SegmentLine = useMemo(() => {
    return (
      <div className={'segments_line'}>
        <div className={'segments_line_center'}>
          {Array.from({ length: segments }).map((_, i) => {
            return (
              <SegmentButton
                key={i}
                index={i}
                isActive={i === activeIndex}
                isCompleted={i < activeIndex}
                duration={duration}
                onSegmentClick={onSegmentClick}
                onComplete={handleNext}
              />
            );
          })}
        </div>
      </div>
    );
  }, [segments, activeIndex, duration, onSegmentClick, handleNext]);


  return {
    Segments,
    SegmentLine,
    activeIndex,
    onSwiper,
    onSlideChange,
    goToSlide: onSegmentClick,
  };
}