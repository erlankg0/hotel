import type { ImageType } from '@/shared/types/types';

export type GalleryType = {
  images: ImageType[],
  predImages: ImageType[],
  blocks: ImageBlock[];
}

type ImageBlock = {
  title: string;
  images: ImageType[]
};