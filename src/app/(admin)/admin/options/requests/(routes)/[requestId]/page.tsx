'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useCallback } from 'react';

import { useRequestQuery } from '@/entities/requests';
import { useUpdateRequest, requestSchema, UpdateForm, FormSkeleton } from '@/features/requests';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { RequestDto, RequestFormInput, RequestFormOutput } from '@/features/requests';


export default function UpdatePage() {
  const { isPending, handleOnSubmit } = useUpdateRequest();
  const { requestId } = useParams<{ requestId: string }>();
  const { data, isLoading } = useRequestQuery(requestId);

  const onHandleOnSubmit = useCallback(async (dto: RequestDto) => {
    await handleOnSubmit({
      id: requestId, dto: {
        ...dto,
        id: requestId,
      },
    });

  }, [requestId, handleOnSubmit]);

  return (
    <Page>
      {isLoading ?
        (<FormSkeleton />)
        : (
          <WrapperForm<RequestFormInput, RequestFormOutput>
            onSubmit={onHandleOnSubmit}
            options={{
              mode: 'onChange',
              resolver: zodResolver(requestSchema),
              defaultValues: {
                name: data?.name,
                icon: data?.icon,
              },
            }}

          >
            <UpdateForm />
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
                <span>{isPending ? 'Обновление...' : 'Обновить'}</span>
              </p>
            </Button>

          </WrapperForm>
        )}
    </Page>
  );
}