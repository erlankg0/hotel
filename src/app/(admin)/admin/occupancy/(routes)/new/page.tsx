'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';

import { CreateForm, useOccupancyCreate, occupancySchema } from '@/features/occupancy';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { OccupancyUpdateFromOutput, OccupancyCreateFromInput } from '@/features/occupancy';

export default function CreatePage() {
  const { handleOnSubmit, isPending } = useOccupancyCreate();

  return (
    <Page>
      <WrapperForm<OccupancyCreateFromInput, OccupancyUpdateFromOutput>
        onSubmit={handleOnSubmit}
        options={{
          mode: 'onChange',
          resolver: zodResolver(occupancySchema),
        }}
        className={'flex flex-col gap-6'}
      >
        <CreateForm />
        <Button disabled={isPending}>
          {isPending ? (
            <span className={'loader'}><Loader size={14} />Сохранение...</span>
          ) : (
            'Сохранить'
          )}
        </Button>
      </WrapperForm>
    </Page>
  );
}