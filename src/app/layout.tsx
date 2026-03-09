import { Montserrat, Inter, Great_Vibes, Cormorant_Garamond } from 'next/font/google';

import { Footer } from '@/widget/footer';
import { Header } from '@/widget/header';
import { PriceRequestForm } from '@/widget/price-request-form';
import { SidebarUI } from '@/widget/sidebar';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

const cormorant_garamond = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant',
});

const calligraffiti = Great_Vibes({
  subsets: ['latin', 'cyrillic', 'cyrillic-ext', 'latin-ext'],
  weight: '400',
  display: 'swap',
  variable: '--font-calligraffiti',
});

const inter = Inter({
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Utopia World Hotel',
  description: 'A new world created in the most special corner of the Mediterranean where you can experience both the green and the blue together... Utopia World will be the indispensable address of your holiday.',
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${montserrat.variable} ${calligraffiti.variable} ${inter.variable} ${cormorant_garamond.variable} antialiased`}>

    <Header />

    <main>
      <SidebarUI />
      {children}
      <PriceRequestForm />
    </main>
    <Footer />
    </body>
    </html>
  );
}

