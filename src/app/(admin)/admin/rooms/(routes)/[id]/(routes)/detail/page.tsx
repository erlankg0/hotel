'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Image, Info, Loader, Pencil, Plus, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCallback } from 'react';

import { useRoomQuery } from '@/entities/room';
import { Category } from '@/entities/room/model/type';
import {
  RoomUpdateFormSchema,
  UpdateForm,
  UpdateSkeleton,
  useRoomUpdate,
} from '@/features/room';
import { useUploadFile } from '@/shared/lib/hooks/useUploadFile';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Text } from '@/shared/ui/text';
import { Page } from '@/widget/page';

import styles from './page.module.scss';

import type { RoomDto, RoomUpdateFormInput, RoomUpdateFormValues } from '@/features/room';


const navLinks = [
  {
    icon: Info,
    text: 'Основная информация',
  },
  {
    icon: Pencil,
    text: 'Описания',
  },
  {
    icon: Sparkles,
    text: 'Удобства',
  },
  {
    icon: Image,
    text: 'Фотографии',
  },
  {
    icon: Plus,
    text: 'Дополнительно',
  },
];

export default function RoomDetail() {
  const { id } = useParams<{ id: string }>();
  const { handleOnSubmit, isPending } = useRoomUpdate();
  const { data, isLoading } = useRoomQuery(id);
  const uploadFile = useUploadFile();

  const defaultValues: RoomUpdateFormInput = {
    title: data?.title || '',
    category: data?.category || Category.ROOM,
    description: data?.description || '',
    subDescription: data?.subDescription || '',
    capacity: data?.capacity || 1,
    bedRoomCount: data?.bedRoomCount || 1,
    bathRoomCount: data?.bathRoomCount || 1,
    amenityIds: data?.amenity.map((amenity) => amenity.id) || [],
    requestsIds: data?.requests?.map((request) => request.id) || [],
    photosIds: data?.photos?.map((photo) => photo.id) || [],
    files: [],
    videoId: '',
  };

  const onSubmit = useCallback(async (formData: RoomUpdateFormValues) => {
    const { files, photosIds, ...roomData } = formData;

    const uploadedFiles = files.length
      ? await Promise.all(files.map(file => uploadFile.mutateAsync(file)))
      : [];

    const dto: Partial<RoomDto> = {
      ...roomData,
      photosIds: [...photosIds, ...uploadedFiles.map(file => file.id)],
    };

    handleOnSubmit({ id, dto });
  }, [handleOnSubmit, id, uploadFile]);

  return (
    <Page>
      <section>
        <div className={styles.header}>
          <div className={styles.header__text}>
            <Text size={'title'} tag={'h3'} className={styles.header__title}>Редактирования номера</Text>
            <Text tag={'p'} size={'kicker'}>Обновите информацию о номере и его удобствах</Text>
          </div>
          <div>
            <Button type={'button'}>
              Сохранить изменения
            </Button>
          </div>
        </div>
      </section>
      <section className={styles.content}>
        <nav aria-label={'navigation by section'} className={styles.nav}>
          {navLinks.map((link, index) => {
            const Icon = link.icon;
            return (<Link href="#" className={styles.link} key={index}>
              <Icon />
              <p>{link.text}</p>
            </Link>);
          })}

        </nav>
        {isLoading ? (<UpdateSkeleton />) : (
          <WrapperForm<RoomUpdateFormInput, RoomUpdateFormValues>
            options={{
              defaultValues,
              mode: 'onChange',
              resolver: zodResolver(RoomUpdateFormSchema),
            }}
            onSubmit={onSubmit}
          >
            <UpdateForm existingPhotos={data?.photos ?? []} />
            <Button type={'submit'} disabled={isPending || uploadFile.isPending}>
              {isPending || uploadFile.isPending ?
                <p><Loader className="animate-spin" size={16} /></p> : 'Сохранить'}
            </Button>
          </WrapperForm>
        )}

        <section>
          <div className={styles.nav}>
            <Text tag={'h4'} tone={'default'} size={'subtitle'}>Статус номера</Text>
            <Text tag={'p'} size={'kicker'} tone={'success'}>Опубликовано</Text>
            <Text tag={'p'} tone={'info'} size={'kicker'}>Скрыть номер</Text>
          </div>
          <div className={styles.nav}>
            <Link href="#" target={'_blank'}>Посмотреть на сайте</Link>
            <Text tag={'p'} tone={'danger'} size={'subtitle'}>Удалить</Text>
          </div>
        </section>
      </section>
    </Page>
  );
}