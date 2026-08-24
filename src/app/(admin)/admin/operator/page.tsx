'use client';

import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { columns, useOperatorsQuery } from '@/entities/operator';
import { Button } from '@/shared/ui/button';
import { DataTable } from '@/shared/ui/data-table';
import { PaginationUI } from '@/shared/ui/paginator/pagination';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';

import type { OperatorType } from '@/entities/operator';


export default function AgencyPage() {
  const [search, setSearch] = useState<string>('');
  const { data, isLoading, page, setPage, total, limit } = useOperatorsQuery(search);

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
        <DataTable<OperatorType> caption={'Операторы'} columns={columns} data={data} isLoading={isLoading}>
          <PaginationUI page={page} total={total} limit={limit} onPage={setPage} />
        </DataTable>
      </div>
    </Page>
  );
}