'use client';

import { useParams } from 'next/navigation';

import { useMarketQuery } from '@/entities/market';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';

export default function DetailPage() {
  const { marketId } = useParams<{ marketId: string }>();
  const { data, isLoading } = useMarketQuery(marketId);

  return (
    <Page
      headerSlog={
        <PageHeader
          title={'Рынки'}
        />}
    >
      <div className={'flex flex-col gap-6'}>
        <p>{data?.title}</p>
        {isLoading && (<p>ads</p>)}
      </div>
    </Page>
  );
}