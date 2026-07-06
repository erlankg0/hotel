'use client';

import { CreateForm } from '@/features/agency';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

export default function AgencyNew() {
  const handleSubmit = (e) => {
    console.log(e);
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