import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';

import { AMENITY_ICONS } from '@/shared/const/icon_amenities';
import { Item, ItemContent, ItemTitle, ItemMedia, ItemActions } from '@/shared/ui/item';

import type { AmenityType } from '../model/type';

export function ItemUI({ id, name, icon }: AmenityType) {
  const Icon = AMENITY_ICONS[icon];
  return (
    <Item variant="outline" size="sm" asChild>
      <Link href={`/${id}`}>
        <ItemMedia>
          <Icon className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>{name}.</ItemTitle>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="size-4" />
        </ItemActions>
      </Link>
    </Item>
  );
}