'use client';

import { cn } from '@/shared/lib/utils';

import styles from './grid.module.scss';

import type { ReactNode } from 'react';


export function Grid({
                       children,
                       size = 6,
                       className,
                     }: {
  children: ReactNode;
  size?: number;
  className?: string;
}) {
  return (
    <section
      className={cn(styles.grid, className)}
      style={{
        gridTemplateColumns: `repeat(${size}, 1fr)`,
      }}
    >
      {children}
    </section>
  );
}

