'use client';

import { Button } from '@/shared/ui/button';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
} from '@/shared/ui/popover';
import { Separator } from '@/shared/ui/separator';

import { GuestRow } from './guest-row';
import styles from './styles.module.scss';

import type { GuestProps } from '../model/type';

export function GuestCounter({ child, adults, trigger }: GuestProps) {
  const defaultTrigger = (
    <Button variant={'secondary'}>{adults.count} Взрослых, {child.count} дети.</Button>
  );
  return (
    <Popover modal={false}>
      <PopoverTrigger asChild>
        {trigger ?? defaultTrigger}
      </PopoverTrigger>
      <PopoverContent sideOffset={12} align="start" className="w-auto p-0">
        <div className={styles.guests}>
          <PopoverHeader>Количество гостей</PopoverHeader>
          <Separator />
          <GuestRow data={adults} min={1} label={'Взрослый'} />
          <GuestRow data={child} min={0} label={'Ребенок до 12 лет'} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
