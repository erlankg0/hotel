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
};
export type FileType = {
  id: string;
  url: string;
  format: string;
};

type Option = {
  id: string,
  title: string
}
export type Props = {
  data: Option[];
  isLoading: boolean,
  page: number,
  setPage: (page: number) => void;
  search: string,
  setSearch: (search: string) => void
  total?: number
}