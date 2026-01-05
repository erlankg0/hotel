'use client';

import { Button } from '@/shared/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/shared/ui/dropdown-menu';

import { useGuest } from '../model/useGuest';

import { GuestRow } from './guest-row';
import styles from './styles.module.scss';

export function GuestCounter() {
  const {
    adults,
    setAdults,
    child,
    setChild,
  } = useGuest();
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant={'secondary'}>{adults} Взрослых, {child} дети.</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={30}>
        <div className={styles.guests}>
          <DropdownMenuLabel>Количество гостей</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <GuestRow count={adults} setCount={setAdults} min={1} label={'Взрослый'} />
          <GuestRow count={child} setCount={setChild} min={0} label={'Ребенок'} />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}