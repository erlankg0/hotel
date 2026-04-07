import {
  Images,
  Info,
  Gem,
} from 'lucide-react';

import { ListTile } from '@/shared/ui/list-tile';
import { Page } from '@/widget/page';

const Tiles = [
  { title: 'Галерея', icon: Images, href: 'gallery' },
  { title: 'Запросы', icon: Info, href: 'request' },
  { title: 'Удобство', icon: Gem, href: 'amity' },
];

export default async function Options() {
  return (
    <Page>
      <ListTile list={Tiles} />
    </Page>
  );
}