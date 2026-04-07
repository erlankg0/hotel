'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';

import styles from '@/app/(auth)/layout.module.scss';
import { useRequestCreate, RequestSchema, CreateForm } from '@/features/requests';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { RequestDto } from '@/features/requests';


export default function NewPage() {
  const { isPending, handleOnSubmit } = useRequestCreate();
  return (
    <Page>
      <WrapperForm<RequestDto>
        onSubmit={handleOnSubmit}
        options={{
          mode: 'onChange',
          resolver: zodResolver(RequestSchema),
        }}

      >
        <CreateForm />
        <Button
          disabled={isPending}
          type={'submit'}
          className={styles.button}
        >
          {isPending ? (<span className={styles.loader}><Loader size={14} />Сохранение...</span>) : ('Сохранить')}
        </Button>

      </WrapperForm>
    </Page>
  );
}