'use client';

import { useState } from 'react';

import { columns, useAgenciesQuery } from '@/entities/agency';
import { DataTable } from '@/shared/ui/data-table';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';

import type { AgencyType } from '@/entities/agency';

export default function AgencyPage() {
  const [search, setSearch] = useState<string>('');
  const { data, isLoading } = useAgenciesQuery({ search: search });

  return (
    <Page
      headerSlog={<PageHeader title={'Агенство'} searchValue={search} onSearchOnChange={setSearch} />}
    >
      <div className={'flex flex-col gap-6'}>
        <DataTable<AgencyType> data={data} columns={columns} isLoading={isLoading} />
      </div>
    </Page>
  );
}