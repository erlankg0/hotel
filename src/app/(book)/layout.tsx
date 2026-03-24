import { Footer } from '@/widget/footer';
import { Header } from '@/widget/header';
import { SidebarUI } from '@/widget/sidebar';

import type { ReactNode } from 'react';


export default function BookLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      <div>
        <SidebarUI />
        {/*
         <Hero
          video={'/images/hotel.webp'}
          poster={'/images/hotel.webp'}
          slot={<Text tag={'h1'} variant={'title'} className={styles.title}>Utopia World</Text>}
          subtitle={'Выберите даты и номер, чтобы узнать стоимость вашего проживания'}
        />
        */}
        {children}
      </div>
      <Footer />
    </>
  );
}

