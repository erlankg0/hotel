'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';

import { useOccupancyCreate } from '@/features/occupancy';
import {
    CreateForm,
    occupancyRuleFormSchema,
    useOccupancyRuleCreate,
} from '@/features/occupancy-rule';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type {
    OccupancyRuleInput,
    OccupancyRuleOutput} from '@/features/occupancy-rule';

export default function OccupancyPage() {
    const { roomId } = useParams<{ roomId: string }>();

    const {
        create: createOccupancyRule,
        isPending: isCreatingRule,
    } = useOccupancyRuleCreate();

    const {
        create: createOccupancy,
        isPending: isCreatingOccupancy,
    } = useOccupancyCreate();

    const isPending = isCreatingRule || isCreatingOccupancy;

    const handleSubmit = async (dto: OccupancyRuleInput) => {
        const { id: occupancyId } = await createOccupancy({
            adults: dto.adults,
            babies: dto.babies,
            children: dto.children,
            title: dto.title,
        });

        await createOccupancyRule({
            multiplier: dto.multiplier,
            contractRoomId: roomId,
            occupancyId,
        });
    };

    return (
        <Page>
            <WrapperForm<OccupancyRuleInput, OccupancyRuleOutput>
                onSubmit={handleSubmit}
                options={{
                    mode: 'onChange',
                    resolver: zodResolver(occupancyRuleFormSchema),
                }}
            >
                <div className="mx-auto w-full space-y-6">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Создание правила размещения
                    </h1>

                    <p className="text-sm text-muted-foreground">
                        Укажите параметры размещения и коэффициент для данного типа номера.
                    </p>

                    <div className="rounded-lg border bg-card p-6 shadow-sm">
                        <CreateForm />
                    </div>

                    <div className="flex justify-end">
                        <Button
                            type="submit"
                            disabled={isPending}
                            className="min-w-28"
                        >
                            {isPending ? 'Сохранения...' : 'Сохранить'}
                        </Button>
                    </div>
                </div>
            </WrapperForm>
        </Page>
    );
}