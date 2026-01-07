import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__inner}>
        <div className={styles.footer__info}>
          <nav>
            <Link href="/">About</Link>
            <Link href="/">A1bout</Link>
            <Link href="/">s</Link>
            <Link href="/">rooms</Link>
          </nav>
          <nav>
            <Link href="/">About</Link>
            <Link href="/">A1bout</Link>
            <Link href="/">s</Link>
            <Link href="/">rooms</Link>
          </nav>
          <nav>
            <Link href="/">About</Link>
            <Link href="/">A1bout</Link>
            <Link href="/">s</Link>
            <Link href="/">rooms</Link>
          </nav>
          <nav>
            <Link href="/">About</Link>
            <Link href="/">A1bout</Link>
            <Link href="/">s</Link>
            <Link href="/">rooms</Link>
          </nav>
        </div>
        <div>
          <Link href={'/'}>
            <Image src={'/images/logo.svg'} alt="logo" width={60} height={60} />
          </Link>
        </div>
      </section>
    </footer>
  );
}