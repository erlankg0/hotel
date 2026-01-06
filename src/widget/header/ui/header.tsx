'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useContact } from '@/features/contact';
import { Toggle } from '@/features/sidebar';
import { Button } from '@/shared/ui/button';

import styles from './styles.module.scss';

export function Header() {
  const { setIsOpen } = useContact();
  return (
    <header className={styles.header}>
      <div className={styles.header__menu}>
        <Toggle />
      </div>
      <Link href={'/'}>
        <Image src={'/images/logo.svg'} alt="logo" width={60} height={60} />
      </Link>
      <div className={styles.right}>
        <Button type={'button'} variant={'transparent'} size={'lg'} onClick={setIsOpen}>Контакты</Button>
      </div>
    </header>
  );
}