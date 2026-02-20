import { Equal, Share2 } from 'lucide-react';

import { Button } from '@/shared/ui/button';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from '@/shared/ui/drawer';
import { ImageUI } from '@/shared/ui/image';
import { ScrollArea } from '@/shared/ui/scroll-area';
import { Separator } from '@/shared/ui/separator';

import styles from './styles.module.scss';


export function Gallery() {
  return (
    <section className={styles.gallery}>
      <article className={styles.gallery__content}>
        <ImageUI
          alt={''}
          src={'https://cdn.utopiahotels.com/assets/images/pages/310120222100-lg.webp'}
          size={'calc(50% - 2px)'}
          classNames={styles.gallery__main_image}
          aspectRatio={'2 / 1'}
        />
        <div className={styles.gallery_list_image}>
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
      </article>
      <Drawer direction={'bottom'}>
        <div className={styles.gallery__controls}>
          <Button className={styles.gallery__button}>
            <Share2 />
            <p>Поделиться</p>
          </Button>
          <DrawerTrigger asChild>
            <Button className={styles.gallery__button}>
              <Equal />
              <p>Посмотреть</p>
            </Button>
          </DrawerTrigger>
        </div>
        <DrawerContent className="h-dvh">
          <DrawerHeader className="flex">
            <DrawerClose asChild>
              <Button variant="ghost" size="icon">
                ✕
              </Button>
            </DrawerClose>
            <DrawerTitle>Стандартный номер в виллах</DrawerTitle>
          </DrawerHeader>

          <ScrollArea className="no-scrollbar overflow-y-auto px-4 flex-1">
            <div className="p-4">
              <h4 className="mb-4 text-sm leading-none font-medium">Фотографии</h4>
              <div className={styles.gallery_list_image}>
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
            </div>
            <Separator />
            <div className="p-4">
              <h4 className="mb-4 text-sm leading-none font-medium">Контент</h4>
              <div className={styles.gallery_list_image}>
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
            </div>
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </section>
  );
}