import { Clock, MapPin } from 'lucide-react';

import styles from './styles.module.scss';

export function HotelInfo() {
  return (
    <div className={styles.info}>
      <div className={styles.info__card}>
        <div className={styles.info__card__icon}>
          <Clock size={24} />
        </div>
        <div className={styles.info__card__content}>
          <h4>Заезд</h4>
          <p>14:00</p>
        </div>
      </div>

      <div className={styles.info__card}>
        <div className={styles.info__card__icon}>
          <Clock size={24} />
        </div>
        <div className={styles.info__card__content}>
          <h4>Выезд</h4>
          <p>12:00</p>
        </div>
      </div>

      <div className={styles.info__card}>
        <div className={styles.info__card__icon}>
          <MapPin size={24} />
        </div>
        <div className={styles.info__card__content}>
          <h4>Местоположение</h4>
          <p>Kargıcak, Аланья</p>
        </div>
      </div>
    </div>
  );
}