import Image from 'next/image';

import styles from './styles.module.scss';

export function RoomCardFull() {
  return (
    <article className={styles.card}>
      <Image
        src="https://cdn.utopiahotels.com/assets/images/pages/310120222109-lg.webp"
        alt="Room"
        width={350}
        height={350}
        className={styles.card_image}
      />
      <div className={styles.card_content}>
        content
      </div>
    </article>
  );
}
