import type { ReactNode } from 'react';

export type GridArea = {
  col: 1 | 2 | 3 | 4 | 5 | 6;
  colSpan: 1 | 2 | 3 | 4 | 5 | 6;
  row: 1 | 2 | 3 | 4 | 5;
  rowSpan: 1 | 2 | 3 | 4 | 5;
};


export type RestaurantCardProps = {
  media: {
    url: string;
    alt: string;
    type: 'video' | 'image';
  },
  slot: ReactNode,
  area: GridArea;
}