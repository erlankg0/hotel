export type RoomCard = {
  id: string;
  url: string,
  alt: string,
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
  images: RoomCard[],
  description: string,
  title: string,
  info: RoomInfo,
}


