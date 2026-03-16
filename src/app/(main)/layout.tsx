import { Footer } from '@/widget/footer';
import { Header } from '@/widget/header';
import { PriceRequestForm } from '@/widget/price-request-form';
import { SidebarUI } from '@/widget/sidebar';

import type { ReactNode } from 'react';


export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>
        <SidebarUI />
        {children}
        <PriceRequestForm />
      </main>
      <Footer />
    </>
  );
}

