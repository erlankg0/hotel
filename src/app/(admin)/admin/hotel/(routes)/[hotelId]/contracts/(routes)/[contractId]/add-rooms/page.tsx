'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useState } from 'react';

import { useRoomCategoriesQuery } from '@/entities/room-category';
import {
    AddForm,
    ContractRoomAddFormSchema,
    useContractRoomAdd,
} from '@/features/contract';
import { WrapperForm } from '@/shared/providers/form';
import { Button } from '@/shared/ui/button';
import { Page } from '@/widget/page';

import type {
    ContractAddRoomFormInput,
    ContractAddRoomFormOutput,
} from '@/features/contract';

export default function ContractNew() {
    const { handleOnSubmit, isPending } = useContractRoomAdd();

    const { contractId, hotelId } = useParams<{ contractId: string, hotelId: string }>();

    const [search, setSearch] = useState('');

    const { data, isLoading, page, setPage, total } = useRoomCategoriesQuery({ search, id: hotelId });

    async function handleOnSubmitForm(dto: ContractAddRoomFormInput) {

        await handleOnSubmit({
            contractId: contractId,
            roomCategoryIds: dto.roomCategoryIds.map(
                ({ id }) => id,
            ),
        });
    }


    return (
        <Page>

            {contractId ? (
                <WrapperForm<ContractAddRoomFormInput, ContractAddRoomFormOutput>
                    onSubmit={handleOnSubmitForm}
                    options={{
                        mode: 'onChange',
                        defaultValues: {
                            roomCategoryIds: []
                        },
                        resolver: zodResolver(ContractRoomAddFormSchema),
                    }}
                >
                    <AddForm
                        search={search}
                        setSearch={setSearch}
                        page={page}
                        setPage={setPage}
                        isLoading={isLoading}
                        data={data}
                        total={total}
                    />

                    <Button
                        disabled={isPending}
                        type="submit"
                        className="relative w-full"
                    >
                        <p className="flex items-center justify-center gap-2">
                            {isPending && (
                                <Loader2 className="size-4 animate-spin" />
                            )}

                            <span>
                                {isPending ? 'Добавления...' : 'Добавить'}
                            </span>
                        </p>
                    </Button>
                </WrapperForm>
            ) : (
                <section className="flex flex-col items-center justify-center gap-3 py-20">
                    <h2 className="text-xl font-semibold">
                        контракт не выбрано
                    </h2>

                </section>
            )}


        </Page>
    );
}