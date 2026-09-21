import Link from 'next/link';
import { Controller, useFormContext } from 'react-hook-form';

import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import {
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldSet,
} from '@/shared/ui/field';
import { MultiSelect } from '@/shared/ui/multi-select';

import type { Props } from '@/shared/types/types';
import type { ContractAddRoomFormInput } from '../../model/types';

export function AddForm({
    search,
    setSearch,
    data,
    isLoading,
    page,
    setPage,
    total,
}: Props) {
    const { control } = useFormContext<ContractAddRoomFormInput>();

    return (
        <FieldSet className="mx-auto w-full">
            <div className="mb-6 space-y-1">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Добавление категорий номеров
                </h1>

                <p className="text-sm text-muted-foreground">
                    Выберите категории номеров, которые будут доступны в
                    рамках этого контракта.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="text-base">
                        Категории номеров
                    </CardTitle>

                    <p className="text-sm text-muted-foreground">
                        Вы можете выбрать одну или несколько категорий.
                    </p>
                </CardHeader>

                <CardContent>
                    <Controller
                        control={control}
                        name="roomCategoryIds"
                        render={({ field, fieldState }) => (
                            <FieldGroup>
                                <FieldLabel>
                                    Категории номеров
                                    <span className="ml-1 text-destructive">
                                        *
                                    </span>
                                </FieldLabel>

                                <MultiSelect
                                    options={data}
                                    value={field.value ?? []}
                                    onChange={field.onChange}
                                    page={page}
                                    total={total ?? data.length}
                                    search={search}
                                    isLoading={isLoading}
                                    invalid={Boolean(fieldState.error)}
                                    onChangePage={setPage}
                                    onSearchChange={setSearch}
                                    empty={
                                        <div className="flex flex-col items-center gap-1 py-4 text-center">
                                            <span className="text-sm text-muted-foreground">
                                                Категории номеров не найдены
                                            </span>

                                            <Link
                                                href="/room-categories/create"
                                                target="_blank"
                                                className="text-sm font-medium underline underline-offset-4"
                                            >
                                                Добавить категорию номера
                                            </Link>
                                        </div>
                                    }
                                />

                                {fieldState.error ? (
                                    <FieldError
                                        errors={[fieldState.error]}
                                    />
                                ) : (
                                    <FieldDescription>
                                        Выберите все категории номеров,
                                        которые относятся к данному
                                        контракту.
                                    </FieldDescription>
                                )}
                            </FieldGroup>
                        )}
                    />
                </CardContent>
            </Card>
        </FieldSet>
    );
}