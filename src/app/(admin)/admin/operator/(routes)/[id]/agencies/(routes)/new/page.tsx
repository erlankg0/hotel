'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useParams } from 'next/navigation';

import { CreateForm, agencySchema, useAgencyCreate } from '@/features/agency';
import { useUploadFile } from '@/shared/lib/hooks/useUploadFile';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { AgencyCreateFormValues, AgencyCreateFromInput } from '@/features/agency';

export default function AgencyNew() {
  const uploadFile = useUploadFile();
  const { handleOnSubmit, isPending } = useAgencyCreate();
  const params = useParams<{ id: string }>();

  const id = params.id;

  async function handleOnSubmitForm(dto: AgencyCreateFromInput) {
    await handleOnSubmit({ title: dto.title, id: id });
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
        <Button disabled={isPending}>
          {isPending || uploadFile.isPending ? (
            <span className={'loader'}><Loader size={14} />Сохранение...</span>
          ) : (
            'Сохранить'
          )}
        </Button>
      </WrapperForm>
    </Page>
  );
}