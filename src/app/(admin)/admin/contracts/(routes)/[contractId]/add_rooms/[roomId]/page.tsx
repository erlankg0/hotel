'use client';

import { Page } from '@/widget/page';
import { } from '@/widget/page-header';
import { WrapperForm } from '@/shared/providers/form';
import { CreateForm, OccupancyRuleInput, OccupancyRuleOutput, useOccupancyRuleCreate } from '@/features/occupancy-rule';
import { useOccupancyCreate } from '@/features/occupancy';
import { Button } from '@/shared/ui/button';

export default function OccupancyPage() {

    const { create } = useOccupancyRuleCreate();
    const { create: createOccupancy } = useOccupancyCreate();

    const handleOnSubmit = async (dto: OccupancyRuleInput) => {
        console.log(dto);
        const occupancy = await createOccupancy({
            adults: dto.adults,
            babies: dto.babies,
            children: dto.children,
            title: dto.title
        });
        await create({
            multiplier: dto.multiplier,
            contractRoomId: '',
            occupancyId: occupancy.id
        })
    }

    return (
        <Page>
            <WrapperForm<OccupancyRuleInput, OccupancyRuleOutput>
                onSubmit={handleOnSubmit}
            >
                <CreateForm />
                <Button>Create</Button>
            </WrapperForm>
        </Page>
    )
};