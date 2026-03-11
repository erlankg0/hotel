import type { ReactNode } from 'react';

export type SlideProps = {
  kicker?: string,
  title: string,
  subtitle?: string,
  slidesPerView?: number;

  slides: ReactNode[]
}