'use client';

import Image from 'next/image';

import { cn } from '@/shared/lib/utils';
import { BreadcrumbsUI } from '@/widget/breadcrumbs';
import { SwiperUI, useSwiperNav, useSwiperSegmentProgress } from '@/widget/swiper';

import styles from './page.module.scss';

export default function Page() {

  const nav = useSwiperNav();
  const {
    Segments,
    onSwiper,
    onSlideChange,
  } = useSwiperSegmentProgress({ segments: 2 });


  return (
    <section className={cn(styles.section)}>
      <div className="container">
        <BreadcrumbsUI />
      </div>

      <SwiperUI
        delay={5000}
        spaceBetween={0}
        onSwiper={(swiper) => {
          nav.onSwiper(swiper);
          onSwiper(swiper);
        }}
        onSlideChange={(swiper) => {
          nav.onSlideChange(swiper);
          onSlideChange(swiper);
        }}
        progressControls={Segments}
        slides={[
          <div key="1" className="relative w-full h-150">
            <Image
              src="/images/parallax/hotel/sea.png"
              alt="Sea view"
              fill
              className="object-cover"
              sizes="100vw"
              loading={'lazy'}
            />
          </div>,

          <div key="2" className="relative w-full h-150">
            <Image
              src="/images/parallax/hotel/hotel.png"
              alt="Hotel view"
              fill
              className="object-cover"
              sizes="100vw"
              loading={'lazy'}
            />
          </div>,
        ]}
      />
      <div className={'container'}>
        cards
      </div>
    </section>
  );
}