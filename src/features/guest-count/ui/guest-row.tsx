import { useCallback } from 'react';

import { Button } from '@/shared/ui/button';

import styles from './row.module.scss';

import type { CounterType } from '../model/type';

export function GuestRow({ min, count, setCount, label }: CounterType) {

  const handleClickDecrement = useCallback(() => {
    if (count > min) {
      setCount(count - 1);
    }
  }, [count, min, setCount]);

  const handleOnClickIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count, setCount]);

  return (
    <div className={styles.row}>
      <p className={styles.row__label}>{label} - {count}</p>
      <div className={styles.row_row}>
        <Button type={'button'} variant={'secondary'} onClick={handleClickDecrement} disabled={count <= min}>-</Button>
        <Button type={'button'} variant={'secondary'} onClick={handleOnClickIncrement}>+</Button>
      </div>
    </div>
  );
}