export type ImageType = {
  url: string,
  alt: string,
}

export type Video = {
  poster?: ImageType;
  url: string;
  alt: string;
}

export type Info = {
  id: string;
  name: string;
}

export type FileType = {
  id: string;
  url: string;
  publicId: string;
}