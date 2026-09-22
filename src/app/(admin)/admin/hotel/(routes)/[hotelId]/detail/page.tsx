'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Trash2Icon } from 'lucide-react';
import { useParams } from 'next/navigation';

import { useHotelQuery } from '@/entities/hotel';
import { UpdateForm, hotelSchema, useHotelUpdate, FormSkeleton, useHotelRemove } from '@/features/hotel';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { HotelFormValues, HotelFromInput, HotelDto } from '@/features/hotel';

export default function HotelUpdate() {
  const { hotelId } = useParams<{ hotelId: string }>();

  const { handleOnSubmit, isPending, ConfirmDialog } = useHotelUpdate();
  const {
    handleOnDelete,
    isPending: isPendingRemove,
    ConfirmDialog: ConfirmDialogRemove,
  } = useHotelRemove(hotelId);

  const { data, isLoading } = useHotelQuery(hotelId);

  function handleOnSubmitForm(dto: HotelDto) {
    handleOnSubmit({ dto, id: hotelId });
  }

  return (
    <Page>
      {isLoading ? (
        <FormSkeleton />
      ) : (
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

          <div className='flex flex-col gap-2'>
            <Button disabled={isPending} type="submit" className="relative w-full">
              <p className="flex items-center justify-center gap-2">
                {isPending && <Loader2 className="size-4 animate-spin" />}
                <span>{isPending ? 'Обновление...' : 'Обновить'}</span>
              </p>
            </Button>
            <Button
              type="button"
              variant="destructive"
              disabled={isPending || isPendingRemove}
              onClick={handleOnDelete}
            >
              <Trash2Icon />
              Удалить
            </Button>
          </div>

        </WrapperForm>
      )}

      {ConfirmDialog}
      {ConfirmDialogRemove}
    </Page>
  );
}