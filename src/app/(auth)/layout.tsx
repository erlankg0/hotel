import { Footer } from '@/widget/footer';
import { Header } from '@/widget/header';
import { SidebarUI } from '@/widget/sidebar';

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
        {children}
      </div>
      <Footer />
    </>
  );
}

