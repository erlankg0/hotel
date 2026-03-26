'use client';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useCallback } from 'react';

import { Button } from '@/shared/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from '@/shared/ui/drawer';
import { ImageUI } from '@/shared/ui/image';
import {
  Tabs,
  TabsContent,
  TabsTrigger,
  TabsList,
} from '@/shared/ui/tabs';
import { SwiperUI, useSwiperNav } from '@/widget/swiper';

import styles from './styles.module.scss';

import type { GalleryType } from '../model/type';
import type { Swiper as SwiperType } from 'swiper';


export function HotelGallery({ images, predImages, blocks }: GalleryType) {
  const [isOpen, setOpen] = useState<boolean>(false);
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
    <section className={styles.gallery}>
      <div className={styles.gallery__content}>
        <SwiperUI
          delay={5000}
          onSwiper={handleOnSwiper}
          onSlideChange={handleOnChange}
          slidesPerView={1}
          spaceBetween={0}
          slides={images.map((image) => (
            <ImageUI
              key={image.alt}
              alt={image.alt}
              src={image.url}
              classNames={styles.gallery__slide}
              aspectRatio={'2 / 1'}
            />
          ))}
        />
        <div className={styles.gallery__list}>
          <div className={styles.gallery__list__images}>
            {predImages.map((image) => (
              <ImageUI
                alt={image.alt}
                src={image.url}
                key={image.alt}
                size={'calc(100% - 2px)'}
                aspectRatio={'2 / 1'}
              />
            ))}
          </div>
          <Button type={'button'} onClick={() => setOpen(prev => !prev)} variant={'blur'}>
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
      <Drawer direction={'bottom'} open={isOpen} onOpenChange={setOpen}>
        <DrawerHeader>
          <DrawerTitle>Фотографии</DrawerTitle>
          <DrawerClose />
        </DrawerHeader>
        <DrawerContent>
          <Tabs defaultValue={blocks[0].title}>
            <TabsList className={'mx-auto w-full'}>
              {blocks.map((block) => (
                <TabsTrigger value={block.title} key={block.title}>{block.title}</TabsTrigger>
              ))}
            </TabsList>
            {blocks.map((block) => (
              <TabsContent value={block.title} key={block.title}>
                <DrawerTitle>{block.title}</DrawerTitle>
                <div className={styles.block}>
                  {block.images.map((image) => (
                    <ImageUI
                      src={image.url}
                      alt={image.alt}
                      key={image.alt}
                      size={'calc(100% - 2px)'}
                      aspectRatio={'2 / 1'}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </DrawerContent>
      </Drawer>
    </section>
  );
}