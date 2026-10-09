'use client';

import { CalendarDays, Info } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

import type { ContractPeriodFormValues } from '../../model/types';
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldSet,
} from '@/shared/ui/field';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from '@/shared/ui/input-group';

export function CreatePeriod() {
    const {
        register,
        formState: { errors },
    } = useFormContext<ContractPeriodFormValues>();

    return (
        <FieldSet className={'flex flex-col gap-3 items-center'}>
            <FieldGroup>
                <Field data-invalid={!!errors.title}>
                    <FieldLabel htmlFor="title">
                        Название периода
                    </FieldLabel>

                    <InputGroup>
                        <InputGroupInput
                            id="title"
                            placeholder="Например, первая неделя апреля"
                            aria-invalid={!!errors.title}
                            {...register('title')}
                        />

                        <InputGroupAddon>
                            <Info aria-hidden="true" />
                        </InputGroupAddon>
                    </InputGroup>

                    {!errors.title && (
                        <FieldDescription>
                            Укажите название для идентификации периода.
                        </FieldDescription>
                    )}

                    <FieldError errors={[errors.title]} />
                </Field>
            </FieldGroup>
            <div className={'flex flex-row items-center gap-3 w-full'}>
                <FieldGroup>
                    <Field data-invalid={!!errors.startDate}>
                        <FieldLabel htmlFor="startDate">
                            Дата начала
                        </FieldLabel>

                        <InputGroup>
                            <InputGroupInput
                                id="startDate"
                                type="date"
                                aria-invalid={!!errors.startDate}
                                {...register('startDate', {
                                    valueAsDate: true,

                                })}
                            />

                            <InputGroupAddon>
                                <CalendarDays aria-hidden="true" />
                            </InputGroupAddon>
                        </InputGroup>

                        {!errors.startDate && (
                            <FieldDescription>
                                Первый день действия периода.
                            </FieldDescription>
                        )}

                        <FieldError errors={[errors.startDate]} />
                    </Field>
                </FieldGroup>

                <FieldGroup>
                    <Field data-invalid={!!errors.endDate}>
                        <FieldLabel htmlFor="endDate">
                            Дата окончания
                        </FieldLabel>

                        <InputGroup>
                            <InputGroupInput
                                id="endDate"
                                type="date"
                                aria-invalid={!!errors.endDate}
                                min={
                                    undefined
                                }
                                {...register('endDate', {
                                    valueAsDate: true,
                                })}
                            />

                            <InputGroupAddon>
                                <CalendarDays aria-hidden="true" />
                            </InputGroupAddon>
                        </InputGroup>

                        {!errors.endDate && (
                            <FieldDescription>
                                Последний день действия периода.
                            </FieldDescription>
                        )}

                        <FieldError errors={[errors.endDate]} />
                    </Field>
                </FieldGroup>
            </div>
        </FieldSet>
    );
}