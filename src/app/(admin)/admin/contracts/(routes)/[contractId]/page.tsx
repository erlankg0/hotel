'use client';


import { Boxes, BedDouble, Calendar, Table2, HandCoins } from 'lucide-react';
import { useParams } from 'next/navigation';

import { Currency, ContractStatus } from '@/shared/const/enums';
import { ContractHeader, ContractTabs } from '@/widget/contract';


const tabs = (id: string) => {
  return (
    [
      { icon: Table2, title: 'Обзор', href: 'id' },
      { icon: BedDouble, title: 'Комнаты', href: id + '/add_rooms' },
      { icon: Boxes, title: 'Пакеты', href: 'id' },
      { icon: Calendar, title: 'Периоды', href: `${id}/periods` },
      { icon: HandCoins, title: 'Тарифы и цены', href: 'id' },

    ]
  );
};

export default function Page() {
  const { contractId } = useParams<{ contractId: string }>();

  return (
    <section className="flex flex-col gap-6">
      <ContractHeader contract={{
        currency: Currency.EUR,
        hotelTitle: 'Utopia World',
        id: '!',
        operatorTitle: 'Odeon',
        season: '2027',
        status: ContractStatus.DRAFT,
        title: 'Summer 2027',
      }} />
      <ContractTabs options={tabs(contractId)} />
    </section>
  );
}