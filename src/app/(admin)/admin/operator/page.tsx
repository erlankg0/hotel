'use client';

import { Loader, Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { useOperator } from '@/entities/operator';
import { Button } from '@/shared/ui/button';
import { PaginationUI } from '@/shared/ui/paginator/pagination';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';

export default function AgencyPage() {
  const [search, setSearch] = useState<string>('');
  const { data, isLoading, setPage, page, total, limit } = useOperator(search);
  return (
    <Page
      headerSlog={
        <PageHeader
          title={'Операторы'}
          searchValue={search}
          onSearchOnChange={setSearch}
          slot={
            <div className={'flex flex-row items-center gap-2'}>
              <Button type={'button'}>
                <Link href={'/admin/operator/new'}>
                  <Plus size={14} />
                </Link>
              </Button>
            </div>
          }
        />}
    >
      <div className={'flex flex-col gap-6'}>
        <div className={'flex flex-col gap-6'}>
          {isLoading && (
            <Loader className="animate-spin" size={16} />
          )}
          {!isLoading && (!data || data.length === 0) && (
            <div className="py-12 text-center text-muted-foreground">
              Нет данных
            </div>
          )} {data && data.map((operator) => (
          <p key={operator.id}>{operator.title}</p>
        ))}
          <PaginationUI page={page} total={total} limit={limit} onPage={setPage} />
        </div>
      </div>
    </Page>
  );
}