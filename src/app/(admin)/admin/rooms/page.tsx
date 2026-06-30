'use client';

import { Plus, Info } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { useRoomsQuery, RoomCard, RoomSlider, RoomInfo } from '@/entities/room';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';


export default function Rooms() {
  const [search, setSearch] = useState<string>('');
  const { isLoading, data } = useRoomsQuery(search);

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
                <Link href={'/admin/options'}>
                  <Info size={14} />
                </Link>
              </Button>
            </div>
          }
        />}
    >
      <div className={'flex flex-col gap-6'}>
        {!isLoading && (!data || data.length === 0) && (
          <div className="py-12 text-center text-muted-foreground">
            Нет данных
          </div>
        )} {data && data.map((room) => (
        <RoomCard key={room.id}>
          <RoomCard.Slider>
            <RoomSlider photos={room.photos} />
          </RoomCard.Slider>
          <RoomCard.Info id={room.id}>
            <RoomInfo {...room} slot={
              <div>
                <Link href={`/admin/rooms/${room.id}/detail`}>Детали</Link>
              </div>
            } />
          </RoomCard.Info>
        </RoomCard>
      ))}
      </div>
    </Page>
  );
}