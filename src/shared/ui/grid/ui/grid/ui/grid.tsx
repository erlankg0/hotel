'use client';

import { cn } from '@/shared/lib/utils';

import styles from './grid.module.scss';

import type { CSSProperties, ReactNode } from 'react';

type GridProps = {
  children: ReactNode;
  size?: number;
  tabletSize?: number;
  mobileSize?: number;
  gap?: string;
  className?: string;
}

export function Grid({
  children,
  size = 6,
  tabletSize,
  mobileSize = 1,
  gap,
  className,
}: GridProps) {
  const desktopColumns = Math.max(1, size);
  const resolvedTabletSize = tabletSize ?? (desktopColumns <= 2 ? desktopColumns : desktopColumns <= 4 ? 2 : 3);
  const resolvedMobileSize = Math.max(1, mobileSize);

  const style = {
    '--grid-columns': desktopColumns,
    '--grid-columns-tablet': resolvedTabletSize,
    '--grid-columns-mobile': resolvedMobileSize,
    ...(gap && { '--grid-gap': gap }),
  } as CSSProperties;

  return (
    <section
      className={cn(styles.grid, className)}
      style={style}
    >
      {children}
    </section>
  );
}
