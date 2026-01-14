import type { ReactNode } from 'react';

export type SwiperProps = {
  delay: number;
  slides: ReactNode[];
  slidesPerView?: number;
  spaceBetween?: number;
  controls?: boolean;
  navs?: boolean;
  centeredSlides?: boolean;
  loop?: boolean;
}