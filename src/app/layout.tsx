import { Montserrat, Calligraffitti } from 'next/font/google';

import { SidebarProvider } from '@/components/ui/sidebar';
import { SidebarUI } from '@/widget/sidebar';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Header } from '@/widget/header';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

const calligraffiti = Calligraffitti({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-calligraffiti',
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
    <body className={`${montserrat.variable} ${calligraffiti.variable} antialiased`}>
    <SidebarProvider defaultOpen={false}>
      <SidebarUI />
      <main className="relative min-h-screen w-full overflow-x-hidden">
        <Header />
        {children}
      </main>
    </SidebarProvider>
    </body>
    </html>
  );
}
