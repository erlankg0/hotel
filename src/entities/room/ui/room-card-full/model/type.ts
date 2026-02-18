import type { ImageType } from '@/shared/types/types';

export type Bed = {
  type: 'SNG' | 'TWIN' | 'EXTRA',
  count: number,
}
export type RoomType = {
  title: string,
  image: ImageType;
  beds: Bed[],
  bedRoomCount: number,
  maxCapacity: number,
  area: number,
  bathCount: number,
}