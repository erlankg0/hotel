'use client';

import { Calendar, User2 } from 'lucide-react';

import { DateRange, useDateRange } from '@/features/date-range';
import { GuestCounter, useGuest } from '@/features/guest-count';
import { Button } from '@/shared/ui/button';

import styles from './styles.module.scss';


export function PriceRequestFullSize() {
  const { dateRange, setDateRange, nights } = useDateRange();
  const { adults, setAdults, child, setChild } = useGuest();
  return (
    <form className={styles.form}>
      <div className={styles.form__inner}>
        <div className={styles.form__col}>
          <div className={styles.form__row}>
            <Calendar size={24} />
            <p>Ночей ({nights})</p>
          </div>
          <DateRange dateRange={dateRange} setDateRange={setDateRange} />
        </div>
        <div className={styles.form__col}>
          <div className={styles.form__row}>
            <User2 size={24} />
            <p>Гости ({adults + child})</p>
          </div>
          <GuestCounter child={{ count: child, setCount: setChild }} adults={{ count: adults, setCount: setAdults }} />
        </div>
        <Button variant={'rounded'} type={'button'}>Поиск</Button>
      </div>
    </form>
  );
}
