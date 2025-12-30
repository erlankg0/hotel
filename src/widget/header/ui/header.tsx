import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <SidebarTrigger />
        <span>Меню</span>
      </div>

      <Image src={'/images/logo.svg'} alt="logo" width={60} height={60} />
      <div className={styles.right}>
        <Button variant={'ghost'}>Book Now</Button>
      </div>
    </header>
  );
}