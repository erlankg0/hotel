'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';

import { CreateForm, agencyCreateSchema, useAgencyCreate } from '@/features/agency';
import { useEmailCreate } from '@/features/email';
import { usePhoneCreate } from '@/features/phone';
import { useUploadFile } from '@/shared/lib/hooks/useUploadFile';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { AgencyCreateFormValues, AgencyCreateFromInput } from '@/features/agency';

export default function AgencyNew() {
  const uploadFile = useUploadFile();
  const { handleOnSubmit: handleOnSubmitEmail } = useEmailCreate();
  const { handleOnSubmit: handleOnSubmitPhone } = usePhoneCreate();
  const { handleOnSubmit, isPending } = useAgencyCreate();

  const handleSubmit = async (dto: AgencyCreateFormValues) => {
    const { phones, emails, file, ...rest } = dto;

    const [icon, emaiIds, phoneIds] = await Promise.all([
      uploadFile.mutateAsync(file),
      Promise.all(emails.map(handleOnSubmitEmail)),
      Promise.all(phones.map(handleOnSubmitPhone)),
    ]);

    await handleOnSubmit({
      ...rest,
      iconId: icon?.id,
      emailIds: emaiIds.map(i => i.id),
      phones: phoneIds.map(i => i.id),
    });

  };

  return (
    <Page>
      <WrapperForm<AgencyCreateFromInput, AgencyCreateFormValues>
        onSubmit={handleSubmit}
        options={{
          mode: 'onChange',
          resolver: zodResolver(agencyCreateSchema),
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