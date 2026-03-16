import { cn } from '@/shared/lib/utils';
import { ImageUI } from '@/shared/ui/image';
import { Text } from '@/shared/ui/text';
import { SwiperUI } from '@/widget/swiper';

import styles from './page.module.scss';

const IMAGES = [
  'hotel.webp',
  'laguna.webp',
  'poster.jpg',
  'beach.webp',
  'turkish.webp',
];

const gallery = IMAGES.map((image) => `/images/${image}`);

export default async function Page() {
  return (
    <section className={cn('page')}>
      <article className={cn('col', 'container')}>
        <Text tag={'h1'} variant={'title'}>
          Utopia World
        </Text>
        <div className={styles.gallery}>
          <article className={styles.gallery__content}>
            <SwiperUI
              delay={5000}
              slidesPerView={1}
              slides={gallery.map((image) => (
                <ImageUI
                  key={image}
                  alt={'Фотографии отеля'}
                  src={image}
                  classNames={styles.gallery__slide}
                  aspectRatio={'2 / 1'}
                />
              ))} />

            <div className={styles.gallery__list}>
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
        </div>

      </article>
    </section>
  );
}