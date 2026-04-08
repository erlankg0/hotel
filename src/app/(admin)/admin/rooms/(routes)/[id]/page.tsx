import {
  Info,
  Images,
} from 'lucide-react';

import { ListTile } from '@/shared/ui/list-tile';
import { Page } from '@/widget/page';

const Tiles = (id: string) => [
  { title: 'Информация', icon: Info, href: `/admin/rooms/${id}/detail` },
  { title: 'Галерея', icon: Images, href: `/admin/rooms/${id}/gallery` },
];


export type paramsType = Promise<{ id: string }>;


export default async function Options(props: { params: paramsType }) {
  const { id } = await props.params;

  return (
    <Page>
      <ListTile list={Tiles(id)} />
    </Page>
  );
}