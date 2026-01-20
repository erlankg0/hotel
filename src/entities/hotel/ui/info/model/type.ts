import type { LucideIcon } from 'lucide-react';
import type { LinkProps } from 'next/link';
import type { ReactNode } from 'react';

export type InfoType = {
  icon: LucideIcon,
  title: ReactNode | string,
  content: ReactNode | string,
  link?: LinkProps & { aria_label: string, target?: '_blank' }
}

export interface HotelProps {
  list: InfoType[];
}