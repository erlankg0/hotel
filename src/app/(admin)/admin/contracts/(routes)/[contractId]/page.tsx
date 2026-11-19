'use client';


import { Boxes, BedDouble, Calendar, Table2, HandCoins } from 'lucide-react';
import { useParams } from 'next/navigation';
import { ContractHeader, ContractTabs } from '@/widget/contract';
import { Page } from '@/widget/page';
import { useContractQuery } from '@/entities/contract';
import { formatDate} from '@/shared/lib/utils'
const tabs = (id: string) => {
  return (
    [
      { icon: Table2, title: 'Обзор', href: 'id' },
      { icon: BedDouble, title: 'Комнаты', href: id + '/add_rooms' },
      { icon: Boxes, title: 'Пакеты', href: 'id' },
      { icon: Calendar, title: 'Периоды', href: `${id}/periods` },
      { icon: HandCoins, title: 'Тарифы и цены', href: `${id}/prices` },
    ]
  );
};

export default function ContractDetailPage() {
  const { contractId } = useParams<{ contractId: string }>();
  const { data, isLoading } = useContractQuery({ id: contractId });


  const contract = data?.data;

  if (isLoading) {
    return (
      <Page>
        <div className="animate-pulse h-32 rounded-xl bg-muted" />
      </Page>
    );
  }

  if (!contract) {
    return (
      <Page>
        <p>Контракт не найден</p>
      </Page>
    );
  }


  return (
    <Page>
      <section className="flex flex-col gap-6">
        <ContractHeader contract={{
          currency: contract.currency,
          hotelTitle: 'Utopia World',
          id: contractId,
          operatorTitle: 'Odeon',
          season: formatDate(contract.salesStart),
          status: contract.status,
          title: data?.data.title || '',
        }} />
        <ContractTabs options={tabs(contractId)} />
      </section>
    </Page>
  );
}
