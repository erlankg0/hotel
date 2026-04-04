'use client';

import { Loader } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { useSession } from '@/entities/session';
import { useLogout } from '@/features/auth/logout';
import { useContact } from '@/features/contact';
import { Toggle } from '@/features/sidebar';
import { Button } from '@/shared/ui/button';

import styles from './styles.module.scss';

export function Header() {
  const { setIsOpen } = useContact();
  const { isAuth, data, isLoading } = useSession();
  const { isPending, mutate: logout } = useLogout();
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.header__menu}>
          <Toggle className={styles.header__action} />
        </div>
        <Link href={'/'} className={styles.header__brand} aria-label="На главную">
          <Image
            className={styles.header__logo}
            src={'/images/logo.svg'}
            alt="logo"
            width={60}
            height={60}
            priority
          />
        </Link>
        <div className={styles.header__actions}>
          <Button
            type={'button'}
            className={`${styles.header__action} ${styles.header__action_secondary}`}
            size={'lg'}
            onClick={() => isAuth && logout()}
            disabled={isPending || isLoading}
          >
            {isLoading ? (
              <Loader className="animate-spin" size={16} />
            ) : isAuth ? (
              <span>{isPending ? 'Выход...' : data?.username}</span>
            ) : (
              <Link href="/login" className={styles.header__loginLink}>
                Войти
              </Link>
            )}
          </Button>
          <Button
            type={'button'}
            className={`${styles.header__action} ${styles.header__action_primary}`}
            size={'lg'}
            onClick={setIsOpen}
          >
            <span>Контакты</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
