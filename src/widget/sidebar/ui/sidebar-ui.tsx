'use client';

import { useSidebar } from '@/features/sidebar';
import { Button } from '@/shared/ui/button';
import {
  Drawer, DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/shared/ui/drawer';

export function SidebarUI() {
  const { setIsOpen, isOpen } = useSidebar();
  return (
    <Drawer direction={'left'} onClose={setIsOpen} open={isOpen}>
      <DrawerContent className={'z-[1000]'}>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}