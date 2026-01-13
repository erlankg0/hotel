'use client';

import { useCallback, useMemo, useState } from 'react';

import { Progress } from '@/shared/ui/progress';

import type { Swiper as SwiperType } from 'swiper';

type UseSwiperSegmentProgressProps = {
  segments: number;
};

export function useSwiperSegmentProgress({
                                           segments,
                                         }: UseSwiperSegmentProgressProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const onSwiper = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
    setSwiperInstance(swiper);
  }, []);

  const onSegmentClick = useCallback(
    (index: number) => {
      if (!swiperInstance) return;

      swiperInstance.slideTo(index);
      setActiveIndex(index);
      setProgress(0);
    },
    [swiperInstance],
  );

  const onSlideChange = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
    setProgress(0);
  }, []);

  const onAutoplayTimeLeft = useCallback(
    (_: SwiperType, __: number, progress: number) => {
      setProgress(progress);
    },
    [],
  );

  const Segments = useMemo(() => {
    return (
      <div className="segments">
        {Array.from({ length: segments }).map((_, i) => {
          return (
            <button
              key={i}
              className="segment"
              onClick={() => onSegmentClick(i)}
              type="button"
            >
              <Progress value={i === activeIndex ? (1 - progress) * 100 : 0} />
            </button>
          );
        })}
      </div>
    );
  }, [segments, activeIndex, progress, onSegmentClick]);

  return {
    Segments,
    activeIndex,
    progress,
    onSwiper,
    onSlideChange,
    onAutoplayTimeLeft,
  };
}
