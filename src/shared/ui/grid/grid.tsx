import styles from './grid.module.scss';

import type { ReactNode } from 'react';


export function Grid({ children, size = 6 }: { children: ReactNode, size?: number }) {
  return (
    <section className={styles.grid} style={{
      gridTemplateColumns: `repeat(${size}, 1fr)`,
      gridTemplateRows: `repeat(${size}, min(190px, 1fr))`,
    }}>
      {children}
    </section>
  );
}
