'use client';

import { useUploadFile } from '@/shared/lib/hooks/useUploadFile';
import { Dropzone } from '@/shared/ui/dropzone';

export default function Page() {
  const { mutate: upload } = useUploadFile();

  const handleUpload = (files: File[]) => {
    files.forEach(file => upload(file));
  };

  return (
    <section className={'h-screen flex flex-col items-center justify-center'}>
      <Dropzone
        placeholder="Загрузите фотографии интерьера"
        options={{
          accept: { 'image/*': [] },
          maxFiles: 10,
        }}
        onFilesSelected={handleUpload}
      />
    </section>
  );
}