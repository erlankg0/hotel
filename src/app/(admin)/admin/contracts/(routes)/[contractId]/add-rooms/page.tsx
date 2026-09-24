'use client';

import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { useRoomCategoriesQuery, columns, type RoomCategortType } from '@/entities/room-category';
import { useHotelSwitch } from '@/shared/store';
import { Button } from '@/shared/ui/button';
import { DataTable } from '@/shared/ui/data-table';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';

export default function RoomPage() {
  const hotelId = useHotelSwitch((state) => state.hotelId);

  const [search, setSearch] = useState<string>('');
  const { data, isLoading } = useRoomCategoriesQuery({ search: search, id: hotelId || '' });

  return (
    <Page
      headerSlog={
        <PageHeader
          title={'Категории номеров'}
          searchValue={search}
          onSearchOnChange={setSearch}
          slot={
            <div className={'flex flex-row items-center gap-2'}>
              <Button type={'button'}>
                <Link href={`room-category/new?=hotelId=${hotelId}`}>
                  <Plus size={14} />
                </Link>
              </Button>
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