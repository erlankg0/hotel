'use client';

import { ContractPeriodList } from '@/features/contract-period';
import { WrapperForm } from '@/shared/providers/form'

export default function Page() {
    return (
        <WrapperForm>
            <ContractPeriodList />
        </WrapperForm>
    )
}
