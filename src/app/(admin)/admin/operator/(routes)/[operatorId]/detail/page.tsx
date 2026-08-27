'use client';

import { useParams } from 'next/navigation'
import { useOperatorQuery } from '@/entities/operator';
import { Page } from '@/widget/page';

export default function OperatorUpdatePage() {
  const { operatorId } = useParams<{ operatorId: string }>();
  const { data, isLoading } = useOperatorQuery(operatorId);


  return (
    <Page>
      {isLoading && (<p>dsad</p>)}
      <p>{data?.title}</p>
    </Page>
  );
}