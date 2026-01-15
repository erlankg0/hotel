import { LuBed } from 'react-icons/lu';
import { MdOutlineKingBed } from 'react-icons/md';

import type { ImageType, Video } from '@/shared/types/types';
import type { ElementType } from 'react';

export const BED_TYPE_LABEL: Record<string, ElementType> = {
  SNG: LuBed,
  TWIN: MdOutlineKingBed,
  EXTRA: LuBed,
};


export type MediaType = {
  hasVideo: boolean;
  video?: Video;
  images: ImageType;
}

export type Bed = {
  type: 'SNG' | 'TWIN' | 'EXTRA',
  count: number,
}


export type RoomInfo = {
  view: 'land' | 'sea' | 'sea-land',
  balcony: boolean,
  beds: Bed[],
  bedRoomCount: number,
  maxCapacity: number,
  floors: string
  size: number,
  bathCount: number,
}

export type RoomTabData = {
  media: MediaType[],
  description: string,
  title: string,
  info: RoomInfo,
}





