'use client';

import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { columns, useMarketsQuery, type MarketType } from '@/entities/market'
import { Button } from '@/shared/ui/button';
import { DataTable } from '@/shared/ui/data-table';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';

export default function MarketPage() {
  const [search, setSearch] = useState<string>('');
  const { data, isLoading } = useMarketsQuery({ search: search })
  return (
    <Page
      headerSlog={
        <PageHeader
          title={'Страны'}
          searchValue={search}
          onSearchOnChange={setSearch}
          slot={
            <div className={'flex flex-row items-center gap-2'}>
              <Button type={'button'}>
                <Link href={'/admin/market/new'}>
                  <Plus size={14} />
                </Link>
              </Button>
            </div>
          }
        />}
    >
      <div className={'flex flex-col gap-6'}>
        <DataTable<MarketType> data={data} columns={columns} isLoading={isLoading} />
      </div>
    </Page>
  );
}