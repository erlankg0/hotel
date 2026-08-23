'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';

import { CreateForm, countryCreateSchema, useCountryCreate } from '@/features/country';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { CountryCreateInput, CountryCreateOutput } from '@/features/country';

export default function MarketNew() {
  const { handleOnSubmit, isPending } = useCountryCreate();

  return (
    <Page>
      <WrapperForm<CountryCreateOutput, CountryCreateInput>
        onSubmit={handleOnSubmit}
        options={{
          mode: 'onChange',
          resolver: zodResolver(countryCreateSchema),
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