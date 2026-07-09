'use client';

import { zodResolver } from '@hookform/resolvers/zod';

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
    const icon = await Promise.all([uploadFile.mutateAsync(file)]);
    const emailIds = await Promise.all([...emails.map((mail) => {
      return handleOnSubmitEmail(mail);
    })]);
    const phoneIds = await Promise.all([...phones.map((phone) => {
      return handleOnSubmitPhone(phone);
    })]);
    handleOnSubmit({ ...rest, emailIds: emailIds, phones: phoneIds });
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
        <Button disabled={isPending}>Save</Button>
      </WrapperForm>
    </Page>
  );
}