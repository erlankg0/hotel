'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {  Loader2 } from 'lucide-react';

import styles from '@/app/(auth)/layout.module.scss';
import {
  CreateForm,
  RoomCreateFormSchema,
  useRoomCreate,
} from '@/features/room';
import { useUploadFile } from '@/shared/lib/hooks/useUploadFile';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { RoomCreateFormInput, RoomCreateFormValues, RoomDto } from '@/features/room';

export default function New() {
  const { isPending, handleOnSubmit } = useRoomCreate();
  const uploadFile = useUploadFile();

  async function onSubmit(data: RoomCreateFormValues) {
    const { files, ...roomData } = data;
    const uploadedFiles = await Promise.all(
      files.map(file => uploadFile.mutateAsync(file)),
    );

    const dto: RoomDto = {
      ...roomData,
      photosIds: uploadedFiles.map(file => file.id),
    };

    await handleOnSubmit(dto);
  }

  return (
    <Page>
      <WrapperForm<RoomCreateFormInput, RoomCreateFormValues>
        onSubmit={onSubmit}
        className={styles.form}
        options={{
          mode: 'onChange',
          resolver: zodResolver(RoomCreateFormSchema),
        }}
      >
        <CreateForm />
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
            <span>{isPending ? 'Сохранение...' : 'Сохранить'}</span>
          </p>
        </Button>
      </WrapperForm>
    </Page>
  );
}
