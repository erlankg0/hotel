'use client';

import { zodResolver } from '@hookform/resolvers/zod';

import { CreateForm, agencyCreateSchema } from '@/features/agency';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { AgencyCreateFormValues, AgencyCreateFromInput } from '@/features/agency';

export default function AgencyNew() {

  const handleSubmit = (dto: AgencyCreateFormValues) => {
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