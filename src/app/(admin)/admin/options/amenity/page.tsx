'use client';

import { Loader, Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { useAmenity } from '@/entities/amenity';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';

export default function RequestPage() {
  const [search, setSearch] = useState<string>('');
  const { data, isLoading } = useAmenity(search);

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

        {data && data.map((item) => (
          <div key={item.id}>
            {item.name}
          </div>
        ))}

      </div>

    </Page>
  );
}