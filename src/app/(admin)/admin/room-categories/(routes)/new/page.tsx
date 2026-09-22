'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useCallback } from 'react';

import { CreateForm, useRoomCategoryCreate, RoomCategorySchema } from '@/features/room-category';
import { WrapperForm } from '@/shared/providers/form';
import { useHotelSwitch } from '@/shared/store';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { RoomCategoryFormInput, RoomCategoryFormOutput, RoomCategoryDto } from '@/features/room-category';

export default function RoomCategoryNew() {
  const hotelId = useHotelSwitch((state) => state.hotelId);
  const { handleOnSubmit, isPending } = useRoomCategoryCreate();

  const onHandleSubmit = useCallback(
    async (data: RoomCategoryFormOutput) => {
      if (!hotelId) {
        throw new Error('hotelId must be provided');
      }
      const dto: RoomCategoryDto = {
        ...data,
        hotelId,
      };

      await handleOnSubmit(dto);
    },
    [handleOnSubmit, hotelId],
  );

  return (
    <Page>
      <WrapperForm<RoomCategoryFormOutput, RoomCategoryFormInput>
        onSubmit={onHandleSubmit}
        options={{
          mode: 'onChange',
          resolver: zodResolver(RoomCategorySchema),
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
    </Page>
  );
}