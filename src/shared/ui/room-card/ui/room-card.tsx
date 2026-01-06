import Image from 'next/image';

import styles from './styles.module.scss';

import type { RoomCartType } from '../model/type';

export function RoomCard(props: RoomCartType) {
  const { url, title } = props;
  return (
    <article className={styles.card}>
      <Image
        src={url}
        alt={title}
        width={320}
        height={450}
        className={styles.image}
      />
    </article>
  );
}