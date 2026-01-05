import { DateRange } from '@/features/date-range';
import { GuestCounter } from '@/features/guest-count';
import { Button } from '@/shared/ui/button';

import styles from './styles.module.scss';

export function PriceRequestForm() {
  return (
    <section className={styles.price_request}>
      <div className={styles.price_request__content}>
        <p>Забронируйте проживание</p>
        <div className={styles.price_request__controller}>
          <div className={styles.block}>
            <DateRange />
          </div>

          <div className={'divider'} />

          <div className={styles.block}>
            <GuestCounter />
          </div>
        </div>

        <div className={styles.right}>
          <Button variant={'secondary'} type={'button'}>Поиск</Button>
        </div>
      </div>
    </section>
  );
}