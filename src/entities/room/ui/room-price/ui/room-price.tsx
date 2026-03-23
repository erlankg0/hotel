'use client';

import { ChevronLeft, ChevronRight, MartiniIcon, Tv, Wifi } from 'lucide-react';
import { useCallback } from 'react';

import { Air, Balcony, Cosmetics, Minibar, Safe, Tree } from '@/shared/icons';
import { Button } from '@/shared/ui/button';
import { ImageUI } from '@/shared/ui/image';
import { Separator } from '@/shared/ui/separator';
import { SwiperUI, useSwiperNav } from '@/widget/swiper';

import styles from './styles.module.scss';

import type { Swiper as SwiperType } from 'swiper';

const IMAGES = [
  'hotel.webp',
  'laguna.webp',
  'poster.jpg',
  'beach.webp',
  'turkish.webp',
];

const gallery = IMAGES.map((image) => `/images/${image}`);

const FEATURES = [
  { label: 'Море или Лес', Icon: Tree },
  { label: 'Балкон', Icon: Balcony },
  { label: 'Кондиционер', Icon: Air },
  { label: 'Wi-Fi', Icon: Wifi },
  { label: 'Мини-бар', Icon: Minibar },
  { label: 'Косметика', Icon: Cosmetics },
  { label: '32-дюймовый ТВ', Icon: Tv },
  { label: 'Сейф', Icon: Safe },
];


export function RoomPrice() {
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
    <article className={styles.card}>
      <div className={styles.card__slide}>
        <SwiperUI
          delay={5000}
          spaceBetween={0}
          onSwiper={handleOnSwiper}
          onSlideChange={handleOnChange}
          slides={gallery.map((image) => (
            <ImageUI src={image} alt={image} key={image} aspectRatio={'2 / 1'} />))
          }
        />
        <nav className={styles.card__slide_left}>
          <Button variant={'blur'} disabled={isStart} onClick={prev} className={styles.button}>
            <ChevronLeft size={16} />
          </Button>
        </nav>
        <nav className={styles.card__slide__right}>
          <Button variant={'blur'} disabled={isEnd} onClick={next} className={styles.button}>
            <ChevronRight size={16} />
          </Button>
        </nav>
      </div>
      <div className={styles.card__inner}>
        <h3 className={styles.title}>Villa standard oda</h3>
        <Separator />
        <article className={'flex flex-row gap-2 items-center py-6'}>
          <MartiniIcon size={24} />
          <p className={styles.description}>Ульта все включено</p>
        </article>
        <div className={'flex flex-row justify-between py-6'}>
          <ul className={styles.info}>
            {FEATURES.map((feature) => {
              const Icon = feature.Icon;
              return (
                <li className={styles.info__item} key={feature.label}>
                  <p>{feature.label}</p>
                  <Icon size={16} />
                </li>
              );
            })}
          </ul>
          <div>
            <p>1000 TL</p>
          </div>
        </div>
      </div>
    </article>
  );
}