'use client';

import Image from 'next/image';

import { useContact } from '@/features/contact';
import { Button } from '@/shared/ui/button';

import styles from './styles.module.scss';

export function Header() {
  const { setIsOpen } = useContact();
  return (
    <header className={styles.header}>
      <div>
        <span>Меню</span>
      </div>

      <Image src={'/images/logo.svg'} alt="logo" width={60} height={60} />
      <div className={styles.right}>

        <Button variant={'secondary'} onClick={setIsOpen}>Контакты</Button>
      </div>
    </header>
  );
}