import { Architects_Daughter, Cormorant_Garamond, Great_Vibes, Inter, Montserrat } from 'next/font/google';

import { QueryProvider } from '@/shared/providers/tanstack/provider';
import { Toaster } from '@/shared/ui/sonner';

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

const architects = Architects_Daughter({
  weight: '400',
  display: 'swap',
  variable: '--font-architects',
  subsets: ['latin'],
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
    <body
      className={
        `${montserrat.variable}
       ${calligraffiti.variable} 
       ${inter.variable} 
       ${cormorant_garamond.variable}
       ${architects.variable}
        antialiased`
      }>

    <QueryProvider>
      {children}
    </QueryProvider>
    <Toaster
      position="top-right"
      toastOptions={{
        classNames: {
          toast: 'rounded-xl border border-border bg-background shadow-lg px-4 py-3',
          title: 'text-sm font-medium text-foreground',
          description: 'text-xs text-muted-foreground mt-0.5',
          error: 'border-destructive/20 bg-destructive/5',
          success: 'border-green-500/20 bg-green-500/5',
          actionButton: 'bg-foreground text-background text-xs rounded-md px-3 py-1.5',
          icon: 'mt-0.5',
        },
      }}
      gap={8}
      visibleToasts={3}
    />
    </body>
    </html>
  );
}

