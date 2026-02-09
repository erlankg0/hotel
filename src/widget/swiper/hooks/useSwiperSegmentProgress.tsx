'use client';

import { useCallback, useMemo, useState, useRef } from 'react';

import { SegmentButton } from '../ui/segmentButton';

import type { UseSwiperSegmentProgressProps } from '../model/type';
import type { Swiper as SwiperType } from 'swiper';


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
    (_: SwiperType, _timeLeft: number, progress: number) => {
      setProgress(progress);
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

  const segmentWidth: string = useMemo(() => `${100 / segments}%`, [segments]);

  const Segments = useMemo(() => {
    return (
      <div className="segments">
        {Array.from({ length: segments }).map((_, i) => {
          const segmentProgress = getSegmentProgress(i);
          const isActive = i === activeIndex;

          return (
            <SegmentButton
              key={i}
              index={i}
              isActive={isActive}
              segmentProgress={segmentProgress}
              segmentWidth={segmentWidth}
              onSegmentClick={onSegmentClick}
            />
          );
        })}
      </div>
    );
  }, [segments, getSegmentProgress, activeIndex, segmentWidth, onSegmentClick]);

  const SegmentLine = useMemo(() => {
    return (
      <div className={'segments_line'}>
        <div className={'segments_line_center'}>
          {Array.from({ length: segments }).map((_, i) => {
            const isActive = i === activeIndex;

            return (
              <SegmentButton
                key={i}
                index={i}
                isActive={isActive}
                segmentProgress={100}
                segmentWidth={segmentWidth}
                onSegmentClick={onSegmentClick}
              />
            );
          })}
        </div>
      </div>
    );
  }, [segments, activeIndex, segmentWidth, onSegmentClick]);

  return {
    SegmentLine,
    Segments,
    activeIndex,
    progress,
    onSwiper,
    onSlideChange,
    onAutoplayTimeLeft,
    goToSlide: onSegmentClick,
  };
}