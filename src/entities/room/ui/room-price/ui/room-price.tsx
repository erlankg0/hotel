'use client';

import { ChevronLeft, ChevronRight, MartiniIcon, Tv, Wifi, ChartBar } from 'lucide-react';
import Link from 'next/link';
import { useCallback } from 'react';

import { Air, Balcony, Cosmetics, Minibar, Safe, Tree } from '@/shared/icons';
import { Button } from '@/shared/ui/button';
import { ImageUI } from '@/shared/ui/image';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
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
        <div className={styles.card__row}>
          <MartiniIcon size={24} />
          <p className={styles.description}>Ульта все включено</p>
        </div>
        <div className={'flex flex-row justify-between'}>
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
          <article className={styles.price}>
            <div className={styles.price__info}>
              <span className={styles.price__discount}>-20%</span>
              <span className={styles.price__old}>1200 TL</span>
            </div>

            <div className={styles.price__current}>
              <Popover>
                <PopoverTrigger asChild>
                  <button className={styles.price__infoBtn}>
                    <ChartBar size={14} />
                  </button>
                </PopoverTrigger>

                <PopoverContent className={styles.price__popover}>
                  <ul>
                    <li>01.04.2026 <span>100 TL</span></li>
                    <li>01.04.2026 <span>100 TL</span></li>
                    <li>01.04.2026 <span>100 TL</span></li>
                    <li>01.04.2026 <span>100 TL</span></li>
                    <li>01.04.2026 <span>110 TL</span></li>
                  </ul>
                  <Separator />
                  <p>Цены; налог на проживание и другие налоги включены в стоимость..</p>
                </PopoverContent>
              </Popover>

              <div>
                1000 <span className={styles.price__currency}>TL</span>
              </div>
            </div>

            <div className={styles.meta}>
              <span>2 Yetişkin</span>
              <span className={styles.dot}>•</span>
              <span>9 Gece</span>
            </div>
          </article>
        </div>
        <footer className={styles.card__footer}>
          <Link href={'/rooms/1'}>Подробнее</Link>
          <Button type={'button'} variant={'blue'}>Бронировать</Button>
        </footer>
      </div>
    </article>
  );
}