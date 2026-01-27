'use client';

import { Button } from '@/shared/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/shared/ui/dropdown-menu';

import { GuestRow } from './guest-row';
import styles from './styles.module.scss';

import type { GuestProps } from '../model/type';

export function GuestCounter({ child, adults }: GuestProps) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant={'secondary'}>{adults.count} Взрослых, {child.count} дети.</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={30}>
        <div className={styles.guests}>
          <DropdownMenuLabel>Количество гостей</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <GuestRow data={adults}  min={1} label={'Взрослый'} />
          <GuestRow data={child} min={0} label={'Ребенок до 12 лет'} />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}