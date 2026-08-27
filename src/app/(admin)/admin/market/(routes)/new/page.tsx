'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';

import { CreateForm, marketSchema, useMarketCreate } from '@/features/market';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type { MarketCreateInput, MarketCreateOutput } from '@/features/market';

export default function MarketNew() {
  const { handleOnSubmit, isPending } = useMarketCreate();

  return (
    <Page>
      <WrapperForm<MarketCreateOutput, MarketCreateInput>
        onSubmit={handleOnSubmit}
        options={{
          mode: 'onChange',
          resolver: zodResolver(marketSchema),
        }}
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