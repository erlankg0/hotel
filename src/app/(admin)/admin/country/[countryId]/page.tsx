'use client';

import { useParams } from 'next/navigation';

import { useCountryQuery } from '@/entities/country';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';

export default function CountryPage() {

  const { countryId } = useParams<{ countryId: string }>();
  const { data, isLoading } = useCountryQuery(countryId);

  return (
    <Page
      headerSlog={
        <PageHeader
          title={'Страны'}
        />}
    >
      <div className={'flex flex-col gap-6'}>
        {data?.title}
      </div>
    </Page>
  );
}