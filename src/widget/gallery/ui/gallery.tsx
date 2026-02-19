import { Button } from '@/shared/ui/button';
import {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
} from '@/shared/ui/drawer';
import { ImageUI } from '@/shared/ui/image';

import styles from './styles.module.scss';

export function Gallery() {
  return (
    <section>
      <article className={styles.gallery}>
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
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

    </section>
  );
}