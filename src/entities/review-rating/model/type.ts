import type { ReactNode } from 'react';

export type ReviewRatingType = {
  icon?: ReactNode;
  rating: number;
  maxRating: number;
  source: string;
  review_count: number;
}