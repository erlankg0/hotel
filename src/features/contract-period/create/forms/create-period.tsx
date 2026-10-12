'use client';

import { useState } from 'react';
import {
    CalendarDays,
    Info,
    Calendar,
    ChevronDown,
} from 'lucide-react';
import { useFormContext } from 'react-hook-form';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/shared/ui/card';

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/shared/ui/collapsible';

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

import type { ContractPeriodFormValues } from '../../model/types';

export function CreatePeriod() {
    const [open, setOpen] = useState(true);

    const {
        register,
        formState: { errors },
        watch,
    } = useFormContext<ContractPeriodFormValues>();

    const title = watch('title');
    const startDate = watch('startDate');
    const endDate = watch('endDate');
    return (
        <Collapsible open={open} onOpenChange={setOpen}>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between gap-4">
                    <CollapsibleTrigger asChild>
                        <button
                            type="button"
                            className="flex min-w-0 flex-1 items-center gap-3 text-left"
                        >
                            <Calendar className="size-5 shrink-0 text-muted-foreground" />

                            <div className="min-w-0 flex-1 space-y-1">
                                <CardTitle className="truncate text-base">
                                    {title || 'Новый период'}
                                </CardTitle>

                                <CardDescription>
                                    {open
                                        ? 'Заполните данные периода'
                                        : 'Нажмите, чтобы редактировать'}
                                </CardDescription>
                            </div>

                            <ChevronDown
                                className={`size-5 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>
                    </CollapsibleTrigger>
                </CardHeader>

                <CollapsibleContent>
                    <CardContent>
                        <FieldSet className="flex flex-col gap-4">
                            <FieldGroup>
                                <Field data-invalid={!!errors.title}>
                                    <FieldLabel htmlFor="title">
                                        Название периода
                                    </FieldLabel>

                                    <InputGroup>
                                        <InputGroupInput
                                            id="title"
                                            placeholder="Например, Low Season"
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

                            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
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
                    </CardContent>
                </CollapsibleContent>
            </Card>
        </Collapsible>
    );
}
