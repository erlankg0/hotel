'use client';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

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
          <Button type={'button'}>
            <Link href={'new'}>
              <Plus size={14} />
            </Link>
          </Button>
        }
      />}>
      Room PAge
    </Page>
  );
}