'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useParams } from 'next/navigation';

import { useAgencyQuery } from '@/entities/agency';
import { UpdateForm, FormSkeleton, agencyUpdateSchema, useAgencyUpdate } from '@/features/agency';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { AgencyUpdateFormOutput, AgencyUpdateFromInput, AgencyUpdateDto } from '@/features/agency';

export default function AgencyUpdatePage() {
  const { operatorId, agencyId } = useParams<{ operatorId: string, agencyId: string }>();
  const { handleOnSubmit, isPending } = useAgencyUpdate();
  const { data, isLoading } = useAgencyQuery(agencyId);

  async function handleOnSubmitForm(dto: AgencyUpdateDto) {
    await handleOnSubmit({
      id: operatorId,
      dto: {
        title: dto.title,
        shortTitle: dto.shortTitle,
        operatorId: operatorId,
        market: dto.market,
      },
    });
  }

  return (
    <Page>
      {isLoading ?
        (<FormSkeleton />) :
        (<WrapperForm<AgencyUpdateFormOutput, AgencyUpdateFromInput>
            onSubmit={handleOnSubmitForm}
            options={{
              mode: 'onChange',
              resolver: zodResolver(agencyUpdateSchema),
              defaultValues: { ...data },
            }}

          >
            <UpdateForm />
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
                <span>{isPending ? 'Обновление...' : 'Обновить'}</span>
              </p>
            </Button>
          </WrapperForm>
        )}
    </Page>
  );
}