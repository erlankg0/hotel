import { CalendarDays, Luggage } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

import {
    BoardType,
    ContractStatus,
    Currency,
} from '@/shared/const/enums';
import { Card, CardContent } from '@/shared/ui/card';
import {
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldSet,
    FieldTitle,
} from '@/shared/ui/field';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from '@/shared/ui/input-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';

import type { ContractFormInput } from '../../model/types';

export function CreateForm() {
    const {
        register,
        formState: { errors },
        setValue,
        watch,
    } = useFormContext<ContractFormInput>();
    const selectedStatus = watch('status');
    const selectedCurrency = watch('currency');
    const selectBoardType = watch('boardType');

    return (
        <FieldSet>
            <article>
                <FieldTitle className="text-center text-xl font-bold">
                    Создание контракта
                </FieldTitle>
            </article>

            <Card>
                <CardContent>
                    <FieldGroup>
                        <FieldGroup>
                            <FieldLabel htmlFor="title">
                                Название
                            </FieldLabel>

                            <InputGroup>
                                <InputGroupInput
                                    id="title"
                                    {...register('title')}
                                    placeholder="Например: Summer 2026"
                                />

                                <InputGroupAddon>
                                    <Luggage />
                                </InputGroupAddon>
                            </InputGroup>

                            {errors.title ? (
                                <FieldError>
                                    {errors.title.message}
                                </FieldError>
                            ) : (
                                <FieldDescription>
                                    Введите название контракта
                                </FieldDescription>
                            )}
                        </FieldGroup>

                        <FieldGroup>
                            <FieldLabel htmlFor="status">
                                Статус
                            </FieldLabel>

                            <Select
                                value={selectedStatus}
                                defaultValue={ContractStatus.DRAFT}
                                onValueChange={(value) => setValue('status', value as ContractStatus, {
                                    shouldDirty: true,
                                    shouldTouch: true,
                                    shouldValidate: true,
                                })}
                            >
                                <SelectTrigger className={'w-full'}>
                                    <SelectValue>Черновик</SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={ContractStatus.DRAFT}>Черновик</SelectItem>
                                    <SelectItem value={ContractStatus.ACTIVE}>Активный</SelectItem>
                                    <SelectItem value={ContractStatus.EXRIRED}>Истёкший</SelectItem>
                                    <SelectItem value={ContractStatus.SUSTENDED}>Приостановлен</SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.status && (
                                <FieldError>
                                    {errors.status.message}
                                </FieldError>
                            )}
                        </FieldGroup>

                        <FieldGroup>
                            <FieldLabel htmlFor="currency">
                                Валюта
                            </FieldLabel>

                            <Select
                                value={selectedCurrency}
                                defaultValue={Currency.EUR}
                                onValueChange={(value) => setValue('currency', value as Currency, {
                                    shouldDirty: true,
                                    shouldTouch: true,
                                    shouldValidate: true,
                                })}
                            >
                                <SelectTrigger className={'w-full'}>
                                    <SelectValue>EUR</SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={Currency.EUR}>EUR</SelectItem>
                                    <SelectItem value={Currency.USD}>USD</SelectItem>
                                    <SelectItem value={Currency.TRY}>TRY</SelectItem>
                                    <SelectItem value={Currency.RUB}>RUB</SelectItem>
                                    <SelectItem value={Currency.KGZ}>KGZ</SelectItem>
                                    <SelectItem value={Currency.KZ}>KZ</SelectItem>

                                </SelectContent>
                            </Select>


                            {errors.currency && (
                                <FieldError>
                                    {errors.currency.message}
                                </FieldError>
                            )}
                        </FieldGroup>

                        <FieldGroup>
                            <FieldLabel htmlFor="boardType">
                                Тип питания
                            </FieldLabel>

                            <Select
                                value={selectBoardType}
                                defaultValue={BoardType.UAI}
                                onValueChange={(value) => setValue('boardType', value as BoardType, {
                                    shouldDirty: true,
                                    shouldTouch: true,
                                    shouldValidate: true,
                                })}
                            >
                                <SelectTrigger className={'w-full'}>
                                    <SelectValue>Тип питания</SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={BoardType.RO}>RO</SelectItem>
                                    <SelectItem value={BoardType.BB}>BB</SelectItem>
                                    <SelectItem value={BoardType.HB}>HB</SelectItem>
                                    <SelectItem value={BoardType.FB}>FB</SelectItem>
                                    <SelectItem value={BoardType.AI}>AI</SelectItem>
                                    <SelectItem value={BoardType.UAI}>UAI</SelectItem>

                                </SelectContent>
                            </Select>

                            {errors.boardType && (
                                <FieldError>
                                    {errors.boardType.message}
                                </FieldError>
                            )}
                        </FieldGroup>

                        <FieldGroup>
                            <FieldLabel htmlFor="startDate">
                                Дата начала
                            </FieldLabel>

                            <InputGroup>
                                <InputGroupInput
                                    id="startDate"
                                    type="date"
                                    {...register('startDate', {
                                        valueAsDate: true,
                                    })}
                                />

                                <InputGroupAddon>
                                    <CalendarDays />
                                </InputGroupAddon>
                            </InputGroup>

                            {errors.startDate && (
                                <FieldError>
                                    {errors.startDate.message}
                                </FieldError>
                            )}
                        </FieldGroup>

                        <FieldGroup>
                            <FieldLabel htmlFor="endDate">
                                Дата окончания
                            </FieldLabel>

                            <InputGroup>
                                <InputGroupInput
                                    id="endDate"
                                    type="date"
                                    {...register('endDate', {
                                        valueAsDate: true,
                                    })}
                                />

                                <InputGroupAddon>
                                    <CalendarDays />
                                </InputGroupAddon>
                            </InputGroup>

                            {errors.endDate && (
                                <FieldError>
                                    {errors.endDate.message}
                                </FieldError>
                            )}
                        </FieldGroup>
                    </FieldGroup>
                </CardContent>
            </Card>
        </FieldSet>
    );
}