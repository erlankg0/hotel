'use client';
import { Loader } from 'lucide-react';

import { useSession } from '@/entities/session';
import { Header } from '@/widget/header';

import NotFound from '../not-found';

import type { ReactNode } from 'react';

export default function AdminLayout({
                                      children,
                                    }: Readonly<{
  children: ReactNode;
}>) {
  const { isAuth, data, isLoading } = useSession();

  if (!isAuth || data?.role !== 'ADMIN') {
    return <NotFound />;
  }

  if (isLoading || !isAuth || data?.role !== 'ADMIN') {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader className="animate-spin text-gray-500" size={32} />
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
}