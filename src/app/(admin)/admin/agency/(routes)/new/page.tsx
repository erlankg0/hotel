'use client';

import { zodResolver } from '@hookform/resolvers/zod';

import { CreateForm, agencyCreateSchema } from '@/features/agency';
import { useUploadFile } from '@/shared/lib/hooks/useUploadFile';
import { useEmail } from '@/features/email';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { AgencyCreateFormValues, AgencyCreateFromInput } from '@/features/agency';

export default function AgencyNew() {
  const uploadFile = useUploadFile();
  const {} = useEmail();
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
    const emailIds = await Promise.all([...emails.map((mail) =>)]);

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