'use client';

import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { columns, useOperator } from '@/entities/operator';
import type { OperatorType } from '@/entities/operator';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';
import { DataTable } from '@/shared/ui/data-table';


export default function AgencyPage() {
  const [search, setSearch] = useState<string>('');
  const { data } = useOperator()
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
        <DataTable<OperatorType> caption={'Операторы'} columns={columns} data={data} />
      </div>
    </Page>
  );
}