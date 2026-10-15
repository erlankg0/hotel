'use client';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

import { useOccupancyRulesQuery, columns } from '@/entities/occupcancy-rule';
import { Button } from '@/shared/ui/button';
import { DataTable } from '@/shared/ui/data-table';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';

import type { OccupancyRuleType } from '@/entities/occupcancy-rule';




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
                    slot={
                        <Button>
                            <Link href={'occupancy/add'}><Plus /></Link>
                        </Button>
                    }
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