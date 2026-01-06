'use client';
import { Menu } from 'lucide-react';

import { Button } from '@/shared/ui/button';

import { useSidebar } from '../hook/useSidebar';

export function Toggle() {
  const { setIsOpen } = useSidebar();
  return (
    <Button size={'lg'} variant={'transparent'} type={'button'} onClick={setIsOpen}>
      <Menu />
      <span>Menu</span>
    </Button>
  );
}