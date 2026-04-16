'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useParams } from 'next/navigation';

import styles from '@/app/(auth)/layout.module.scss';
import { useGalleryCreate, GalleryCreateFormSchema, CreateForm } from '@/features/gallery';
import { useUploadFile } from '@/shared/lib/hooks/useUploadFile';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { GalleryCreateFormValues } from '@/features/gallery';


export default function NewPage() {
  const { id } = useParams<{ id: string }>();
  const { isPending, handleOnSubmit } = useGalleryCreate(id);
  const uploadFile = useUploadFile();

  async function onSubmit(data: GalleryCreateFormValues) {
    const { files, title } = data;
    const uploadedFiles = await Promise.all(
      files.map(file => uploadFile.mutateAsync(file)),
    );

    const dto = {
      title,
      fileIds: uploadedFiles.map(file => file.id),
    };

    handleOnSubmit(dto);
  }


  return (
    <Page>
      <WrapperForm<GalleryCreateFormValues>
        onSubmit={onSubmit}
        options={{
          mode: 'onChange',
          resolver: zodResolver(GalleryCreateFormSchema),
          defaultValues: {
            files: [],
          },
        }}

      >
        <CreateForm />
        <Button
          disabled={isPending}
          type={'submit'}
          className={styles.button}
        >
          {isPending ? (
            <span className={styles.loader}>
            <Loader className={'animate-spin'} size={14} />
              Сохранение...
            </span>) : ('Сохранить')}
        </Button>

      </WrapperForm>
    </Page>
  );
}