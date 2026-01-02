export type CounterType = {
  count: number;
  setCount: (count: number) => void;
  min: number;
  label: 'Взрослый' | 'Ребенок' | 'Младенец';
}