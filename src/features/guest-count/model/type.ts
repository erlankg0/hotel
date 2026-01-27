export type Count = {
  count: number;
  setCount: (count: number) => void;
}

export interface GuestProps {
  adults: Count;
  child: Count;
}

export type CounterType = {
  min: number;
  label: 'Взрослый' | 'Ребенок' | 'Младенец' | string;
  data: Count
}