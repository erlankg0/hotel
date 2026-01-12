import Image from 'next/image';

import styles from './card.module.scss';

import type { RestaurantCardProps } from '../model/type';


export function RestaurantCard({
                                 area,
                                 media,
                                 slot,
                               }: RestaurantCardProps) {
  return (
    <article
      className={styles.card}
      style={{
        gridColumn: `${area.col} / span ${area.colSpan}`,
        gridRow: `${area.row} / span ${area.rowSpan}`,
      }}
    >
      {media && (
        <div className={styles.media}>
          {media.type === 'video' ? (
            <video
              src={media.url}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <Image
              src={media.url}
              alt={media.alt}
              fill
              sizes="100vw"
            />
          )}
        </div>
      )}
      <div className={styles.content}>{slot}</div>
    </article>
  );
}
