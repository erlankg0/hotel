'use client';

import { useCallback } from 'react';

import { RoomBanner, RoomCardFull } from '@/entities/room';
import { cn } from '@/shared/lib/utils';
import { BreadcrumbsUI } from '@/widget/breadcrumbs';
import { SwiperUI, useSwiperNav, useSwiperSegmentProgress } from '@/widget/swiper';

import styles from './page.module.scss';

import type { Swiper as SwiperType } from 'swiper';

export default function Page() {

  const {
    onSwiper: navOnSwiper,
    onSlideChange: navOnSlideChange,
    nextButton,
    prevButton,
  } = useSwiperNav();

  const {
    SegmentLine,
    onSwiper,
    onSlideChange,
    onAutoplayTimeLeft,
    activeIndex,
  } = useSwiperSegmentProgress({ segments: 3 });

  const handleOnSwiper = useCallback((swiper: SwiperType) => {
    onSwiper(swiper);
    navOnSwiper(swiper);
  }, [navOnSwiper, onSwiper]);

  const handleOnChangeSwiper = useCallback((swiper: SwiperType) => {
    onSlideChange(swiper);
    navOnSlideChange(swiper);
  }, [onSlideChange, navOnSlideChange]);

  return (
    <section className={cn(styles.section)}>
      <div className="container">
        <BreadcrumbsUI />
      </div>
      <div className={styles.section__hero}>
        <SwiperUI
          delay={5000}
          spaceBetween={0}
          onSwiper={handleOnSwiper}
          onSlideChange={handleOnChangeSwiper}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          autoplay={false}
          slides={[
            <RoomBanner
              image={{
                url: 'https://cdn.utopiahotels.com/assets/images/pages/310120222109-lg.webp',
                alt: 'Стандартный номер в вилле',
              }}
              title={'Стандартный номер в вилле'}
              subtitle={'1 Спальня'}
              key={'3'}
            />,
            <RoomBanner
              image={{
                url: 'https://cdn.utopiahotels.com/assets/images/pages/310120222100-lg.webp',
                alt: 'Стандартный номер',
              }}
              title={'Стандартный номер'}
              subtitle={'1 Спальня'}
              key={'2'}
            />,
            <RoomBanner
              image={{
                url: 'https://cdn.utopiahotels.com/assets/images/pages/310120222133-lg.webp',
                alt: 'Junior Suite',
              }}
              title={'Junior Suite'}
              subtitle={'2 Спальни'}
              key={'3'}
            />,
          ]}
        />
        <div className={styles.section__hero_controls}>
          <div className={'flex flex-col gap-2'}>
            <div className={styles.section__hero_nav}>
              {prevButton}
              {SegmentLine}
              {nextButton}
            </div>
            <div className={styles.section__hero_pagination}>
              <p>{activeIndex + 1}</p><p><strong>/</strong></p><p>3</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <h2 className={styles.about__title}>Дверь ведущая на природу</h2>
        <p className={styles.about_paragraf}>
          Utopia World Hotel предлагает такое же уникальное жилое пространство, как и он сам. Мы обещаем отдых за
          гранью комфорта благодаря нашим специальным номерам с 6 различными концепциями.
        </p>
      </div>
      <div className={styles.grid}>
        <RoomCardFull />
        <RoomCardFull />
        <RoomCardFull />
        <RoomCardFull />
      </div>
    </section>
  );
}