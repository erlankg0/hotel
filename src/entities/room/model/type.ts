export type RoomCard = {
  id: string;
  url: string,
  alt: string,
}

export type RoomTabData = {
  images: RoomCard[],
  description: string,
  title: string,
}