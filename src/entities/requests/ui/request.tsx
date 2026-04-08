import { BadgeInfoIcon } from 'lucide-react';

import { Item, ItemContent, ItemActions, ItemMedia, ItemTitle } from '@/shared/ui/item';

import type { RequestType } from '../model/type';
import type { ReactNode } from 'react';

export function RequestItem({ name, slot }: Partial<RequestType> & { slot: ReactNode }) {
  return (
    <Item variant={'outline'}>
      <ItemMedia>
        <BadgeInfoIcon size={14} />
      </ItemMedia>
      <ItemContent>
        <ItemTitle className={'text-muted-foreground font-semibold'}>{name}</ItemTitle>
      </ItemContent>
      {slot && (
        <ItemActions>
          {slot}
        </ItemActions>
      )}
    </Item>
  );
}