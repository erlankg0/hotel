'use client';

import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useRoomCategoriesQuery } from '@/entities/room-category';
import { MultiSelect } from '@/shared/ui/multi-select';
import { FieldError, FieldDescription } from '@/shared/ui/field';
import { Dialog, DialogContent, DialogOverlay, DialogTrigger, DialogTitle, DialogHeader } from '@/shared/ui/dialog';

import type {
    ContractRoomFromInput,
} from '../model/types';


export function AddContractRoomForm() {
    const [search, setSearch] = useState('');

    const { data, isLoading, page, setPage, total } =
        useRoomCategoriesQuery({ search });

    const { control } = useFormContext<ContractRoomFromInput>();


    return (
        <Dialog>

            <DialogTrigger>
                <button type='button'>Open Dialog</button>
            </DialogTrigger>
        
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Категории номеров</DialogTitle>
                </DialogHeader>
                <Controller
                    control={control}
                    name="roomCategoryIds"
                    render={({ field, fieldState }) => (
                        <>
                            <MultiSelect
                                options={data}
                                page={page}
                                value={field.value ?? []}
                                onChange={field.onChange}
                                isLoading={isLoading}
                                search={search}
                                onChangePage={setPage}
                                total={total}
                                onSearchChange={setSearch}
                                invalid={Boolean(fieldState.error)}
                            />

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
            </DialogContent>
        </Dialog>
    );
}