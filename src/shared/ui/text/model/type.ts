import type { ReactNode, ElementType } from 'react';

export type TextSize = 'title' | 'subtitle' | 'kicker' | 'body';

export type TextTone = 'default' | 'info' | 'danger' | 'success';

export type TextProps = {
  children: ReactNode;

  tag?: ElementType;

  size?: TextSize;
  tone?: TextTone;

  className?: string;
};