import { useCallback } from 'react';

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
      <p>{label} - {count}</p>
      <div>
        <button type={'button'} onClick={handleClickDecrement} disabled={count <= min}>-</button>
        <button type={'button'} onClick={handleOnClickIncrement}>+</button>
      </div>
    </div>
  );
}