'use client';

import { Loader, LogOut, ShoppingBag, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { useSession } from '@/entities/session';
import { useLogout } from '@/features/auth/logout';
import { useContact } from '@/features/contact';
import { Toggle } from '@/features/sidebar';
import { Button } from '@/shared/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';

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

        <Link
          href="/"
          className={styles.header__brand}
          aria-label="На главную"
        >
          <Image
            className={styles.header__logo}
            src="/images/logo.svg"
            alt="logo"
            width={60}
            height={60}
            priority
          />
        </Link>

        <div className={styles.header__actions}>
          {isLoading ? (
            <Button
              type="button"
              className={`${styles.header__action} ${styles.header__action_secondary}`}
              size="lg"
              disabled
            >
              <Loader className="animate-spin" size={16} />
            </Button>
          ) : isAuth ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  className={`${styles.header__action} ${styles.header__action_secondary}`}
                  size="lg"
                  disabled={isPending}
                >
                  <User size={16} />
                  <span>{data?.username}</span>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/purchases">
                    <ShoppingBag />
                    Мои покупки
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/admin">
                    <ShoppingBag />
                    Админ
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuItem
                  disabled={isPending}
                  onClick={() => logout()}
                  variant="destructive"
                >
                  {isPending ? (
                    <>
                      <Loader className="animate-spin" />
                      Выход...
                    </>
                  ) : (
                    <>
                      <LogOut />
                      Выйти
                    </>
                  )}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              asChild
              type="button"
              className={`${styles.header__action} ${styles.header__action_secondary}`}
              size="lg"
            >
              <Link href="/login">Войти</Link>
            </Button>
          )}

          <Button
            type="button"
            className={`${styles.header__action} ${styles.header__action_primary}`}
            size="lg"
            onClick={setIsOpen}
          >
            <span>Контакты</span>
          </Button>
        </div>
      </div>
    </header>
  );
}