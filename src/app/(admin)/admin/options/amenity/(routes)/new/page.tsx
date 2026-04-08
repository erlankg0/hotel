'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';

import styles from '@/app/(auth)/layout.module.scss';
import { useAmenityCreate, AmenitySchema, CreateForm } from '@/features/amenity';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { AmenityDto } from '@/features/amenity';


export default function NewPage() {
  const { isPending, handleOnSubmit } = useAmenityCreate();
  return (
    <Page>
      <WrapperForm<AmenityDto>
        onSubmit={handleOnSubmit}
        options={{
          mode: 'onChange',
          resolver: zodResolver(AmenitySchema),
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