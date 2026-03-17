'use client';
import { useCallback } from 'react';

import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { ImageUI } from '@/shared/ui/image';
import { Text } from '@/shared/ui/text';
import { SwiperUI, useSwiperNav } from '@/widget/swiper';

import styles from './page.module.scss';

import type { Swiper as SwiperType } from 'swiper';


const IMAGES = [
  'hotel.webp',
  'laguna.webp',
  'poster.jpg',
  'beach.webp',
  'turkish.webp',
];

const gallery = IMAGES.map((image) => `/images/${image}`);

export default function Page() {

  const {
    onSwiper,
    onSlideChange,
    prev,
    next,
    isStart,
    isEnd,
  } = useSwiperNav();

  const handleOnSwiper = useCallback((swiper: SwiperType) => {
    onSwiper(swiper);
  }, [onSwiper]);

  const handleOnChange = useCallback((swiper: SwiperType) => {
    onSlideChange(swiper);
  }, [onSlideChange]);


  return (
    <section className={cn('page', 'panel', styles.page)}>
      <article className={cn('col', 'container')}>
        <Text tag={'h1'} variant={'title'}>
          Utopia World
        </Text>
        <div className={styles.gallery}>
          <article className={styles.gallery__content}>
            <SwiperUI
              delay={5000}
              onSwiper={handleOnSwiper}
              onSlideChange={handleOnChange}
              slidesPerView={1}
              spaceBetween={0}
              slides={gallery.map((image) => (
                <ImageUI
                  key={image}
                  alt={'Фотографии отеля'}
                  src={image}
                  classNames={styles.gallery__slide}
                  aspectRatio={'2 / 1'}
                />
              ))}
            />
            <div className={styles.gallery__list}>
              <ImageUI
                alt={''}
                src={'https://cdn.utopiahotels.com/assets/images/pages/310120222100-lg.webp'}
                size={'calc(100% - 2px)'}
                aspectRatio={'2 / 1'}
              />
              <ImageUI
                alt={''}
                src={'https://cdn.utopiahotels.com/assets/images/pages/310120222100-lg.webp'}
                size={'calc(100% - 2px)'}
                aspectRatio={'2 / 1'}
              />
            </div>
            <div className={styles.gallery__controls}>
              <Button disabled={isStart} onClick={prev}>prev</Button>
              <Button disabled={isEnd} onClick={next}>next</Button>
            </div>
          </article>
        </div>

      </article>
    </section>
  );
}