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
          <video
            src={media.url}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      )}
      <div className={styles.content}>{slot}</div>
    </article>
  );
}
