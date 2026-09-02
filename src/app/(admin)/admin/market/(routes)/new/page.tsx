'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {  Loader2 } from 'lucide-react';

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
            <span>{isPending ? 'Сохранение...' : 'Сохранить'}</span>
          </p>
        </Button>
      </WrapperForm>
    </Page>
  );
}