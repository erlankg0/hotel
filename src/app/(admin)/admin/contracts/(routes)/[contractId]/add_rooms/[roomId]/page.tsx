'use client';

import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';
import { useState } from 'react';
import { useOccupancyRulesQuery, columns } from '@/entities/occupcancy-rule';
import type { OccupancyRuleType } from '@/entities/occupcancy-rule';
import { DataTable } from '@/shared/ui/data-table';
import { useParams } from 'next/navigation';

export default function OccupancyPage() {
    const { roomId } = useParams<{ roomId: string }>();
    const [search, setSearch] = useState('');

    const { data, isLoading } = useOccupancyRulesQuery({
        id: roomId,
        search,
    });

    return (
        <Page
            headerSlog={
                <PageHeader
                    title="Правила проживания"
                    searchValue={search}
                    onSearchOnChange={setSearch}
                />
            }
        >
            <div className="space-y-4">
                <DataTable<OccupancyRuleType>
                    isLoading={isLoading}
                    columns={columns}
                    data={data ?? []}
                />
            </div>
        </Page>
    );
}