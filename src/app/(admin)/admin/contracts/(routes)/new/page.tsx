import { Suspense } from 'react';
import { Page } from '@/widget/page';
import ContractNew from './contract-new';

export default function ContractPage() {
  return (
    <Page>
      <Suspense fallback={<ContractSkeleton />}>
        <ContractNew />
      </Suspense>
    </Page>
  );
}

function ContractSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-8 w-48 animate-pulse rounded-md bg-muted" />
      <div className="h-96 animate-pulse rounded-md bg-muted" />
    </div>
  );
}