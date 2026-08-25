'use client';

import { useState } from 'react';

import { columns, useCountiesQuery, type CountryType } from '@/entities/country';
import { DataTable } from '@/shared/ui/data-table';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';

export default function CountryPage() {

  const [search, setSearch] = useState<string>('');
  const { data, isLoading } = useCountiesQuery({ search: search });

  return (
    <Page
      headerSlog={
        <PageHeader
          title={'Страны'}
          searchValue={search}
          onSearchOnChange={setSearch}
        />}
    >
      <div className={'flex flex-col gap-6'}>
        <DataTable<CountryType> data={data} columns={columns} isLoading={isLoading} />
      </div>
    </Page>
  );
}