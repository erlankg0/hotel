'use client';

import { Plus, Info, Loader } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { RoomPrice, useRooms } from '@/entities/room';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';


export default function Rooms() {
  const [search, setSearch] = useState<string>('');
  const { isLoading, data } = useRooms(search);

  return (
    <Page
      headerSlog={
        <PageHeader
          title={'Номера'}
          searchValue={search}
          onSearchOnChange={setSearch}
          slot={
            <div className={'flex flex-row items-center gap-2'}>
              <Button type={'button'}>
                <Link href={'/admin/rooms/new'}>
                  <Plus size={14} />
                </Link>
              </Button>
              <Button type={'button'}>
                <Link href={'/admin/rooms/options'}>
                  <Info size={14} />
                </Link>
              </Button>
            </div>
          }
        />}
    >
      <div className={'flex flex-col gap-6'}>
        {isLoading ? (<Loader className={'sonner-loader'} />) : null}
        {data && (data.map((room) => {
          return (
            <RoomPrice {...room} key={room.id} />
          );
        }))}
      </div>
    </Page>
  );
}