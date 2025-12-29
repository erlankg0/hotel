import { Cormorant_Garamond } from 'next/font/google';

import { SidebarProvider } from '@/components/ui/sidebar';
import { SidebarUI } from '@/widget/sidebar';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
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
    <body className={`${cormorant.variable}  antialiased`}>
    <SidebarProvider defaultOpen={false}>
      <SidebarUI />
      <main className="relative min-h-screen w-full overflow-x-hidden">
        {children}
      </main>
    </SidebarProvider>
    </body>
    </html>
  );
}
