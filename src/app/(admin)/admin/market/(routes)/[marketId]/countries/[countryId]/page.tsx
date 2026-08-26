'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useCallback } from 'react';

import { useCountryQuery } from '@/entities/country';
import { UpdateForm, FormSkeleton, useCountryUpdate, countryFormSchema } from '@/features/country';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';

import type { CountryUpdateDto, CountryUpdateOutput, CountryUpdateInput } from '@/features/country';

export default function CountryPage() {

  const { countryId, marketId } = useParams<{ countryId: string, marketId: string }>();
  const { data, isLoading } = useCountryQuery(countryId);
  const { handleOnSubmit, isPending } = useCountryUpdate();

  const onHandleSubmit = useCallback(async (dto: CountryUpdateDto) => {
    await handleOnSubmit({ id: countryId, dto: { ...dto, marketId } });

  }, [countryId, handleOnSubmit, marketId]);
  
  return (
    <Page
      headerSlog={
        <PageHeader
          title={'Страны'}
        />}
    >
      {isLoading || !data?.title ? (
        <FormSkeleton />
      ) : (
        <WrapperForm<CountryUpdateOutput, CountryUpdateInput>
          onSubmit={onHandleSubmit}
          options={{
            mode: 'onChange',
            resolver: zodResolver(countryFormSchema),
            defaultValues: {
              ...data,
            },
          }}
          className="flex h-full flex-col justify-between"
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
      )}
    </Page>
  );
}