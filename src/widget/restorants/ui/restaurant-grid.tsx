import styles from './restaurant-grid.module.scss';

import type { ReactNode } from 'react';


export function RestaurantGrid({ children }: { children: ReactNode }) {
  return (
    <section className={styles.grid}>
      {children}
    </section>
  );
}
