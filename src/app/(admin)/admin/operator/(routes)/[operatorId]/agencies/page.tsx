'use client';

import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

import { columnsOperator, useAgency } from '@/entities/agency';
import { Button } from '@/shared/ui/button';
import { DataTable } from '@/shared/ui/data-table';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';

import type { AgencyType } from '@/entities/agency';

export default function AgencyPage() {
  const [search, setSearch] = useState<string>('');
  const { operatorId } = useParams<{ operatorId: string }>();
  const { data, isLoading } = useAgency({ search: search, id: operatorId });

  return (
    <Page
      headerSlog={
        <PageHeader
          title={'Агенство'}
          searchValue={search}
          onSearchOnChange={setSearch}
          slot={
            <div className={'flex flex-row items-center gap-2'}>
              <Button type={'button'}>
                <Link href={'agencies/new'}>
                  <Plus size={14} />
                </Link>
              </Button>
            </div>
          }
        />}
    >
      <div className={'flex flex-col gap-6'}>
        <DataTable<AgencyType> data={data} columns={columnsOperator} isLoading={isLoading} />
      </div>
    </Page>
  );
}