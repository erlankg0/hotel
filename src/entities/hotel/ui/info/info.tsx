import Link from 'next/link';

import styles from './styles.module.scss';

import type { HotelProps } from './model/type';

export function HotelInfo({ list }: HotelProps) {
  return (
    <div className={styles.info}>
      {list.map((item, index) => {
        const Icon = item.icon;
        return (
          <div className={styles.info__card} key={index}>
            {item.link ? (
              <Link {...item.link} className={styles.info__link}>
                <div className={styles.info__card__icon}>
                  <Icon size={24} />
                </div>
                <div className={styles.info__card__content}>
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </div>
              </Link>
            ) : (
              <>
                <div className={styles.info__card__icon}>
                  <Icon size={24} />
                </div>
                <div className={styles.info__card__content}>
                  <h4>{item.title}</h4>
                  <p>{item.content}</p>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}