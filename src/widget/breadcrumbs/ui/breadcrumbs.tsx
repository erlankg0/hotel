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

const uuidRegex =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function BreadcrumbsUI() {
  const pathname = usePathname();

  const crumbs = pathname
    .split(separator)
    .filter(Boolean)
    .filter((route) => !uuidRegex.test(route))
    .map((route: string, index: number, array: string[]) => {
      const path = `/${array.slice(0, index + 1).join('/')}`;

      return {
        title: sitemap[route] ?? route,
        path,
      };
    });

  if (pathname === '/') {
    crumbs.unshift({
      title: 'Профиль',
      path: '/',
    });
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {crumbs.map((crumb, index) => (
          <Fragment key={crumb.path}>
            <BreadcrumbItem>
              <BreadcrumbLink href={crumb.path}>
                {crumb.title.length <= 10 ? (
                  <Text
                    tag="p"
                    className="mb-0! font-bold text-black"
                  >
                    {crumb.title}
                  </Text>
                ) : (
                  `${crumb.title.slice(0, 10)}...`
                )}
              </BreadcrumbLink>
            </BreadcrumbItem>

            {index < crumbs.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
