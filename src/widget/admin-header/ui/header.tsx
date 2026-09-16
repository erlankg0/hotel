'use client';

import { Search, User } from 'lucide-react';
import { useEffect, useState } from 'react';

import { useSession } from '@/entities/session';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { Card, CardContent } from '@/shared/ui/card';
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandItem,
  CommandEmpty,
  CommandGroup,
  CommandList,
} from '@/shared/ui/command';
import { Kbd, KbdGroup } from '@/shared/ui/kbd';
import { SidebarTrigger } from '@/shared/ui/sidebar';

import styles from './styles.module.scss';

export function KbdButton() {
  return (
    <KbdGroup>
      <Kbd>Ctrl</Kbd>
      <span>+</span>
      <Kbd>K</Kbd>
    </KbdGroup>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { data } = useSession();


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().includes('MAC');

      const isShortcut = isMac
        ? event.metaKey && event.key.toLowerCase() === 'k'
        : event.ctrlKey && event.key.toLowerCase() === 'k';

      if (isShortcut) {
        event.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header className={cn(styles.header, 'px-4')}>
      <Card>
        <CardContent className="flex items-center gap-4">
          <SidebarTrigger />

          <div className="flex w-full items-center justify-between">
            <Button
              variant="ghost"
              className="cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <Search />
              <span>Поиск</span>
              <KbdButton />
            </Button>

            <Button
              type="button"
              size="lg"
            >
              <User size={16} />
              <span>{data?.username}</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />

          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </header>
  );
}