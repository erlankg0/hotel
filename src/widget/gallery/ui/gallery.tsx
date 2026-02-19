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
      <Drawer direction={'bottom'}>
        <DrawerTrigger asChild>
          <Button>Посмотреть</Button>
        </DrawerTrigger>
        <DrawerContent className="h-dvh">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>

          <div className="no-scrollbar overflow-y-auto px-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <p
                key={index}
                className="style-lyra:mb-2 style-lyra:leading-relaxed mb-4 leading-normal"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            ))}
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

    </section>
  );
}