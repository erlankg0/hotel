'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useParams } from 'next/navigation';
import { toast } from 'sonner';

import styles from '@/app/(auth)/layout.module.scss';
import {
  CreateForm,
  GalleryCreateFormSchema,
  useGalleryCreate,
} from '@/features/gallery';
import { useUploadFile } from '@/shared/lib/hooks/useUploadFile';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { GalleryCreateFormValues, GalleryDto } from '@/features/gallery';

export default function NewPage() {
  const params = useParams<{ id: string }>();

  const { isPending, handleOnSubmit } = useGalleryCreate(params.id);
  const uploadFile = useUploadFile();

  async function onSubmit(data: GalleryCreateFormValues) {
    if (!params.id) {
      toast.error('Не найден roomId для сохранения галереи');
      return;
    }

    const uploadedFiles = await Promise.all(
      data.files.map(file => uploadFile.mutateAsync(file)),
    );

    const dto: GalleryDto = {
      title: data.title,
      fields: uploadedFiles.map(file => ({
        id: file.id,
        url: file.url,
      })),
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
            title: '',
            files: [],
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
