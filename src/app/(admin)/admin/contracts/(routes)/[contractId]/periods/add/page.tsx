'use client';

import { CreatePeriod } from '@/features/contract-period';
import { WrapperForm } from '@/shared/providers/form'

export default function Page() {
    return (
        <WrapperForm>
            <CreatePeriod />
        </WrapperForm>
    )
}