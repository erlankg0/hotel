import type { ReactNode, ElementType } from 'react';

export type Variant = 'title' | 'subtitle' | 'kicker';

export type TextProps = {
  children: ReactNode;
  tag: ElementType;
  variant: Variant;
  className?: string;
}