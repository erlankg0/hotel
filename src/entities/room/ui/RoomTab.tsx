import { RoomCard } from './RoomCard';
import styles from './tab.module.scss';

import type { RoomTabData } from '../model/type';

export function RoomTab(props: RoomTabData) {
  const { images, description, title } = props;

  return (
    <section className={styles.tab}>
      <ul className={styles.tab__list}>
        {images.slice(0, 3).map((image) => (
          <li key={image.id}>
            <RoomCard {...image} />
          </li>
        ))}

        <li className={styles.tab__content}>
          <div className={styles.tab__info}>
            <h4 className={styles.tab__title}>{title}</h4>
            <div>
              тут инфо отеля
            </div>
            <p className={styles.tab__description}>{description}</p>
          </div>

          <button type={'button'} className={styles.tab__button}>
            Подробнее о номере
          </button>
        </li>
      </ul>
    </section>
  );
}
