import { Tile } from './item-tile';

import type { TileListProps } from '../model/type';

export function ListTile({ list }: TileListProps) {
  return (
    <section className={'flex flex-col gap-4'}>
      {list.map((tile) => (
        <Tile {...tile} key={tile.title} />
      ))}
    </section>
  );
}