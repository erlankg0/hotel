import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from '@/shared/ui/item';

import type { Tile } from '../model/type';


export function Tile({ title, icon, href }: Tile) {
  const Icon = icon;
  return (
    <Item variant={'outline'} size={'sm'} asChild>
      <Link href={href}>
        <ItemMedia>
          <Icon className={'size-5'} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>{title}</ItemTitle>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="size-4" />
        </ItemActions>
      </Link>
    </Item>
  );
}