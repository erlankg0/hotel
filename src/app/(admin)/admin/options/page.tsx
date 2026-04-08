import {
  Images,
  Info,
  Gem,
} from 'lucide-react';

import { ListTile } from '@/shared/ui/list-tile';
import { Page } from '@/widget/page';

const Tiles = [
  { title: 'Галерея', icon: Images, href: 'options/gallery' },
  { title: 'Запросы', icon: Info, href: 'options/requests' },
  { title: 'Удобство', icon: Gem, href: 'options/amenity' },
];

export default async function Options() {
  return (
    <Page>
      <ListTile list={Tiles} />
    </Page>
  );
}