'use client';

import { WrapperForm } from '@/shared/providers/form'
import { CreatePeriod } from '@/features/contract-period';

export default function Page() {
    return (
        <WrapperForm>
            <CreatePeriod />
        </WrapperForm>
    )
}