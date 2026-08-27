'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
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