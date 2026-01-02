'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

import { useGuest } from '../model/useGuest';

import { GuestRow } from './guest-row';

export function GuestCounter() {
  const {
    adults,
    setAdults,
    child,
    setChild,
  } = useGuest();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'square'}>{adults} Взрослых, {child} дети.</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Количество гостей</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <GuestRow count={adults} setCount={setAdults} min={13} label={'Взрослый'} />
        <GuestRow count={child} setCount={setChild} min={3} label={'Ребенок'} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}