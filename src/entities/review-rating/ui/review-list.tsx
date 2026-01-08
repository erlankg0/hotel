import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/shared/ui/hover-card';

import { ReviewItem } from './review-item';
import styles from './review-list.module.scss';

export function ReviewList() {
  return (
    <HoverCard>
      <HoverCardTrigger className={styles.trigger}>
        <span className={styles.trigger__rating}>4.7</span>
        <span className={styles.trigger__divider}>/</span>
        <span className={styles.trigger__max}>5</span>
        Отзывы
      </HoverCardTrigger>

      <HoverCardContent className={styles.content}>
        <ReviewItem
          source="TripAdvisor"
          review_count={500}
          maxRating={5}
          rating={4.4}
        />
        <ReviewItem
          source="Booking"
          review_count={820}
          maxRating={10}
          rating={9.1}
        />
        <ReviewItem
          source="Google"
          review_count={1200}
          maxRating={5}
          rating={4.6}
        />
      </HoverCardContent>
    </HoverCard>
  );
}
