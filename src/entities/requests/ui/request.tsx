import { BadgeInfoIcon } from 'lucide-react';

import { Item, ItemContent, ItemActions, ItemMedia, ItemTitle } from '@/shared/ui/item';

import type { RequestType } from '../model/type';
import type { ReactNode } from 'react';

interface RequestItemProps extends Partial<RequestType> {
  slot?: ReactNode;
}

export function RequestItem({ name, slot }: RequestItemProps) {
  return (
    <Item
      variant="outline"
      size="sm"
      className="cursor-pointer transform transition-transform ease-in hover:scale-105 active:scale-105"
    >
      <ItemMedia>
        <BadgeInfoIcon size={14} />
      </ItemMedia>
      <ItemContent>
        <ItemTitle className="text-muted-foreground font-semibold">{name}</ItemTitle>
      </ItemContent>
      {slot && <ItemActions>{slot}</ItemActions>}
    </Item>
  );
}