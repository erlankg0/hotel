'use client';
import { ChevronRight, ChevronLeft, Camera } from 'lucide-react';
import { useCallback } from 'react';

import { RoomPrice } from '@/entities/room';
import { PriceRequest } from '@/features/price';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { ImageUI } from '@/shared/ui/image';
import { Text } from '@/shared/ui/text';
import { Cancel } from '@/widget/cancel';
import { Places } from '@/widget/places';
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
    <main className={cn('page', 'panel', styles.page)}>
      <section className={cn('col', 'container')}>
        <Text tag={'h1'} variant={'title'}>
          Utopia World
        </Text>
        <section className={styles.gallery}>
          <div className={styles.gallery__content}>
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
              <div className={styles.gallery__list__images}>
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
              <Button variant={'blur'}>
                <Camera size={16} />
                <p>Галерея</p>
              </Button>
            </div>
            <nav className={styles.gallery__controls}>
              <div className={styles.gallery__controls__buttons}>
                <Button variant={'blur'} disabled={isStart} onClick={prev} className={styles.gallery__controls__left}>
                  <ChevronLeft size={16} />
                </Button>
                <Button variant={'blur'} disabled={isEnd} onClick={next} className={styles.gallery__controls__right}>
                  <ChevronRight size={16} />
                </Button>
              </div>
            </nav>
          </div>
        </section>
        <PriceRequest />
        <Cancel />
        <section>
          <Text tag={'h2'} variant={'title'}>
            Номера
          </Text>

          <div>
            <div className={'flex flex-col gap-6'}>
              <RoomPrice />
              <RoomPrice />
              <RoomPrice />
              <RoomPrice />
            </div>
          </div>
        </section>
        <Places />
      </section>
    </main>
  );
}