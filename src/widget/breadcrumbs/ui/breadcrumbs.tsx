'use client';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

import { sitemap } from '@/shared/const/sitemap';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@/shared/ui/breadcrumb';
import { Text } from '@/shared/ui/text';

const separator = '/';

export function BreadcrumbsUI() {
  const pathname = usePathname();

  const crumbs = pathname
    .split(separator)
    .filter(Boolean)
    .map((route: string, index: number, array: string[]) => {
      const path = `/${array.slice(0, index + 1).join('/')}`;
      return { title: sitemap[route] ?? route, path };
    });

  if (pathname === '/') {
    crumbs.unshift({ title: 'Профиль', path: '/' });
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {crumbs.map((crumb, index) => (
          <Fragment key={crumb.path}>
            <BreadcrumbItem key={crumb.path}>
              <BreadcrumbLink key={crumb.path} href={crumb.path}>
                {crumb.title.length <= 10
                  ? <Text tag={'p'} variant={'kicker'} className={'text-black font-bold'}>{crumb.title}</Text>
                  : `${crumb.title.slice(0, 10)}...`}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < crumbs.length - 1 && (
              <BreadcrumbSeparator key={`sep-${index}`} />
            )}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}