'use client';

import { MartiniIcon } from 'lucide-react';

import { AMENITY_ICONS } from '@/shared/const/icon_amenities';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { Separator } from '@/shared/ui/separator';

import { categoryLabelMap } from '../../model/type';

import styles from './styles.module.scss';

import type { RoomType } from '../../model/type';
import type { ReactNode } from 'react';

const VISIBLE_AMENITIES_COUNT = 6;

export function RoomInfo({
                           title,
                           uai,
                           capacity,
                           category,
                           amenity,
                           slot,
                         }: Partial<RoomType> & { slot?: ReactNode }) {
  const amenities = amenity ?? [];
  const visibleAmenities = amenities.slice(0, VISIBLE_AMENITIES_COUNT);
  const hiddenAmenities = amenities.slice(VISIBLE_AMENITIES_COUNT);

  return (
    <div className={styles.inner}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {category && (
          <p className={styles.badge}>
            {categoryLabelMap[category]}
          </p>
        )}
      </div>

      <Separator className={styles.separator} />

      {uai && (
        <div className={styles.row}>
          <MartiniIcon size={20} />
          <p>Ультра всё включено</p>
        </div>
      )}

      <div className={styles.capacity}>
        Максимальное размещение: <strong>{capacity}</strong> + 1 ребенок
      </div>

      <div className={styles.footer}>
        <div className={styles.amenities}>
          <ul className={styles.info}>
            {visibleAmenities.map((feature) => {
              const Icon = AMENITY_ICONS[feature.icon];

              return (
                <li className={styles.infoItem} key={feature.id}>
                  <div className={styles.iconBox}>
                    <Icon size={14} />
                  </div>
                  <span>{feature.name}</span>
                </li>
              );
            })}
          </ul>

          {hiddenAmenities.length > 0 && (
            <Popover>
              <PopoverTrigger asChild>
                <button className={styles.moreButton} type="button">
                  Еще {hiddenAmenities.length}
                </button>
              </PopoverTrigger>

              <PopoverContent align="start" className={styles.popover} sideOffset={10}>
                <p className={styles.popoverTitle}>Дополнительные удобства</p>
                <ul className={styles.popoverList}>
                  {hiddenAmenities.map((feature) => {
                    const Icon = AMENITY_ICONS[feature.icon];

                    return (
                      <li className={styles.popoverItem} key={feature.id}>
                        <div className={styles.iconBox}>
                          <Icon size={14} />
                        </div>
                        <span>{feature.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </PopoverContent>
            </Popover>
          )}
        </div>

        {slot && <div className={styles.slot}>{slot}</div>}
      </div>
    </div>
  );
}
