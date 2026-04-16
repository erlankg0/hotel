import { MartiniIcon } from 'lucide-react';

import { AMENITY_ICONS } from '@/shared/const/icon_amenities';
import { Separator } from '@/shared/ui/separator';

import styles from './styles.module.scss';

import type { RoomType } from '../../model/type';
import { categoryMap } from '../../model/type';
import type { ReactNode } from 'react';

export function RoomInfo({ title, uai, capacity, category, amenity, slot }: Partial<RoomType> & { slot?: ReactNode }) {
  return (
    <>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.title}>{category}</p>
      </div>
      <Separator />
      {uai && (
        <div className={styles.card__row}>
          <MartiniIcon size={24} />
          <p className={styles.description}>Ультра все включено</p>
        </div>
      )}
      {category && (
        <div className={styles.card__row}>
          <p className={styles.description}>{categoryMap[category]}</p>
        </div>
      )}
      <div>
        <p>Максимальное размещения{capacity} + 1 ребенок</p>
      </div>
      <div className={'flex flex-row justify-between'}>
        <ul className={styles.info}>
          {amenity && amenity.map((feature) => {
            const Icon = AMENITY_ICONS[feature.icon];
            return (
              <li className={styles.info__item} key={feature.id}>
                <p>{feature.name}</p>
                <Icon size={16} />
              </li>
            );
          })}
        </ul>
        {slot}
      </div>
    </>
  );
}