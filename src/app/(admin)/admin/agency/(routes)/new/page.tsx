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
  const {} = useAgencyCreate();

  const handleSubmit = async (dto: AgencyCreateFormValues) => {
    console.log('handleSubmit');
    const { phones, emails, file, ...rest } = dto;
    emails.forEach(email => {
      console.log('email', email);
    });
    phones.forEach(phone => {
      console.log('phone', phone);
    });
    console.log('file', file);
    console.log('rest', rest);
    const icon = await Promise.all([uploadFile.mutateAsync(file)]);
    const emailIds = await Promise.all([...emails.map((mail) => {
      handleOnSubmitEmail(mail);
    })]);
    const phoneIds = await Promise.all([...phones.map((phone) => {
      handleOnSubmitPhone(phone);
    })]);

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
        <Button>Save</Button>
      </WrapperForm>
    </Page>
  );
}