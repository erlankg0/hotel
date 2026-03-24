import type { ReactNode } from 'react';

export type Count = {
  count: number;
  setCount: (count: number) => void;
}

export interface GuestProps {
  adults: Count;
  child: Count;
  trigger?: ReactNode;
}

export type CounterType = {
  min: number;
  label: 'Взрослый' | 'Ребенок' | 'Младенец' | string;
  data: Count
}
