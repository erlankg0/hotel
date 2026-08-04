'use client';

import { Create } from '@/features/operator/create/form/create';
import { WrapperForm } from '@/shared/providers/form';
import { Page } from '@/widget/page';

export default function Operator() {
  return (
    <Page>
      <WrapperForm>
        <Create />
      </WrapperForm>
    </Page>
  );
}