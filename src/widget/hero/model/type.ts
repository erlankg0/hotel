import type { ReactNode } from 'react';

export type HeroPros = {
  title?: string[];
  preTitle?: string;
  subtitle?: string;
  slot?: ReactNode;
  poster: string;
  video?: string
}