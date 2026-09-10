'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { CreateForm, useMarketCreate, MarketCreateFormSchema } from '@/features/market';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';
import { useCountiesQuery } from '@/entities/country'
import type { MarketCreateInput, MarketCreateOutput } from '@/features/market';

export default function MarketNew() {
  const { handleOnSubmit, isPending } = useMarketCreate();
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const { data, isLoading } = useCountiesQuery({ search: search });

  return (
    <Page>
      <WrapperForm<MarketCreateOutput, MarketCreateInput>
        onSubmit={handleOnSubmit}
        options={{
          mode: 'onChange',
          resolver: zodResolver(MarketCreateFormSchema),
        }}
      >
        <CreateForm data={data} isLoading={isLoading}  page={page} setPage={setPage} search={search} setSearch={setSearch}/>
        <Button
          disabled={isPending}
          type="submit"
          className="relative w-full"
        >
          <p
            className={`flex items-center justify-center gap-2 transition-all duration-200 ${isPending ? 'opacity-100' : 'opacity-100'
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