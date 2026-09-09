'use client';
import { useState } from 'react';

import { useCountiesQuery } from '@/entities/country';
import { MultiSelect } from '@/shared/ui/multi-select';

export default function Page() {

  const [search, setSearch] = useState<string>('');
  const { data, isLoading, setPage } = useCountiesQuery({ search: search });
  const [ids, setIds] = useState<string[]>([]);
  const normalize = data.map(country => ({ id: country.id, label: country.title }));
  return (
    <section className={'h-screen flex flex-col items-center justify-center'}>
      <MultiSelect
        options={normalize}
        page={1}
        value={ids}
        onChange={setIds}
        isLoading={isLoading}
        search={search}
        onChangePage={setPage}
        total={data.length}
        onSearchChange={setSearch}
      />
    </section>
  );
}