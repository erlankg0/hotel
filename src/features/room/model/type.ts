export type RoomType = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly subDescription?: string;
  readonly category: string;
  readonly capacity: number;
  readonly bedRoomCount: number;
  readonly bathRoomCount: number;
  readonly uai: boolean;
  readonly amenity: { id: string, name: string }[];
  readonly requests: { id: string, name: string }[];
  readonly photos: { url: string, id: string, publicId: string }[];
  readonly video?: { url: string, id: string, publicId: string };
  readonly gallery?: { url: string, id: string, publicId: string };
}