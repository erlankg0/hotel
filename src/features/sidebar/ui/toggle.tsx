'use client';

import { Menu } from 'lucide-react';

import { Button } from '@/shared/ui/button';

import { useSidebar } from '../hook/useSidebar';

type ToggleProps = {
  className?: string;
};

export function Toggle({ className }: ToggleProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      className={className}
      size={'lg'}
      variant={'blur'}
      type={'button'}
      onClick={toggleSidebar}>
      <Menu />
      <span>Меню</span>
    </Button>
  );
}
