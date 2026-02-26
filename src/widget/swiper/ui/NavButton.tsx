import { ChevronRight, ChevronLeft } from 'lucide-react';
import { memo } from 'react';

import { Button } from '@/shared/ui/button';

import type { NavButtonProps } from '../model/type';

export const NavButton = memo(({ side, onClick, isDisabled, className }: NavButtonProps) => {
  const Icon = side == 'left' ? ChevronLeft : ChevronRight;
  return (
    <Button variant={'blur'} className={'rounded-full'} onClick={onClick} disabled={isDisabled}>
      <Icon className={className} size={18} />
    </Button>
  );
});

NavButton.displayName = 'NavButton';