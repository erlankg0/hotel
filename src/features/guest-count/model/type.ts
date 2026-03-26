import type { ReactNode, Dispatch, SetStateAction } from 'react';

export type Count = {
  count: number;
  setCount: (count: number) => void;
}

export interface GuestProps {
  adults: Count;
  child: Count;
  setChildrenAges?: Dispatch<SetStateAction<number[]>>;
  childrenAges?: number[];
  trigger?: ReactNode;
}

export type CounterType = {
  min: number;
  max: number;
  data: Count
}
