import { Bath, Scan, Users } from 'lucide-react';
import { HiOutlineHome } from 'react-icons/hi2';
import { MdBalcony } from 'react-icons/md';

import { BED_TYPE_LABEL } from '../../model/type';
import { RoomCard } from '../card/RoomCard';

import styles from './tab.module.scss';

import type { RoomTabData } from '../../model/type';


export function RoomTab(props: RoomTabData) {
  const { media, description, title, info } = props;
  const {
    size,
    beds,
    bedRoomCount,
    balcony,
    bathCount,
    maxCapacity,
  } = info;

  return (
    <section className={styles.tab}>
      <ul className={styles.tab__list}>
        {media.slice(0, 3).map((content, index) => (
          <li key={index}>
            <RoomCard {...content} />
          </li>
        ))}

        <li className={styles.tab__content}>
          <div className={styles.tab__info}>
            <h4 className={styles.tab__title}>{title}</h4>
            <ul className={styles.tab__features}>
              <li className={styles.tab__feature}>
                <Scan />
                <span>{size} м²</span>
              </li>

              <li className={styles.tab__feature}>
                <div className={styles.tab__feature_bed}>
                  {beds.map((bed) => {
                    const Icon = BED_TYPE_LABEL[bed.type];

                    return (
                      <div key={bed.type} className={styles.bedItem}>
                        <Icon />
                        × {bed.count}
                      </div>
                    );
                  })}
                </div>

              </li>

              <li className={styles.tab__feature}>
                <HiOutlineHome />
                <span>{bedRoomCount} спальни</span>
              </li>

              <li className={styles.tab__feature}>
                <Bath />
                <span>{bathCount} ванных</span>
              </li>

              <li className={styles.tab__feature}>
                <Users />
                <span>{maxCapacity} взрослых + 1 ребёнок</span>
              </li>

              {balcony && (
                <li className={styles.tab__feature}>
                  <MdBalcony />
                  <span>Балкон</span>
                </li>
              )}
            </ul>
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
