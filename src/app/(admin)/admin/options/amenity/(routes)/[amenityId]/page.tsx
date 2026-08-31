'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useCallback } from 'react';

import { useAmenityQuery } from '@/entities/amenity';
import { useUpdateAmenity, AmenitySchema, UpdateForm, FormSkeleton } from '@/features/amenity';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { AmenityDto } from '@/features/amenity';


export default function UpdatePage() {
  const { isPending, handleOnSubmit } = useUpdateAmenity();
  const { amenityId } = useParams<{ amenityId: string }>();
  const { data, isLoading } = useAmenityQuery(amenityId);

  const onHandleOnSubmit = useCallback(async (dto: AmenityDto) => {
    await handleOnSubmit({
      id: amenityId, dto: {
        ...dto,
        id: amenityId,
      },
    });

  }, [amenityId, handleOnSubmit]);

  return (
    <Page>
      {isLoading ?
        (<FormSkeleton />)
        : (
          <WrapperForm<AmenityDto>
            onSubmit={onHandleOnSubmit}
            options={{
              mode: 'onChange',
              resolver: zodResolver(AmenitySchema),
              defaultValues: {
                name: data?.name,
                icon: data?.icon,
              },
            }}

          >
            <UpdateForm />
            <Button
              disabled={isPending}
              type={'submit'}
              className={'loader'}
            >
              {isPending ? (<span><Loader size={14} />Сохранение...</span>) : ('Сохранить')}
            </Button>

          </WrapperForm>
        )}
    </Page>
  );
}