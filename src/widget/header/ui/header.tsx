import Image from 'next/image';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Image src={'/images/logo.svg'} alt="logo" width={60} height={60} />
      header
    </header>
  );
}