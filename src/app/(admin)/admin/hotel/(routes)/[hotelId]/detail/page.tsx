'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useParams } from 'next/navigation';

import { useHotelQuery } from '@/entities/hotel';
import { UpdateForm, hotelSchema, useHotelUpdate, FormSkeleton } from '@/features/hotel';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { HotelFormValues, HotelFromInput, HotelDto } from '@/features/hotel';

export default function HotelUpdate() {
  const { handleOnSubmit, isPending } = useHotelUpdate();
  const { hotelId } = useParams<{ hotelId: string }>();
  const { data, isLoading } = useHotelQuery(hotelId);

  async function handleOnSubmitForm(dto: HotelDto) {
    await handleOnSubmit({
      dto: dto,
      id: hotelId,
    });
  }

  return (
    <Page>
      {isLoading ? (<FormSkeleton />) : (
        <WrapperForm<HotelFromInput, HotelFormValues>
          onSubmit={handleOnSubmitForm}
          options={{
            mode: 'onChange',
            resolver: zodResolver(hotelSchema),
            defaultValues: {
              title: data?.title,
              description: data?.description,
            },
          }}
        >
          <UpdateForm />
          <Button
            disabled={isPending}
            type="submit"
            className="relative w-full"
          >
            <p
              className={`flex items-center justify-center gap-2 transition-all duration-200 ${
                isPending ? 'opacity-100' : 'opacity-100'
              }`}
            >
              {isPending && <Loader2 className="size-4 animate-spin" />}
              <span>{isPending ? 'Обновление...' : 'Обновить'}</span>
            </p>
          </Button>
        </WrapperForm>
      )}
    </Page>
  );
}