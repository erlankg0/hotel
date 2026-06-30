'use client';

import { X, Hotel, User, Bed, Bath } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { useAmenity } from '@/entities/amenity';
import { useRequest } from '@/entities/requests';
import { Dropzone } from '@/shared/ui/dropzone';
import {
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from '@/shared/ui/field';
import { ImageUI } from '@/shared/ui/image';
import { InputGroup, InputGroupInput, InputGroupAddon } from '@/shared/ui/input-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';
import { Text } from '@/shared/ui/text';
import { Textarea } from '@/shared/ui/textarea';

import { categoryOptions } from '../../model/const';

import styles from './update.module.scss';

import type { Category } from '../../model/const';
import type { RoomUpdateFormInput } from '../../model/dto';
import type { FileType } from '@/shared/types/types';

interface UpdateFormProps {
  existingPhotos?: FileType[];
}

export function UpdateForm({ existingPhotos = [] }: UpdateFormProps) {
  const {
    getValues,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<RoomUpdateFormInput>();
  const { data: amenities, isLoading: isAmenitiesLoading } = useAmenity();
  const { data: requests, isLoading: isRequestsLoading } = useRequest();

  const selectedAmenityIds = watch('amenityIds');
  const selectedRequestsIds = watch('requestsIds');
  const selectedFiles = watch('files');
  const selectedPhotoIds = watch('photosIds');
  const selectedCategory = watch('category');
  const [activePreview, setActivePreview] = useState<{ url: string; alt: string } | null>(null);

  const visibleExistingPhotos = useMemo(() => {
    return existingPhotos.filter(photo => selectedPhotoIds?.includes(photo.id));
  }, [existingPhotos, selectedPhotoIds]);

  const newFilePreviews = useMemo(() => {
    return (selectedFiles ?? []).map(file => ({
      file,
      url: URL.createObjectURL(file),
    }));
  }, [selectedFiles]);

  useEffect(() => {
    return () => {
      newFilePreviews.forEach(preview => URL.revokeObjectURL(preview.url));
    };
  }, [newFilePreviews]);

  useEffect(() => {
    function handleEsc(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActivePreview(null);
      }
    }

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  function openPreview(url: string, alt: string) {
    setActivePreview({ url, alt });
  }

  function toggleArrayValue(field: 'amenityIds' | 'requestsIds', value: string) {
    const previousValues = getValues(field) ?? [];
    const nextValues = previousValues.includes(value)
      ? previousValues.filter(item => item !== value)
      : [...previousValues, value];

    setValue(field, nextValues, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  }

  function removeExistingPhoto(photoId: string) {
    const previousIds = getValues('photosIds') ?? [];

    setValue(
      'photosIds',
      previousIds.filter(id => id !== photoId),
      {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      },
    );
  }

  function removeNewFile(index: number) {
    const previousFiles = getValues('files') ?? [];

    setValue(
      'files',
      previousFiles.filter((_, fileIndex) => fileIndex !== index),
      {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      },
    );
  }

  return (
    <FieldSet className={styles.section}>
      <section className={styles.card} id={'main'}>
        <FieldTitle>
          <Text size={'title'} tag={'p'}>Основная информация</Text>
        </FieldTitle>
        <div className={styles.card__content}>
          <FieldGroup>
            <FieldLabel htmlFor={'title'}>Название номера</FieldLabel>
            <InputGroup>
              <InputGroupInput id={'title'} {...register('title')} placeholder={'Standard room'} />
              <InputGroupAddon>
                <Hotel size={12} />
              </InputGroupAddon>
            </InputGroup>
            {errors.title && <FieldError>{errors.title.message}</FieldError>}
          </FieldGroup>

          <FieldGroup>
            <FieldLabel>Категория</FieldLabel>
            <Select
              value={selectedCategory}
              onValueChange={(value) => setValue('category', value as Category, {
                shouldDirty: true,
                shouldTouch: true,
                shouldValidate: true,
              })}
            >
              <SelectTrigger className={'w-full'}>
                <SelectValue placeholder={'Выберите категорию'} />
              </SelectTrigger>
              <SelectContent>
                {categoryOptions.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.category && <FieldError>{errors.category.message}</FieldError>}
          </FieldGroup>
        </div>
      </section>

      <section id={'description'} className={styles.card}>
        <FieldTitle>
          <Text size={'title'} tag={'p'}>Информация об номере</Text>
        </FieldTitle>
        <FieldGroup>
          <FieldLabel htmlFor={'description'}>Описание</FieldLabel>
          <Textarea
            id={'description'}
            {...register('description')}
            placeholder={'Подробное описание номера'}
          />
          {errors.description && <FieldError>{errors.description.message}</FieldError>}
        </FieldGroup>
        <FieldGroup>
          <FieldLabel htmlFor={'subDescription'}>Короткое описание</FieldLabel>
          <Textarea
            id={'subDescription'}
            {...register('subDescription')}
            placeholder={'Короткий акцент для карточки номера'}
          />
          {errors.subDescription && <FieldError>{errors.subDescription.message}</FieldError>}
        </FieldGroup>
      </section>

      <section id={'info'} className={styles.card}>
        <FieldTitle>
          <Text size={'title'} tag={'p'}>Дополнительная информация об номере</Text>
        </FieldTitle>
        <div className={styles.card__content}>
          <FieldGroup>
            <FieldLabel htmlFor={'capacity'}>Вместимость</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id={'capacity'}
                type={'number'}
                min={1}
                {...register('capacity', { valueAsNumber: true })}
              />
              <InputGroupAddon>
                <User size={10} />
              </InputGroupAddon>
            </InputGroup>
            {errors.capacity && <FieldError>{errors.capacity.message}</FieldError>}
          </FieldGroup>

          <FieldGroup>
            <FieldLabel htmlFor={'bedRoomCount'}>Спален</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id={'bedRoomCount'}
                type={'number'}
                min={1}
                {...register('bedRoomCount', { valueAsNumber: true })}
              />
              <InputGroupAddon>
                <Bed size={10} />
              </InputGroupAddon>
            </InputGroup>

            {errors.bedRoomCount && <FieldError>{errors.bedRoomCount.message}</FieldError>}
          </FieldGroup>

          <FieldGroup>
            <FieldLabel htmlFor={'bathRoomCount'}>Ванных</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id={'bathRoomCount'}
                type={'number'}
                min={1}
                {...register('bathRoomCount', { valueAsNumber: true })}
              />
              <InputGroupAddon>
                <Bath size={10} />
              </InputGroupAddon>
            </InputGroup>

            {errors.bathRoomCount && <FieldError>{errors.bathRoomCount.message}</FieldError>}
          </FieldGroup>
        </div>
      </section>
      <section className={styles.card}>
        <FieldTitle>
          <Text size={'title'} tag={'p'}>Дополнительно</Text>
        </FieldTitle>
        <FieldGroup>
          <FieldLabel>Удобства</FieldLabel>
          <div className={'flex flex-wrap gap-2'}>
            {amenities?.map(item => {
              const isSelected = selectedAmenityIds?.includes(item.id);

              return (
                <button
                  key={item.id}
                  type={'button'}
                  className={`rounded-md border px-3 py-2 text-sm transition-colors ${isSelected ? 'border-primary bg-primary text-primary-foreground' : 'border-input'}`}
                  onClick={() => toggleArrayValue('amenityIds', item.id)}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
          {isAmenitiesLoading && <FieldDescription>Загрузка удобств...</FieldDescription>}
          {!amenities?.length && !isAmenitiesLoading && (
            <FieldDescription>Сначала создайте хотя бы одно удобство.</FieldDescription>
          )}
          {errors.amenityIds && <FieldError>{errors.amenityIds.message}</FieldError>}
        </FieldGroup>
        <FieldGroup>
          <FieldLabel>Запросы</FieldLabel>
          <div className={'flex flex-wrap gap-2'}>
            {requests?.map(item => {
              const isSelected = selectedRequestsIds?.includes(item.id);

              return (
                <button
                  key={item.id}
                  type={'button'}
                  className={`rounded-md border px-3 py-2 text-sm transition-colors ${isSelected ? 'border-primary bg-primary text-primary-foreground' : 'border-input'}`}
                  onClick={() => toggleArrayValue('requestsIds', item.id)}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
          {isRequestsLoading && <FieldDescription>Загрузка запросов...</FieldDescription>}
          {!requests?.length && !isRequestsLoading && (
            <FieldDescription>Сначала создайте хотя бы один запрос.</FieldDescription>
          )}
          {errors.requestsIds && <FieldError>{errors.requestsIds.message}</FieldError>}
        </FieldGroup>
      </section>

      <section className={styles.card} id={'photos'}>
        <FieldGroup>
          <FieldLabel>
            <Text size={'title'} tag={'p'}>Фотографии номера</Text>
          </FieldLabel>

          {visibleExistingPhotos.length > 0 && (
            <>
              <FieldDescription>Загруженные фотографии</FieldDescription>
              <div className={styles.photos}>
                {visibleExistingPhotos.map(photo => (
                  <div className={styles.photo} key={photo.id}>
                    <button
                      type={'button'}
                      className={styles.photo__remove}
                      aria-label={'Удалить фото'}
                      onClick={(event) => {
                        event.stopPropagation();
                        removeExistingPhoto(photo.id);
                      }}
                    >
                      <X size={14} />
                    </button>
                    <button
                      type={'button'}
                      className={styles.photo__previewBtn}
                      aria-label={'Открыть фото'}
                      onClick={() => openPreview(photo.url, photo.format || 'Фото номера')}
                    >
                      <ImageUI
                        src={photo.url}
                        alt={photo.format || 'Фото номера'}
                        aspectRatio={'1 / 1'}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}

          {newFilePreviews.length > 0 && (
            <>
              <FieldDescription>Новые фотографии</FieldDescription>
              <div className={styles.photos}>
                {newFilePreviews.map(({ file, url }, index) => (
                  <div className={styles.photo} key={`${file.name}-${file.lastModified}`}>
                    <button
                      type={'button'}
                      className={styles.photo__remove}
                      aria-label={'Убрать новое фото'}
                      onClick={(event) => {
                        event.stopPropagation();
                        removeNewFile(index);
                      }}
                    >
                      <X size={14} />
                    </button>
                    <button
                      type={'button'}
                      className={styles.photo__previewBtn}
                      aria-label={'Открыть фото'}
                      onClick={() => openPreview(url, file.name)}
                    >
                      <img
                        src={url}
                        alt={file.name}
                        className={styles.photo__preview}
                      />
                      <span className={styles.photo__name}>{file.name}</span>
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}

          <Dropzone
            showPreviewList={false}
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
              },
              maxFiles: 20,
            }}
            placeholder={'Добавьте новые фотографии'}
          />
          {errors.files && <FieldError>{errors.files.message}</FieldError>}
          {!visibleExistingPhotos.length && !newFilePreviews.length && (
            <FieldDescription>Добавьте хотя бы одну фотографию номера.</FieldDescription>
          )}
          {newFilePreviews.length > 0 && (
            <FieldDescription>Новые фото загрузятся после сохранения.</FieldDescription>
          )}
        </FieldGroup>
      </section>


      {activePreview && (
        <div
          className={styles.lightbox}
          role={'dialog'}
          aria-modal={'true'}
          aria-label={'Предпросмотр изображения'}
          onClick={() => setActivePreview(null)}
        >
          <div
            className={styles.lightbox__content}
            onClick={event => event.stopPropagation()}
          >
            <button
              type={'button'}
              className={styles.lightbox__close}
              aria-label={'Закрыть предпросмотр'}
              onClick={() => setActivePreview(null)}
            >
              <X size={18} />
            </button>
            <img
              src={activePreview.url}
              alt={activePreview.alt}
              className={styles.lightbox__image}
            />
          </div>
        </div>
      )}

      <section className={styles.card} id={'video'}>
        <FieldTitle>
          <Text size={'title'} tag={'p'}>Видео</Text>
        </FieldTitle>
        <FieldGroup>
          <InputGroup id={'videoId'}>
            <InputGroupInput type={'file'} {...register('videoId')} />
          </InputGroup>
        </FieldGroup>
      </section>
    </FieldSet>
  );
}
