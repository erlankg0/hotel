'use client';

import { Menu } from 'lucide-react';

import { Button } from '@/shared/ui/button';

import { useSidebar } from '../hook/useSidebar';

export function Toggle() {
  const { setIsOpen } = useSidebar();
  return (
    <Button
      className={'text-black!'}
      size={'lg'}
      variant={'blur'}
      type={'button'}
      onClick={setIsOpen}>
      <Menu />
      <span>Меню</span>
    </Button>
  );
}