'use client';

import { MartiniIcon, ChartBar } from 'lucide-react';
import Link from 'next/link';
import { useCallback } from 'react';

import { AMENITY_ICONS } from '@/shared/const/icon_amenities';
import { Button } from '@/shared/ui/button/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { Separator } from '@/shared/ui/separator';
import { useSwiperNav } from '@/widget/swiper';

import styles from './styles.module.scss';

import type { RoomType } from '../../../model/type';
import type { Swiper as SwiperType } from 'swiper';


export function RoomPrice({
                            id,
                            title,
                            uai,
                            amenity,
                            capacity,
                            category,
                          }: RoomType) {
  const {
    onSwiper,
    onSlideChange,
  } = useSwiperNav();

  const handleOnSwiper = useCallback((swiper: SwiperType) => {
    onSwiper(swiper);
  }, [onSwiper]);

  const handleOnChange = useCallback((swiper: SwiperType) => {
    onSlideChange(swiper);
  }, [onSlideChange]);

  return (
    <article className={styles.card} id={id}>
      <div className={styles.card__inner}>
        <h3 className={styles.title}>{title}</h3>
        <Separator />
        {uai && (
          <div className={styles.card__row}>
            <MartiniIcon size={24} />
            <p className={styles.description}>Ультра все включено</p>
          </div>
        )}
        {category && (
          <div className={styles.card__row}>
            <p className={styles.description}>{category}</p>
          </div>
        )}
        <div>
          <p>Максимальное размещения{capacity} + 1 ребенок</p>
        </div>
        <div className={'flex flex-row justify-between'}>
          <ul className={styles.info}>
            {amenity.map((feature) => {
              const Icon = AMENITY_ICONS[feature.icon];
              return (
                <li className={styles.info__item} key={feature.id}>
                  <p>{feature.name}</p>
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
          <Link href={`/rooms/${id}`}>Подробнее</Link>
          <Button type={'button'} variant={'blue'}>Бронировать</Button>
        </footer>
      </div>
    </article>
  );
}