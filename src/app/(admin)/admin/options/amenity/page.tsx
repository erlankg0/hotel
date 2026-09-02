'use client';

import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { useAmenitiesQuery, columns } from '@/entities/amenity';
import { Button } from '@/shared/ui/button';
import { DataTable } from '@/shared/ui/data-table';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';

import type { AmenityType } from '@/entities/amenity';

export default function RequestPage() {
  const [search, setSearch] = useState<string>('');
  const { data, isLoading } = useAmenitiesQuery(search);

  return (
    <Page
      headerSlog={
        <PageHeader
          title={'Номера'}
          searchValue={search}
          onSearchOnChange={setSearch}
          slot={<div className={'flex flex-row items-center gap-2'}>
            <Button type={'button'}>
              <Link href={'amenity/new'}>
                <Plus size={14} />
              </Link>
            </Button>
          </div>}
        />}
    >

      <div className={'flex flex-row items-center gap-2'}>
        <DataTable<AmenityType> columns={columns} data={data} isLoading={isLoading} />
      </div>

    </Page>
  );
}