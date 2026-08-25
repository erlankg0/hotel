'use client';

import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

import { columns, useCountiesQuery, type CountryType } from '@/entities/country';
import { Button } from '@/shared/ui/button';
import { DataTable } from '@/shared/ui/data-table';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';

export default function CountryPage() {

  const [search, setSearch] = useState<string>('');
  const { marketId } = useParams<{ marketId: string }>();
  const { data, isLoading } = useCountiesQuery({ search: search, id: marketId });

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
                <Link href={'countries/new'}>
                  <Plus size={14} />
                </Link>
              </Button>
            </div>
          }
        />}
    >
      <div className={'flex flex-col gap-6'}>
        <DataTable<CountryType> data={data} columns={columns} isLoading={isLoading} />
      </div>
    </Page>
  );
}