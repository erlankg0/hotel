'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { useMarketsQuery } from '@/entities/market';
import {
  CreateForm,
  ContractCreateFormSchema,
  useCreateContract,
} from '@/features/contract';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type {
  ContractFormInput,
  ContractFormOutput,
} from '@/features/contract';

export default function ContractNew() {
  const { handleOnSubmit, isPending } = useCreateContract();

  const { hotelId } = useParams<{ hotelId: string }>();
  const searchParams = useSearchParams();

  const agencyId = searchParams.get('agencyId');

  const [search, setSearch] = useState('');

  const { data, isLoading, page, setPage, total } = useMarketsQuery({});

  async function handleOnSubmitForm(dto: ContractFormOutput) {
    if (!agencyId) {
      throw new Error('Agency ID не найден');
    }

    await handleOnSubmit({
      ...dto,
      agencyId,
      hotelId,
      marketIds: dto.marketIds.map((item) => item.id),
    });
  }


  return (
    <Page>

      {agencyId ? (
        <WrapperForm<ContractFormInput, ContractFormOutput>
          onSubmit={handleOnSubmitForm}
          options={{
            mode: 'onChange',
            defaultValues: {
              marketIds: [],
            },
            resolver: zodResolver(ContractCreateFormSchema),
          }}
        >
          <CreateForm
            search={search}
            setSearch={setSearch}
            page={page}
            setPage={setPage}
            isLoading={isLoading}
            data={data}
            total={total}
          />

          <Button
            disabled={isPending}
            type="submit"
            className="relative w-full"
          >
            <p className="flex items-center justify-center gap-2">
              {isPending && (
                <Loader2 className="size-4 animate-spin" />
              )}

              <span>
              {isPending ? 'Сохранение...' : 'Сохранить'}
            </span>
            </p>
          </Button>
        </WrapperForm>
      ) : (
        <section className="flex flex-col items-center justify-center gap-3 py-20">
          <h2 className="text-xl font-semibold">
            Агентство не выбрано
          </h2>

          <Link href={`/admin/hotel/${hotelId}/agencies`} className="text-muted-foreground">
            Для создания контракта необходимо выбрать агентство.
          </Link>
        </section>
      )}


    </Page>
  );
}