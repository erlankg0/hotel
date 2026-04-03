import { cn } from '@/shared/lib/utils';
import { Footer } from '@/widget/footer';
import { Header } from '@/widget/header';
import { SidebarUI } from '@/widget/sidebar';

import styles from './layout.module.scss';

import type { ReactNode } from 'react';


export default function AuthLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      <div>
        <SidebarUI />
        <section className={cn(styles.page, 'panel')}>
          <div className={styles.card}>
            {children}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

