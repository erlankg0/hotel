import { Calendar } from 'lucide-react';

import { DateRange } from '@/features/date-range';

import styles from './styles.module.scss';


export function PriceRequestFullSize() {
  return (
    <form className={styles.form}>
      <div className={styles.form__inner}>
        <div>
          <div>
            <Calendar />
            <p>Ночей (1)</p>
          </div>
          <DateRange />
        </div>
      </div>
    </form>
  );
}