'use client';

import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useRoomCategoriesQuery } from '@/entities/room-category';
import { MultiSelect } from '@/shared/ui/multi-select';
import { FieldError, FieldDescription } from '@/shared/ui/field';
import { WrapperForm } from '@/shared/providers/form';

import type {
    ContractRoomFromInput,
    ContractRoomFromOutput,
} from '../model/types';

import { useContractRoomAdd } from '../hook/useContractRoomsAdd';

export function AddContractRoomForm() {
    const [search, setSearch] = useState('');

    const { data, isLoading, page, setPage } =
        useRoomCategoriesQuery({ search });

    const { control } = useFormContext<ContractRoomFromInput>();

    const { create, isPending } = useContractRoomAdd();

    function handleOnSubmit(dto: ContractRoomFromInput) {
        create({
            contractId: '',
            roomCategoryIds: dto.roomCategoryIds,
        });
    }

    return (
        <WrapperForm<ContractRoomFromInput, ContractRoomFromOutput>
            onSubmit={handleOnSubmit}
        >
            <Controller
                control={control}
                name="roomCategoryIds"
                render={({ field, fieldState }) => (
                    <>
                       

                        {fieldState.error ? (
                            <FieldError errors={[fieldState.error]} />
                        ) : (
                            <FieldDescription>
                                Выберите категории номеров
                            </FieldDescription>
                        )}
                    </>
                )}
            />
        </WrapperForm>
    );
}