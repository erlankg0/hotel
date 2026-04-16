import Link from 'next/link';

import { Button } from '@/shared/ui/button';

import styles from './styles.module.scss';

import type { FC, ReactNode } from 'react';

type RoomCardType = FC<{ children: ReactNode }> & {
  Slider: FC<{ children: ReactNode }>;
  Info: FC<{ children: ReactNode, id: string }>;
  Price: FC<{ children: ReactNode }>;
};


export const RoomCard = (({ children }) => {
  return <article className={styles.card}>{children}</article>;
}) as RoomCardType;


RoomCard.Slider = ({ children }) => {
  return (<div className={styles.card__slide}>{children}</div>);
};

RoomCard.Slider.displayName = 'RoomCard.Slider';

RoomCard.Info = ({ children }) => {
  return (<div aria-label={'Room Info'}>
    {children}
  </div>);
};

RoomCard.Info.displayName = 'RoomCard.Info';

RoomCard.Price = ({ children }) => {
  return (
    <article className={styles.price}>{children}</article>
  );
};

RoomCard.Price.displayName = 'RoomCard.Price';