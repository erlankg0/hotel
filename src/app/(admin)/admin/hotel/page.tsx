'use client';

import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { columns, useHotelsQuery, type HotelType } from '@/entities/hotel';
import { Button } from '@/shared/ui/button';
import { DataTable } from '@/shared/ui/data-table';
import { PaginationUI } from '@/shared/ui/paginator/pagination';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';

export default function HotelPage() {
  const [search, setSearch] = useState<string>('');
  const { data, isLoading, setPage, page, total } = useHotelsQuery({ search: search });

  return (
    <Page
      headerSlog={
        <PageHeader
          title={'Отели'}
          searchValue={search}
          onSearchOnChange={setSearch}
          slot={
            <div className={'flex flex-row items-center gap-2'}>
              <Button type={'button'}>
                <Link href={'/admin/hotel/new'}>
                  <Plus size={14} />
                </Link>
              </Button>
            </div>
          }
        />}
    >
      <div className="flex h-full flex-col">
        <DataTable<HotelType>
          data={data}
          columns={columns}
          isLoading={isLoading}
          caption="Отели"
        />

        <div className="mt-auto flex justify-end pt-6">
          <PaginationUI
            page={page}
            onPage={setPage}
            limit={10}
            total={total || data.length}
          />
        </div>
      </div>

    </Page>
  );
}