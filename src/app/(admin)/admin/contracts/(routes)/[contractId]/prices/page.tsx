'use client';
import { useParams } from 'next/navigation';

import { CreateGrid } from '@/features/contract-price'

export default function ContractPricesPage() {
    const { contractId } = useParams<{ contractId: string }>();

    return (
        <CreateGrid id={contractId} />
    )
}
