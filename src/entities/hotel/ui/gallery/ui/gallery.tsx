'use client';
import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useCallback, useRef, useState } from 'react';

import { cn } from '@/shared/lib/utils';
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
  const swiperRef = useRef<SwiperType | null>(null);
  const galleryBlocks = blocks.length > 0 ? blocks : [{ title: 'Все фото', images }];
  const previewImages = predImages.length > 0 ? predImages : images.slice(0, 2);
  const totalImages = images.length;
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState(galleryBlocks[0]?.title ?? '');
  const currentSlideLabel = totalImages > 0 ? String(activeSlide + 1).padStart(2, '0') : '00';
  const totalSlidesLabel = String(totalImages).padStart(2, '0');
  const {
    onSwiper,
    onSlideChange,
    prev,
    next,
    isStart,
    isEnd,
  } = useSwiperNav();

  const handleOnSwiper = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
    onSwiper(swiper);
    setActiveSlide(swiper.realIndex);
  }, [onSwiper]);

  const handleOnChange = useCallback((swiper: SwiperType) => {
    onSlideChange(swiper);
    setActiveSlide(swiper.realIndex);
  }, [onSlideChange]);

  const handlePreviewClick = useCallback((index: number) => {
    swiperRef.current?.slideTo(index);
  }, []);

  const activeBlock = galleryBlocks.find((block) => block.title === activeTab) ?? galleryBlocks[0];

  return (
    <section className={styles.gallery}>
      <div className={styles.gallery__content}>
        <div className={styles.gallery__stage}>
          <SwiperUI
            delay={5000}
            onSwiper={handleOnSwiper}
            onSlideChange={handleOnChange}
            slidesPerView={1}
            spaceBetween={0}
            slides={images.map((image, index) => (
              <div key={`${image.alt}-${index}`} className={styles.gallery__slide_card}>
                <ImageUI
                  alt={image.alt}
                  src={image.url}
                  classNames={styles.gallery__slide}
                  aspectRatio={'2 / 1'}
                />
                <div className={styles.gallery__slide_overlay} />
              </div>
            ))}
          />

          <div className={styles.gallery__caption}>
            <p className={styles.gallery__eyebrow}>Hotel Gallery</p>
            <div className={styles.gallery__caption_row}>
              <p className={styles.gallery__title}>Визуальное настроение отеля</p>
              <span className={styles.gallery__counter}>
                {currentSlideLabel} / {totalSlidesLabel}
              </span>
            </div>
          </div>

          <nav className={styles.gallery__controls} aria-label="Навигация по галерее">
            <div className={styles.gallery__controls__buttons}>
              <Button
                variant={'blur'}
                disabled={isStart}
                onClick={prev}
                className={cn(styles.gallery__nav_button, styles.gallery__controls__left)}
                aria-label="Предыдущее фото"
              >
                <ChevronLeft size={16} />
              </Button>
              <Button
                variant={'blur'}
                disabled={isEnd}
                onClick={next}
                className={cn(styles.gallery__nav_button, styles.gallery__controls__right)}
                aria-label="Следующее фото"
              >
                <ChevronRight size={16} />
              </Button>
            </div>
          </nav>
        </div>

        <aside className={styles.gallery__list}>
          <div className={styles.gallery__list__header}>
            <p>Подборка</p>
            <span>{totalImages} фото</span>
          </div>
          <div className={styles.gallery__list__images}>
            {previewImages.map((image, index) => (
              <button
                type="button"
                key={`${image.alt}-${index}`}
                className={cn(
                  styles.gallery__preview,
                  activeSlide === index && styles['gallery__preview--active'],
                )}
                onClick={() => handlePreviewClick(index)}
                aria-label={`Открыть фото ${index + 1}`}
              >
                <ImageUI
                  alt={image.alt}
                  src={image.url}
                  aspectRatio={'2 / 1'}
                />
                <span className={styles.gallery__preview_overlay} />
              </button>
            ))}
          </div>
          <Button
            type={'button'}
            onClick={() => setOpen(true)}
            variant={'blur'}
            className={styles.gallery__open_button}
            aria-label={`Открыть галерею, всего ${totalImages} фото`}
          >
            <Camera size={16} />
            <span>Все фото</span>
            <span className={styles.gallery__open_count}>{totalImages}</span>
          </Button>
        </aside>
      </div>
      <Drawer direction={'bottom'} open={isOpen} onOpenChange={setOpen}>
        <DrawerContent className={styles.gallery__drawer}>
          <DrawerHeader className={styles.gallery__drawer_header}>
            <div className={styles.gallery__drawer_heading}>
              <DrawerTitle className={styles.gallery__drawer_title}>Фотографии</DrawerTitle>
              <p className={styles.gallery__drawer_description}>
                {activeBlock?.title ?? 'Все фото'} · {activeBlock?.images.length ?? totalImages} снимков
              </p>
            </div>
            <DrawerClose asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className={styles.gallery__drawer_close}
                aria-label="Закрыть галерею"
              >
                <X size={18} />
              </Button>
            </DrawerClose>
          </DrawerHeader>
          <div className={styles.gallery__drawer_body}>
            <Tabs value={activeTab} onValueChange={setActiveTab} className={styles.gallery__tabs}>
              <TabsList className={styles.gallery__tabs_list}>
                {galleryBlocks.map((block) => (
                  <TabsTrigger
                    value={block.title}
                    key={block.title}
                    className={styles.gallery__tabs_trigger}
                  >
                    {block.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {galleryBlocks.map((block) => (
                <TabsContent
                  value={block.title}
                  key={block.title}
                  className={styles.gallery__tabs_content}
                >
                  <div className={styles.gallery__block_header}>
                    <h3 className={styles.gallery__block_title}>{block.title}</h3>
                    <span className={styles.gallery__block_count}>{block.images.length} фото</span>
                  </div>
                  <div className={styles.block}>
                    {block.images.map((image, index) => (
                      <div key={`${image.alt}-${index}`} className={styles.block__item}>
                        <ImageUI
                          src={image.url}
                          alt={image.alt}
                          aspectRatio={'2 / 1'}
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </DrawerContent>
      </Drawer>
    </section>
  );
}
