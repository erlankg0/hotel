'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';

import { CreateForm, hotelSchema, useHotelCreate } from '@/features/hotel';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { HotelCreateFormValues, HotelCreateFromInput, HotelDto } from '@/features/hotel';

export default function HotelNew() {
  const { handleOnSubmit, isPending } = useHotelCreate();

  async function handleOnSubmitForm(dto: HotelDto) {
    await handleOnSubmit(dto);
  }

  return (
    <Page>
      <WrapperForm<HotelCreateFromInput, HotelCreateFormValues>
        onSubmit={handleOnSubmitForm}
        options={{
          mode: 'onChange',
          resolver: zodResolver(hotelSchema),
        }}
      >
        <CreateForm />
        <Button disabled={isPending}>
          {isPending ? (
            <span className={'loader'}><Loader size={14} />Сохранение...</span>
          ) : (
            'Сохранить'
          )}
        </Button>
      </WrapperForm>
    </Page>
  );
}