'use client';

import { Loader } from 'lucide-react';

import { useSession } from '@/entities/session';
import { SidebarProvider } from '@/shared/ui/sidebar';
import { Header } from '@/widget/admin-header';
import { AdminSidebar } from '@/widget/admin-sidebar';

import NotFound from '../not-found';

import type { ReactNode } from 'react';

export default function AdminLayout({
                                      children,
                                    }: {
  children: ReactNode;
}) {
  const { isAuth, data, isLoading } = useSession();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader
          className="animate-spin text-muted-foreground"
          size={32}
        />
      </div>
    );
  }

  if (!isAuth || data?.role !== 'ADMIN') {
    return <NotFound />;
  }

  return (
    <SidebarProvider>
      <AdminSidebar />

      <div className="flex min-h-screen flex-1 flex-col">

        <main className="flex-1">
          <Header />
          <div className="container mx-auto px-4 py-6 lg:px-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}