import Image from 'next/image';

import { SidebarTrigger } from '@/components/ui/sidebar';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <SidebarTrigger />
      <Image src={'/images/logo.svg'} alt="logo" width={60} height={60} />
      header
    </header>
  );
}