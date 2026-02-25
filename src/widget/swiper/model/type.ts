import type { ReactNode } from 'react';
import type { Swiper as SwiperType } from 'swiper';

export type SwiperProps = {
  delay: number;
  slides: ReactNode[];
  slidesPerView?: number;
  spaceBetween?: number;
  centeredSlides?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  onSwiper?: (swiper: SwiperType) => void;
  onSlideChange?: (swiper: SwiperType) => void;
  onAutoplayTimeLeft?: (_: SwiperType, timeleft: number, totalTime: number) => void;
  navButtons?: ReactNode;
  progressControls?: ReactNode;
}

export type UseSwiperSegmentProgressProps = {
  segments: number;
  onSegmentChange?: (index: number) => void;
};

export interface SegmentButtonProps {
  index: number;
  isActive: boolean;
  segmentProgress: number;
  onSegmentClick: (index: number) => void;
}

export type NavButtonProps = {
  side: 'left' | 'right';
  onClick?: () => boolean | undefined;
  isDisabled?: boolean;
  className?: string;
}