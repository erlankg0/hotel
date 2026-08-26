'use client';

import { useParams } from 'next/navigation';

import { useCountryQuery } from '@/entities/country';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';
import { WrapperForm } from '@/shared/providers/form';
import { UpdateForm, useCountryUpdate } from '@/features/country';
export default function CountryPage() {

  const { countryId } = useParams<{ countryId: string }>();
  const { data, isLoading } = useCountryQuery(countryId);
  const { handleOnSubmit } = useCountryUpdate();
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
      <WrapperForm<CountryCreateOutput, CountryCreateInput>
        onSubmit={handleOnSubmit}
        options={{
          mode: 'onChange',
          resolver: zodResolver(countryFormSchema),
        }}
      >
        <UpdateForm />
        <Button disabled={isPending}>
          {isPending ? (
            <span className={'loader'}><Loader size={14} />Сохранение...</span>
          ) : (
            'Сохранить'
          )}
        </Button>
      </WrapperForm>
    </Page>
  );
}