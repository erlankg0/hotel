import { ImageUI } from '@/shared/ui/image';
import { Separator } from '@/shared/ui/separator';
import { SwiperUI } from '@/widget/swiper';

import styles from './styles.module.scss';

const IMAGES = [
  'hotel.webp',
  'laguna.webp',
  'poster.jpg',
  'beach.webp',
  'turkish.webp',
];

const gallery = IMAGES.map((image) => `/images/${image}`);


export function RoomPrice() {
  return (
    <article className={styles.card}>
      <div className={styles.card__slide}>
        <SwiperUI delay={5000} slides={gallery.map((image) => (
          <ImageUI src={image} alt={image} key={image} aspectRatio={'2 / 1'} />))} />
      </div>
      <div className={styles.card__inner}>
        <h3>Villa standart oda</h3>
        <Separator />
      </div>
    </article>
  );
}