import type { ImageType } from '@/shared/types/types';

export type TableInfoProps = {
  infoType: 'list' | 'info' | 'table';
  title?: string;
  info?: InfoType[];
  list?: string[];
  images?: ImageType[];
};

type InfoType = {
  label: string;
  value: string;
}