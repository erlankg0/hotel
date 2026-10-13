'use client';

import {
    ContractPeriodList,
    contractPeriodSchema,
    useCreateContractPeriodList,
} from '@/features/contract-period';

import type { ContractPeriodFormValues } from '@/features/contract-period';

import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
import { useCallback } from 'react';
import { LoaderCircle, Save } from 'lucide-react';

import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

export default function PagePeriods() {
    const { contractId } = useParams<{ contractId: string }>();

    const { create, isPending } = useCreateContractPeriodList();

    const onHandleSubmit = useCallback(
        async (dto: ContractPeriodFormValues) => {
            await create({
                periods: dto.periods,
                contractId,
            });
        },
        [create, contractId],
    );

    return (
        <Page>
            <WrapperForm
                onSubmit={onHandleSubmit}
                options={{
                    mode: 'onChange',
                    resolver: zodResolver(contractPeriodSchema),
                }}
            >
                <div className="space-y-6">
                    <ContractPeriodList />

                    <div className="flex justify-end border-t pt-5">
                        <Button
                            type="submit"
                            disabled={isPending}
                            className="min-w-40 gap-2 transition-all duration-200 active:scale-[0.98]"
                        >
                            {isPending ? (
                                <>
                                    <LoaderCircle className="size-4 animate-spin" />
                                    Сохранение...
                                </>
                            ) : (
                                <>
                                    <Save className="size-4" />
                                    Сохранить периоды
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            </WrapperForm>
        </Page>
    );
}
