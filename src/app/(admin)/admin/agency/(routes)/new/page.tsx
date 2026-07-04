'use client';

import { CreateForm } from '@/features/agency';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { FormEvent } from 'react';

export default function AgencyNew() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(e.currentTarget);
  };
  return (
    <Page>
      <WrapperForm onSubmit={handleSubmit}>
        <CreateForm />
        <Button>Save</Button>
      </WrapperForm>
    </Page>
  );
}