'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useRoomCategoriesByContract, columns, type RoomCategortType } from '@/entities/room-category';
import { AddContractRoomForm } from '@/features/contract-room';
import { DataTable } from '@/shared/ui/data-table';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';

export default function RoomPage() {
  const { contractId } = useParams<{ contractId: string }>()
  const [search, setSearch] = useState<string>('');
  const { data, isLoading } = useRoomCategoriesByContract({ search: search, id: contractId });

  return (
    <Page
      headerSlog={
        <PageHeader
          title={'Категории номеров'}
          searchValue={search}
          onSearchOnChange={setSearch}
          slot={
            <div className={'flex flex-row items-center gap-2'}>
              <AddContractRoomForm />
            </div>
          }
        />}
    >
      <div className={'flex flex-col gap-6'}>
        <DataTable<RoomCategortType> data={data} columns={columns} isLoading={isLoading} />
      </div>
    </Page>
  );
}