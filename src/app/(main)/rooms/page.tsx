'use client';

import { useCallback } from 'react';

import { RoomBanner, stda, stdv, junior, penthouse, RoomCardFull } from '@/entities/room';
import { cn } from '@/shared/lib/utils';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/shared/ui/tabs';
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
    Segments,
    onSwiper,
    onSlideChange,
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
    <section className={cn(styles.section, 'margin_top')}>
      <div className="container">
        <BreadcrumbsUI />
      </div>
      <div className={styles.section__hero}>
        <SwiperUI
          delay={5000}
          spaceBetween={0}
          onSwiper={handleOnSwiper}
          onSlideChange={handleOnChangeSwiper}
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
              {Segments}
              {nextButton}
            </div>
            <div className={styles.section__hero_pagination}>
              <p>{activeIndex + 1}</p><p><strong>/</strong></p><p>3</p>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue={'room'} className={'bg-[#F8F8F8]'}>
        <div className={styles.about}>
          <h2 className={styles.about__title}>&#34;Окунуться в море и погрузиться в сон... вот все, что я
            хочу!&#34;</h2>
          <p className={styles.about_paragraf}>
            Utopia World Hotel предлагает такое же уникальное жилое пространство, как и он сам. Мы обещаем отдых за
            гранью комфорта благодаря нашим специальным номерам.
          </p>
        </div>
        <TabsList className={'mx-auto'}>
          <TabsTrigger value={'room'}>Номера</TabsTrigger>
          <TabsTrigger value={'suite'}>Suite</TabsTrigger>
        </TabsList>
        <TabsContent value={'room'}>
          <div className={styles.accommodations}>
            <p className={styles.accommodations_title}>Odalar</p>
            <div className={styles.accommodations_row}>
              <RoomCardFull {...stdv.info} image={stdv.media[0].images} key={'1'} title={stdv.title}
                            area={stdv.info.size} />
              <RoomCardFull {...stda.info} image={stda.media[0].images} key={'1'} title={stda.title}
                            area={stda.info.size} />
            </div>
          </div>
        </TabsContent>
        <TabsContent value={'suite'}>
          <div className={styles.accommodations}>
            <p className={styles.accommodations_title}>Suite </p>
            <div className={styles.accommodations_row}>
              <RoomCardFull {...junior.info} image={junior.media[0].images} key={'1'} title={junior.title}
                            area={junior.info.size} />
              <RoomCardFull {...penthouse.info} image={penthouse.media[0].images} key={'1'} title={penthouse.title}
                            area={penthouse.info.size} />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}