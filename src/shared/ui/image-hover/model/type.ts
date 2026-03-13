import type { ImageType, Video } from '@/shared/types/types';

export type MediaType = {
  hasVideo: boolean;
  video?: Video;
  images: ImageType;
  aspectRatio?: string;
}
