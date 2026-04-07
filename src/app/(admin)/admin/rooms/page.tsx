'use client';
import { Plus, Info } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { RoomPrice } from '@/entities/room';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';


export default function Rooms() {
  const [search, setSearch] = useState<string>('');


  return (
    <Page headerSlog={
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
      />}>
      <div className={'flex flex-col gap-6'}>
        <RoomPrice />
        <RoomPrice />
        <RoomPrice />
        <RoomPrice />
      </div>
    </Page>
  );
}