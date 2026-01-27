import { useCallback } from 'react';

import { Button } from '@/shared/ui/button';

import styles from './row.module.scss';

import type { CounterType } from '../model/type';

export function GuestRow({ min, data, label }: CounterType) {

  const handleClickDecrement = useCallback(() => {
    if (data.count > min) {
      data.setCount(data.count - 1);
    }
  }, [data, min]);

  const handleOnClickIncrement = useCallback(() => {
    data.setCount(data.count + 1);
  }, [data]);

  return (
    <div className={styles.row}>
      <p className={styles.row__label}>{label} - {data.count}</p>
      <div className={styles.row_row}>
        <Button type={'button'} variant={'secondary'} onClick={handleClickDecrement}
                disabled={data.count <= min}>-</Button>
        <Button type={'button'} variant={'secondary'} onClick={handleOnClickIncrement}>+</Button>
      </div>
    </div>
  );
}