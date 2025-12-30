import { Button } from '@/components/ui/button';

import styles from './styles.module.scss';

export function PriceRequestForm() {
  return (
    <section className={styles.price_request}>
      <div className={styles.price_request__content}>
        <p>Забронируйте проживание</p>
        <div>2</div>
        <div className={styles.right}>
          <Button>Поиск</Button>
        </div>
      </div>
    </section>
  );
}