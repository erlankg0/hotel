'use client';

import Image from 'next/image';

import { cn } from '@/shared/lib/utils';
import { BreadcrumbsUI } from '@/widget/breadcrumbs';
import { SwiperUI, useSwiperNav, useSwiperSegmentProgress } from '@/widget/swiper';

import styles from './page.module.scss';

export default function Page() {

  const {
    onSwiper: navOnSwiper,
    onSlideChange: navOnSlideChange,
    nextButton,
    prevButton,
  } = useSwiperNav();
  const {
    Segments,
    onSwiper,
    onSlideChange,
    onAutoplayTimeLeft,
  } = useSwiperSegmentProgress({ segments: 2 });


  return (
    <section className={cn(styles.section)}>
      <div className="container">
        <BreadcrumbsUI />
      </div>
      <div className={styles.section__hero}>
        <SwiperUI
          delay={5000}
          spaceBetween={0}
          onSwiper={(swiper) => {
            navOnSwiper(swiper);
            onSwiper(swiper);
          }}
          onSlideChange={(swiper) => {
            navOnSlideChange(swiper);
            onSlideChange(swiper);
          }}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          autoplay={true}
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
        <div className={styles.section__hero_controls}>
          {Segments}
          {prevButton}
          {nextButton}
        </div>
      </div>

      <div className={'container'}>
        cards

      </div>
    </section>
  );
}