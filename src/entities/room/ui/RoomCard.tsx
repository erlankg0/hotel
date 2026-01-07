import Image from 'next/image';

import styles from './card.module.scss';

import type { RoomCard } from '../model/type';

export function RoomCard(props: RoomCard) {
  const { url, alt } = props;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={url}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={styles.image}
        />
      </div>
    </article>
  );
}
