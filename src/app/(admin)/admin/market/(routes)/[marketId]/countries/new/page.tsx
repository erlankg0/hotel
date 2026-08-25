'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useParams } from 'next/navigation';

import { CreateForm, countryFormSchema, useCountryCreate } from '@/features/country';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { CountryCreateInput, CountryCreateOutput, CountryDto } from '@/features/country';

export default function Country() {
  const { handleOnSubmit, isPending } = useCountryCreate();
  const { marketId } = useParams<{ marketId: string }>();

  async function onHandleSubmit(dto: CountryDto) {
    await handleOnSubmit({ ...dto, marketId: marketId });
  }

  return (
    <Page>
      <WrapperForm<CountryCreateOutput, CountryCreateInput>
        onSubmit={onHandleSubmit}
        options={{
          mode: 'onChange',
          resolver: zodResolver(countryFormSchema),
        }}
      >
        <CreateForm />
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