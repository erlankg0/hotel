'use client';
import { useParams } from 'next/navigation';

import { CreateGrid } from '@/features/contract-price'
import { Page } from '@/widget/page';

export default function ContractPricesPage() {
    const { contractId } = useParams<{ contractId: string }>();

    return (
        <Page>
            <CreateGrid id={contractId} />
        </Page>
    )
}
