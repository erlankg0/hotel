'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { BedDouble, Check, Loader2 } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useState } from 'react';

import { useContractRoomsQuery, columns } from '@/entities/contract-room';
import type { ContractRoomType } from '@/entities/contract-room';

import { AddContractRoomForm, addContractRoomsSchema, useContractRoomAdd, useContractRoomSwitch } from '@/features/contract-room';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { DataTable } from '@/shared/ui/data-table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog';
import { Page } from '@/widget/page';
import { PageHeader } from '@/widget/page-header';

import type { ContractRoomFromInput, ContractRoomFromOutput } from '@/features/contract-room';


export default function RoomPage() {
  const { contractId } = useParams<{ contractId: string }>();
  const [search, setSearch] = useState<string>('');
  const { data } = useContractRoomsQuery({ id: contractId })
  const { create, isPending } = useContractRoomAdd();
  const { handleOnSubmit: handleOnSubmitSwitch } = useContractRoomSwitch();

  async function handleOnSubmit(dto: ContractRoomFromInput) {
    await create({
      contractId: contractId,
      roomCategoryIds: dto.roomCategoryIds.map((room) => (room.id)),
    });
  }

  async function onToggleActive(id: string) {
    handleOnSubmitSwitch({ dto: { id: id }, id })
  }

  return (
    <Page
      headerSlog={
        <PageHeader
          title={'Категории номеров'}
          searchValue={search}
          onSearchOnChange={setSearch}
          slot={
            <Dialog>
              <DialogTrigger asChild>
                <Button type="button" variant="outline">
                  <BedDouble className="size-4" />
                  Добавить категории
                </Button>
              </DialogTrigger>
              <DialogContent>
                <WrapperForm<ContractRoomFromInput, ContractRoomFromOutput>
                  className={'flex flex-row items-center gap-2'}
                  onSubmit={handleOnSubmit}
                  options={{
                    resolver: zodResolver(addContractRoomsSchema),
                  }}
                >
                  <DialogHeader>
                    <DialogTitle>Добавить категории номеров</DialogTitle>

                    <DialogDescription>
                      Выберите категории номеров, доступные в рамках этого
                      контракта.
                    </DialogDescription>
                  </DialogHeader>

                  <AddContractRoomForm />
                  <DialogFooter>
                    <Button type="submit" disabled={isPending} className={'items-end'}>
                      {isPending ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          Добавление...
                        </>
                      ) : (
                        <>
                          <Check className="size-4" />
                          Добавить
                        </>
                      )}
                    </Button>
                  </DialogFooter>
                </WrapperForm>
              </DialogContent>
            </Dialog>
          }
        />}
    >
      <DataTable<ContractRoomType> columns={columns({ onToggleActive })} data={data} />
    </Page>
  );
}