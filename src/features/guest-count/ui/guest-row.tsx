import { useCallback } from 'react';

import { Button } from '@/shared/ui/button';

import styles from './row.module.scss';

import type { CounterType } from '../model/type';

export function GuestRow({ min, max, data }: CounterType) {

  const handleClickDecrement = useCallback(() => {
    if (data.count > min) {
      data.setCount(data.count - 1);
    }
  }, [data, min]);

  const handleOnClickIncrement = useCallback(() => {
    data.setCount(data.count + 1);
  }, [data]);

  return (
    <div className={styles.controls}>
      <Button
        type={'button'}
        variant={'blue'}
        onClick={handleClickDecrement}
        disabled={data.count <= min}>-</Button>
      <p className={styles.count}>{data.count}</p>
      <Button
        type={'button'}
        variant={'blue'}
        disabled={data.count >= max}
        onClick={handleOnClickIncrement}>+</Button>
    </div>
  );
}