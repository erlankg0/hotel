'use client';

import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { TableOperator } from '@/entities/operator';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';

export default function AgencyPage() {
  const [search, setSearch] = useState<string>('');
  return (
    <Page
      headerSlog={
        <PageHeader
          title={'Операторы'}
          searchValue={search}
          onSearchOnChange={setSearch}
          slot={
            <div className={'flex flex-row items-center gap-2'}>
              <Button type={'button'}>
                <Link href={'/admin/operator/new'}>
                  <Plus size={14} />
                </Link>
              </Button>
            </div>
          }
        />}
    >
      <div className={'flex flex-col gap-6'}>
        <div className={'flex flex-col gap-6'}>
          <TableOperator />
        </div>
      </div>
    </Page>
  );
}