'use client';

import Link from 'next/link';

import { useSidebar } from '@/features/sidebar';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from '@/shared/ui/drawer';


import styles from './styles.module.scss';

export function SidebarUI() {
  const { setIsOpen, isOpen } = useSidebar();

  return (
    <Drawer direction="left" onClose={setIsOpen} open={isOpen}>
      <DrawerContent className={styles.sidebar}>
        <DrawerHeader>
          <DrawerTitle>
            <p>Utopia World</p>
          </DrawerTitle>
        </DrawerHeader>

        <nav className={styles.nav}>
          <Link href="/rooms" onClick={setIsOpen}>Номера</Link>
          <Link href="/food" onClick={setIsOpen}>Food and Bars</Link>
          <Link href="/entertainment" onClick={setIsOpen}>Анимация</Link>
          <Link href="/aquapark" onClick={setIsOpen}>Аквапарк</Link>
          <Link href="/beach" onClick={setIsOpen}>Пляж</Link>
          <Link href="/factsheet" onClick={setIsOpen}>Factsheet</Link>
        </nav>
        <DrawerFooter>
          Соц сети
        </DrawerFooter>
      </DrawerContent>

    </Drawer>
  );
}
