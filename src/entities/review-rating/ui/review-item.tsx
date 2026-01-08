import styles from './revie-item.module.scss';

import type { ReviewRatingType } from '../model/type';


export function ReviewItem(props: ReviewRatingType) {
  const {
    source,
    review_count,
    icon,
    rating,
    maxRating,
  } = props;

  return (
    <div className={styles.review}>
      <p className={styles.review__source}>{source}</p>
      <span className={styles.review__icon}>{icon}</span>
      <p className={styles.review__count}>{review_count} reviews</p>
      <p className={styles.review__rating}>
        {rating} <span>/ {maxRating}</span>
      </p>
    </div>
  );
}
