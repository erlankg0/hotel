'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import {  useSearchParams } from 'next/navigation';

import { CreateForm, agencySchema, useAgencyCreate } from '@/features/agency';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { AgencyCreateFormValues, AgencyCreateFromInput } from '@/features/agency';

export default function AgencyNew() {
  const { handleOnSubmit, isPending } = useAgencyCreate();
  const searchParams = useSearchParams();
  const operatorId = searchParams.get('operatorId') || '';

  async function handleOnSubmitForm(dto: AgencyCreateFromInput) {
    if (!operatorId) {
      throw new Error('Operator ID не найден');
    }

    await handleOnSubmit({
     ...dto,
      operatorId: operatorId,
    });
  }

  return (
    <Page>
      <WrapperForm<AgencyCreateFromInput, AgencyCreateFormValues>
        onSubmit={handleOnSubmitForm}
        options={{
          mode: 'onChange',
          resolver: zodResolver(agencySchema),
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