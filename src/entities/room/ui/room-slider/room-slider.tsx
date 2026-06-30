'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useMemo } from 'react';

import { Button } from '@/shared/ui/button/button';
import { ImageUI } from '@/shared/ui/image';
import { SwiperUI, useSwiperNav } from '@/widget/swiper';

import styles from './styles.module.scss';

import type { FileType } from '@/shared/types/types';
import type { Swiper as SwiperType } from 'swiper';


export function RoomSlider({ photos }: { photos: FileType[] }) {
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

  const slides = useMemo(() =>
      photos.map((image) => (
        <ImageUI
          key={image.id}
          src={image.url}
          alt={image.format}
          aspectRatio="2 / 1"
        />
      )),
    [photos],
  );

  if (!photos.length) {
    return null;
  }


  return (
    <div className={styles.slide}>
      <SwiperUI
        delay={5000}
        spaceBetween={0}
        onSwiper={handleOnSwiper}
        onSlideChange={handleOnChange}
        slides={slides}
      />
      {slides.length > 2 && (
        <>
          <nav className={styles.slide__left}>
            <Button variant={'blur'} disabled={isStart} onClick={prev} className={styles.button}>
              <ChevronLeft size={16} />
            </Button>
          </nav>
          <nav className={styles.slide__right}>
            <Button variant={'blur'} disabled={isEnd} onClick={next} className={styles.button}>
              <ChevronRight size={16} />
            </Button>
          </nav>
        </>
      )}
    </div>
  );
}