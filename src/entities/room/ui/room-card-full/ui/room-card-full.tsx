import { Bath, Scan, Users } from 'lucide-react';
import Link from 'next/link';
import { HiOutlineHome } from 'react-icons/hi2';

import { ImageUI } from '@/shared/ui/image';

import { BED_TYPE_LABEL } from '../../../model/type';

import styles from './styles.module.scss';

import type { RoomType } from '../model/type';

export function RoomCardFull({
                               image,
                               beds,
                               area,
                               bathCount,
                               bedRoomCount,
                               title,
                               maxCapacity,
                             }: RoomType) {
  return (
    <article className={styles.card}>
      <Link href={'#'} >
        <ImageUI src={image.url} alt={image.alt} size={'350px'} />
      </Link>

      <div className={styles.card__content}>
        <h3 className={styles.card__title}>{title}</h3>
        <div>
          <ul className={styles.card__features}>
            <p className={styles.card__features_text}>Особенности</p>
            <li className={styles.card__features_item}>
              <Scan size={24} />
              <span>{area} м²</span>
            </li>
            <li className={styles.card__features_item}>
              <Bath size={24} />
              <span>{bathCount} ванных</span>
            </li>
            <li className={styles.card__features_item}>
              <HiOutlineHome size={24} />
              <span>{bedRoomCount} спальни</span>
            </li>
            <li className={styles.card__features_item}>
              <Users size={24} />
              <span>{maxCapacity} взрослых + 1 ребёнок</span>
            </li>

            <li className={styles.card__features_item}>
              {beds.map((bed) => {
                const Icon = BED_TYPE_LABEL[bed.type];

                return (
                  <div key={bed.type} className={'flex items-center'}>
                    <Icon size={24} />
                    × {bed.count}
                  </div>
                );
              })}
            </li>
          </ul>
        </div>

        <Link className={styles.link} href={'#'}>Посмотреть</Link>
      </div>
    </article>
  );
}
