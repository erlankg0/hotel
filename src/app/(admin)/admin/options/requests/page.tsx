'use client';

import { Loader, Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { useRequest, RequestItem } from '@/entities/requests';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';

export default function RequestPage() {
  const [search, setSearch] = useState<string>('');
  const { requests, isLoading } = useRequest(search);

  if (isLoading) {
    return <Loader className="animate-spin text-gray-500" size={32} />;
  }

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
                <Link href={'requests/new'}>
                  <Plus size={14} />
                </Link>
              </Button>
            </div>
          }
        />}
    >
      <div className={'flex flex-col gap-4'}>
        {requests?.data.data.map((item) => (
          <RequestItem slot={<></>} key={item.id} name={item.name} />
        ))}
      </div>
    </Page>
  );
}