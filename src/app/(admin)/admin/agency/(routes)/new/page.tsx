'use client';

import { CreateForm } from '@/features/agency';
import { WrapperForm } from '@/shared/providers/form';
import { Page } from '@/widget/page';

export default function AgencyNew() {
  return (
    <Page>
      <WrapperForm>
        <CreateForm />
      </WrapperForm>
    </Page>
  );
}