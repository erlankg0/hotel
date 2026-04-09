'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';

import styles from '@/app/(auth)/layout.module.scss';
import {
  Category,
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

    handleOnSubmit(dto);
  }

  return (
    <Page>
      <WrapperForm<RoomCreateFormInput, RoomCreateFormValues>
        onSubmit={onSubmit}
        className={styles.form}
        options={{
          mode: 'onChange',
          resolver: zodResolver(RoomCreateFormSchema),
          defaultValues: {
            title: '',
            description: '',
            subDescription: '',
            category: Category.ROOM,
            capacity: 2,
            bedRoomCount: 1,
            bathRoomCount: 1,
            uai: false,
            amenityIds: [],
            requestsIds: [],
            files: [],
            videoId: '',
            galleryId: '',
          },
        }}
      >
        <CreateForm />
        <Button
          disabled={isPending || uploadFile.isPending}
          type={'submit'}
          className={styles.button}
        >
          {isPending || uploadFile.isPending ? (
            <span className={styles.loader}><Loader size={14} />Сохранение...</span>
          ) : (
            'Сохранить'
          )}
        </Button>
      </WrapperForm>
    </Page>
  );
}
