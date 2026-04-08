export interface GalleryType {
  id: string;
  title: string;
  fields: {
    id: string;
    publicId: string;
    url: string;
  }[];
}