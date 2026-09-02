'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
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
        <Button
          disabled={isPending}
          type="submit"
          className="relative w-full"
        >
          <p
            className={`flex items-center justify-center gap-2 transition-all duration-200 ${
              isPending ? 'opacity-100' : 'opacity-100'
            }`}
          >
            {isPending && <Loader2 className="size-4 animate-spin" />}
            <span>{isPending ? 'Сохранение...' : 'Сохранить'}</span>
          </p>
        </Button>
      </WrapperForm>
    </Page>
  );
}