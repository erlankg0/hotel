import Image from 'next/image';
import Link from 'next/link';

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

      <div className={styles.card__content}>
        <div>
          <h3>Стандартный номер в виллах</h3>
          <ul>

          </ul>
        </div>

        <Link href={'#'}>Посмотреть</Link>
      </div>
    </article>
  );
}
