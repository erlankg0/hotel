'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';

import { CreateForm, hotelSchema, useHotelCreate } from '@/features/hotel';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { HotelFormValues, HotelFromInput, HotelDto } from '@/features/hotel';

export default function HotelNew() {
  const { handleOnSubmit, isPending, ConfirmDialog } = useHotelCreate();

  async function handleOnSubmitForm(dto: HotelDto) {
    await handleOnSubmit(dto);
  }

  return (
    <Page>
      <WrapperForm<HotelFromInput, HotelFormValues>
        onSubmit={handleOnSubmitForm}
        options={{
          mode: 'onChange',
          resolver: zodResolver(hotelSchema),
        }}
      >
        <CreateForm />
        <Button
          disabled={isPending}
          type="submit"
          className="relative w-full"
        >
          <p
            className={`flex items-center justify-center gap-2 transition-all duration-200 ${isPending ? 'opacity-100' : 'opacity-100'
              }`}
          >
            {isPending && <Loader2 className="size-4 animate-spin" />}
            <span>{isPending ? 'Сохранение...' : 'Сохранить'}</span>
          </p>
        </Button>
      </WrapperForm>
      {ConfirmDialog}
    </Page>
  );
}