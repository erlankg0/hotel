import { Suspense } from 'react';

import ContractNew from './contract-new';

export default function Page() {
  return (
    <Suspense fallback={<ContractSkeleton />}>
      <ContractNew />
    </Suspense>
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