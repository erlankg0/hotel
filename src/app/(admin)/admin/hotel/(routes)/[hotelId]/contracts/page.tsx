'use client';

import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { columns, useContractsQuery } from '@/entities/contract';
import { Button } from '@/shared/ui/button';
import { DataTable } from '@/shared/ui/data-table';
import { PaginationUI } from '@/shared/ui/paginator/pagination';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';

import type { ContractType } from '@/entities/contract';


export default function ContractsPage() {
    const searchParams = useSearchParams();

    const agencyId = searchParams.get('agencyId') || '';

    const [search, setSearch] = useState<string>('');
    const { data, isLoading, page, setPage, total, limit } = useContractsQuery({ search, id: agencyId });

    return (
        <Page
            headerSlog={
                <PageHeader
                    title={'Контракты'}
                    searchValue={search}
                    onSearchOnChange={setSearch}
                    slot={
                        <div className={'flex flex-row items-center gap-2'}>
                            <Button type={'button'}>
                                <Link href={`contracts/new?operatorId=${agencyId}`}>
                                    <Plus size={14} />
                                </Link>
                            </Button>
                        </div>
                    }
                />}
        >
            <div className={'flex flex-col gap-6'}>
                <DataTable<ContractType> caption={'Контракты'} columns={columns} data={data} isLoading={isLoading}>
                    <PaginationUI page={page} total={total || data.length} limit={limit || 10} onPage={setPage} />
                </DataTable>
            </div>
        </Page>
    );
}