'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useParams } from 'next/navigation';

import { CreateForm, useOccupancyRuleCreate, occupancyRuleSchema } from '@/features/occupancy-rule';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { OccupancyRuleInput, OccupancyRuleOutput } from '@/features/occupancy-rule';

export default function CreatePage() {
    const { occupancyId } = useParams<{ occupancyId: string }>()
    const { handleOnSubmit, isPending } = useOccupancyRuleCreate();

    const handleOnSubmitRule = async (dto: OccupancyRuleInput) => {
        await handleOnSubmit({
            multiplier: dto.multiplier,
            occupancyId: occupancyId
        })
    }

    return (
        <Page>
            <WrapperForm<OccupancyRuleInput, OccupancyRuleOutput>
                onSubmit={handleOnSubmitRule}
                options={{
                    mode: 'onChange',
                    resolver: zodResolver(occupancyRuleSchema),
                }}
                className={'flex flex-col gap-6'}
            >
                <CreateForm />
                <Button disabled={isPending}>
                    {isPending ? (
                        <span className={'loader'}><Loader size={14} />Сохранение...</span>
                    ) : (
                        'Сохранить'
                    )}
                </Button>
            </WrapperForm>
        </Page>
    );
}