'use client';

import { ChevronLeft } from 'lucide-react'; 
import { usePathname, useRouter } from 'next/navigation';
import { Fragment } from 'react';

import { sitemap } from '@/shared/const/sitemap';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/shared/ui/breadcrumb';
import { Button } from '@/shared/ui/button'; 
import { Text } from '@/shared/ui/text';

export function BreadcrumbsUI() {
  const pathname = usePathname();
  const router = useRouter();

  const segments = pathname.split('/').filter(Boolean);

  const crumbs = segments.map((route, index) => {
    const path = `/${segments.slice(0, index + 1).join('/')}`;
    return {
      title: sitemap[route] ?? route,
      path,
      isLast: index === segments.length - 1,
    };
  });

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else if (crumbs.length > 1) {
      router.push(crumbs[crumbs.length - 2].path);
    } else {
      router.push('/admin');
    }
  };

  if (pathname === '/admin') return null;

  return (
    <nav aria-label="Хлебные крошки" className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={handleBack}
        className="shrink-0 size-8"
        aria-label="Назад"
      >
        <ChevronLeft className="size-4" />
      </Button>

      <Breadcrumb className="hidden sm:block">
        <BreadcrumbList>
          {crumbs.map((crumb,) => (
            <Fragment key={crumb.path}>
              <BreadcrumbItem>
                {crumb.isLast ? (
                  <BreadcrumbPage className="max-w-25 truncate font-medium">
                    {crumb.title}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={crumb.path}
                    className="max-w-15 truncate hover:underline"
                    title={crumb.title} 
                  >
                    {crumb.title}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!crumb.isLast && <BreadcrumbSeparator />}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      <div className="sm:hidden flex-1 min-w-0">
        <Text
          tag="p"
          tone="default"
          className="truncate font-semibold text-sm mb-0"
        >
          {crumbs[crumbs.length - 1]?.title}
        </Text>
      </div>
    </nav>
  );
}