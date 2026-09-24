'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';

import { useEmailCreate } from '@/features/email';
import { Create, useCreateOperator, operatorCreateSchema } from '@/features/operator';
import { usePhoneCreate } from '@/features/phone';
import { useUploadFile } from '@/shared/lib/hooks/useUploadFile';
import { WrapperForm } from '@/shared/providers/form';
import { useHotelSwitch } from '@/shared/store';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { OperatorFormInput, OperatorFormOutput } from '@/features/operator';

export default function Operator() {
  const hotelId = useHotelSwitch((state) => state.hotelId);
  const uploadFile = useUploadFile();
  const { create: handleOnSubmitEmail, isPending: isPendingEmail } = useEmailCreate();
  const { create: handleOnSubmitPhone, isPending: isPendingPhone } = usePhoneCreate();
  const { create, isPending } = useCreateOperator();

  const isSaving =
    isPending ||
    isPendingPhone ||
    isPendingEmail;

  const handleSubmit = async (dto: OperatorFormOutput) => {
    const { phones, emails, file, ...rest } = dto;

    if (!hotelId) {
      throw new Error('Нету ID');
    }
    const [icon, emaiIds, phoneIds] = await Promise.all([
      uploadFile.mutateAsync(file),
      Promise.all(emails.map(handleOnSubmitEmail)),
      Promise.all(phones.map(handleOnSubmitPhone)),
    ]);


    await create({
      ...rest,
      iconId: icon?.id,
      emailIds: emaiIds.map(i => i.id),
      phoneIds: phoneIds.map(i => i.id),
      hotelId: hotelId,
    });

  };

  return (
    <Page>
      <WrapperForm<OperatorFormInput, OperatorFormOutput>
        onSubmit={handleSubmit}
        options={{
          mode: 'onChange',
          resolver: zodResolver(operatorCreateSchema),
        }}
        className={'flex flex-col gap-6'}
      >
        <Create />
        <Button
          disabled={isPending}
          type="submit"
          className="relative w-full"
        >
          <p
            className={`flex items-center justify-center gap-2 transition-all duration-200 ${
              isSaving ? 'opacity-100' : 'opacity-100'
            }`}
          >
            {isSaving && <Loader2 className="size-4 animate-spin" />}
            <span>{isSaving ? 'Сохранение...' : 'Сохранить'}</span>
          </p>
        </Button>
      </WrapperForm>
    </Page>
  );
}