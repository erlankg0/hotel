'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useParams, useSearchParams } from 'next/navigation';

import {
  CreateForm,
  ContractSchema,
  useCreateContract,
} from '@/features/contract';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { ContractFormInput, ContractFormOutput } from '@/features/contract';

export default function ContractNew() {
  const { handleOnSubmit, isPending } = useCreateContract();
  const searchParams = useSearchParams();
  const { hotelId } = useParams<{ hotelId: string }>();
  const agencyId = searchParams.get('agencyId') || '';

  async function handleOnSubmitForm(dto: ContractFormInput) {
    await handleOnSubmit({
      ...dto,
      countryId: agencyId,
      agencyId: agencyId,
      hotelId: hotelId,
    });
  }

  return (
    <Page>
      <WrapperForm<ContractFormInput, ContractFormOutput>
        onSubmit={handleOnSubmitForm}
        options={{
          mode: 'onChange',
          resolver: zodResolver(ContractSchema),
        }}
      >
        <CreateForm />
        <Button
          disabled={isPending}
          type="submit"
          className="relative w-full"
        >
          <p
            className={`flex items-center justify-center gap-2 transition-all duration-200 ${isPending ? 'opacity-100' : 'opacity-100'
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