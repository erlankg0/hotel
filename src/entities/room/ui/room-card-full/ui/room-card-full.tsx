import Image from 'next/image';

import styles from './styles.module.scss';

export function RoomCardFull() {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src="https://cdn.utopiahotels.com/assets/images/pages/310120222109-lg.webp"
          alt="Room"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={styles.image}
        />
      </div>

      <div className={styles.card_content}>
        content
      </div>
    </article>
  );
}
