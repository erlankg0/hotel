import { BadgeInfo } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

import { Dropzone } from '@/shared/ui/dropzone';
import {
  FieldSet,
  FieldGroup,
  FieldTitle,
  FieldLabel,
  FieldError,
  FieldDescription,
} from '@/shared/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/shared/ui/input-group';

import type { GalleryCreateFormValues } from '../model/dto';

export function CreateForm() {
  const {
    getValues,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<GalleryCreateFormValues>();
  const files = watch('files');

  return (
    <FieldSet className={'flex flex-col gap-6'}>
      <article>
        <FieldTitle className={'text-xl font-bold text-center'}>Создание новой галереи</FieldTitle>
      </article>

      <FieldGroup>
        <FieldLabel>Файлы галереи</FieldLabel>
        <Dropzone
          onFilesSelected={(acceptedFiles) => {
            const previousFiles = getValues('files') ?? [];

            setValue('files', [...previousFiles, ...acceptedFiles], {
              shouldDirty: true,
              shouldTouch: true,
              shouldValidate: true,
            });
          }}
          options={{
            accept: {
              'image/*': [],
              'application/pdf': [],
              'application/msword': [],
              'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [],
            },
            maxFiles: 10,
          }}
          placeholder={'Перетащите фото и файлы сюда или нажмите для загрузки'}
        />
        {errors.files && (
          <FieldError>{errors.files.message}</FieldError>
        )}
        <FieldDescription>
          Можно выбрать до 10 файлов. Подойдут изображения и документы.
        </FieldDescription>
        {files?.length ? (
          <FieldDescription>
            Выбрано файлов: {files.length}
          </FieldDescription>
        ) : null}
      </FieldGroup>

      <FieldGroup>
        <FieldLabel htmlFor={'title'}>Названия</FieldLabel>
        <InputGroup>
          <InputGroupInput {...register('title')} placeholder={'Фотографии интерьера'} />
          <InputGroupAddon>
            <BadgeInfo size={12} />
          </InputGroupAddon>
        </InputGroup>
        {errors.title && (
          <FieldError>{errors.title.message}</FieldError>
        )}
      </FieldGroup>

      <FieldDescription>
        Укажите понятное название для новой галереи
      </FieldDescription>
    </FieldSet>
  );
}
