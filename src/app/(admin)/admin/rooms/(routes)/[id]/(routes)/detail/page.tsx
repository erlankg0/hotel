'use client';

import { useParams } from 'next/navigation';

import { useRoomQuery } from '@/entities/room';
import { Page } from '@/widget/page';

export default function RoomDetail() {
  const { id } = useParams<{ id: string }>();
  const { isLoading, data, error } = useRoomQuery(id);
  return (
    <Page>
      {isLoading && (<p>Loading...</p>)}
      {error && (<p>{error.message}</p>)}
      {data && (<p>{data.title}</p>)}
    </Page>
  );
}