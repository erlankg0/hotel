import { cn } from '@/shared/lib/utils';

import styles from './styles.module.scss';

import type { ReactNode } from 'react';

export function Page({ children, headerSlog }: { headerSlog?: ReactNode, children: ReactNode }) {
  return (
    <section className={styles.page}>
      {headerSlog && (
        <header className={styles.page__header}>
          {headerSlog}
        </header>
      )}
      <div className={cn(styles.page__content, 'container')}>
        {children}
      </div>
    </section>
  );
}