import { ChartBar } from 'lucide-react';


import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { Separator } from '@/shared/ui/separator';

import styles from './styles.module.scss';

export function RoomPrice() {
  return (
    <article className={styles.price}>
      <div className={styles.price__info}>
        <span className={styles.price__discount}>-20%</span>
        <span className={styles.price__old}>1200 TL</span>
      </div>

      <div className={styles.price__current}>
        <Popover>
          <PopoverTrigger asChild>
            <button className={styles.price__infoBtn}>
              <ChartBar size={14} />
            </button>
          </PopoverTrigger>

          <PopoverContent className={styles.price__popover}>
            <ul>
              <li>01.04.2026 <span>100 TL</span></li>
              <li>01.04.2026 <span>100 TL</span></li>
              <li>01.04.2026 <span>100 TL</span></li>
              <li>01.04.2026 <span>100 TL</span></li>
              <li>01.04.2026 <span>110 TL</span></li>
            </ul>
            <Separator />
            <p>Цены; налог на проживание и другие налоги включены в стоимость..</p>
          </PopoverContent>
        </Popover>

        <div>
          1000 <span className={styles.price__currency}>TL</span>
        </div>
      </div>

      <div className={styles.meta}>
        <span>2 Yetişkin</span>
        <span className={styles.dot}>•</span>
        <span>9 Gece</span>
      </div>
    </article>
  );
}