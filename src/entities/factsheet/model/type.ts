export type Room = {
  title: string;
  capacity: number;
  area: string,
  balcony: string,
  bedRoom: number,
  bathRoom: number,
  beds: {
    twin: number,
    sng: number,
    extra?: string,
    sofa?: number,
  }
  view: string
}
