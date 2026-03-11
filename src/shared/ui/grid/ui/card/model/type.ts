import type { ImageType } from '@/shared/types/types';

export type Props = {
  aspectRatio?: string;
  title?: string;
  text?: string;
  image: ImageType;
  rowSpan?: number;
  colSpan?: number;
  onClick?: () => void;
}