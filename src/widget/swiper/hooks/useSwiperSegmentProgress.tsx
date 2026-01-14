'use client';

import { useCallback, useMemo, useState, useRef } from 'react';

import { Progress } from '@/shared/ui/progress';

import type { Swiper as SwiperType } from 'swiper';

type UseSwiperSegmentProgressProps = {
  segments: number;
  onSegmentChange?: (index: number) => void;
};

export function useSwiperSegmentProgress({
                                           segments,
                                           onSegmentChange,
                                         }: UseSwiperSegmentProgressProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const onSwiper = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
    setActiveIndex(swiper.activeIndex);
  }, []);

  const onSegmentClick = useCallback(
    (index: number) => {
      const swiper = swiperRef.current;
      if (!swiper || index === activeIndex) return;

      swiper.slideTo(index);
      setActiveIndex(index);
      setProgress(0);
      onSegmentChange?.(index);
    },
    [activeIndex, onSegmentChange],
  );

  const onSlideChange = useCallback(
    (swiper: SwiperType) => {
      const newIndex = swiper.activeIndex;
      setActiveIndex(newIndex);
      setProgress(0);
      onSegmentChange?.(newIndex);
    },
    [onSegmentChange],
  );

  const onAutoplayTimeLeft = useCallback(
    (_: SwiperType, __: number, progressValue: number) => {
      setProgress(progressValue);
    },
    [],
  );

  const getSegmentProgress = useCallback(
    (index: number) => {
      if (index < activeIndex) return 100;
      if (index === activeIndex) return (1 - progress) * 100;
      return 0;
    },
    [activeIndex, progress],
  );

  const Segments = useMemo(() => {
    return (
      <div className="segments">
        {Array.from({ length: segments }).map((_, i) => {
          const segmentProgress = getSegmentProgress(i);
          const isActive = i === activeIndex;

          return (
            <button
              key={i}
              className={`segment ${isActive ? 'segment-progress w-[30px]' : 'w-[10px]'}`}
              onClick={() => onSegmentClick(i)}
              type="button"
              aria-label={`Перейти к слайду ${i + 1}`}
              aria-current={isActive ? 'true' : 'false'}
            >
              <Progress value={isActive ? segmentProgress : 0} />
            </button>
          );
        })}
      </div>
    );
  }, [activeIndex, segments, getSegmentProgress, onSegmentClick]);

  return {
    Segments,
    activeIndex,
    progress,
    onSwiper,
    onSlideChange,
    onAutoplayTimeLeft,
    goToSlide: onSegmentClick,
  };
}