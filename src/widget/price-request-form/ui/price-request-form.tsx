'use client';

import { DateRange, useDateRange } from '@/features/date-range';
import { GuestCounter, useGuest } from '@/features/guest-count';
import { Button } from '@/shared/ui/button';

import styles from './styles.module.scss';

export function PriceRequestForm() {
  const { dateRange, setDateRange } = useDateRange();
  const { adults, setAdults, child, setChild } = useGuest();

  return (
    <section className={styles.price_request}>
      <div className={styles.price_request__content}>
        <p>Забронируйте проживание</p>
        <div className={styles.price_request__controller}>
          <div className={styles.block}>
            <DateRange setDateRange={setDateRange} dateRange={dateRange} />
          </div>

          <div className={'divider'} />

          <div className={styles.block}>
            <GuestCounter child={{ count: child, setCount: setChild }}
                          adults={{ count: adults, setCount: setAdults }} />
          </div>
        </div>

        <div className={styles.right}>
          <Button variant={'secondary'} type={'button'}>Поиск</Button>
        </div>
      </div>
    </section>
  );
}