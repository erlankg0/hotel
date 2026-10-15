'use client';

import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

import {
  columns,
  useContractPeriodsQuery,
} from '@/entities/contract-period';
import { Button } from '@/shared/ui/button';
import { DataTable } from '@/shared/ui/data-table';
import { PaginationUI } from '@/shared/ui/paginator/pagination';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';


import type { ContractPeriodType } from '@/entities/contract-period';

export default function PeriodsPage() {
  const [search, setSearch] = useState('');
  const { contractId } = useParams<{ contractId: string }>();
  const { data, page, setPage, limit, total, isLoading } =
    useContractPeriodsQuery({ search, id: contractId });

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  return (
    <Page
      headerSlog={
        <PageHeader
          title="Периоды проживания"
          searchValue={search}
          onSearchOnChange={handleSearchChange}
          slot={
            <Button>
              <Plus />
              <Link href={"periods/add"}>Добавить</Link>
            </Button>
          }
        />
      }
    >
      <section className="space-y-4">
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-3 shadow-sm sm:p-5">
          <DataTable<ContractPeriodType>
            data={data}
            columns={columns}
            isLoading={isLoading}
            caption="Периоды проживания по контракту"
          />

          <div className="flex min-h-10 items-center justify-end border-t border-slate-100 pt-3">
            <PaginationUI
              page={page}
              onPage={setPage}
              limit={limit || 10}
              total={total ?? data.length}
            />
          </div>
        </div>
      </section>
    </Page>
  );
}
