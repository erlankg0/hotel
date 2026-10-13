'use client';

import {
    CalendarDays,
    Info,
    Calendar,
    ChevronDown,
    Trash2,
} from 'lucide-react';
import { useState } from 'react';
import { get, type FieldValues, type Path } from 'react-hook-form';
import { useFormContext } from 'react-hook-form';

import { Button } from '@/shared/ui/button';
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

type CreatePeriodProps = {
    name?: string;
    onRemove?: () => void;
};

export function CreatePeriod({ name = '', onRemove }: CreatePeriodProps) {
    const [open, setOpen] = useState(true);

    const {
        register,
        formState: { errors },
        watch,
    } = useFormContext<FieldValues>();

    const fieldName = (field: keyof ContractPeriodFormValues) =>
        `${name ? `${name}.` : ''}${field}` as Path<FieldValues>;
    const fieldError = (field: keyof ContractPeriodFormValues) =>
        get(errors, fieldName(field));

    const title = watch(fieldName('title'));
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
                    {onRemove && (
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            aria-label="Удалить период"
                            onClick={onRemove}
                        >
                            <Trash2 aria-hidden="true" />
                        </Button>
                    )}
                </CardHeader>

                <CollapsibleContent>
                    <CardContent>
                        <FieldSet className="flex flex-col gap-4">
                            <FieldGroup>
                                <Field data-invalid={!!fieldError('title')}>
                                    <FieldLabel htmlFor={`${name}-title`}>
                                        Название периода
                                    </FieldLabel>

                                    <InputGroup>
                                        <InputGroupInput
                                            id={`${name}-title`}
                                            placeholder="Например, Low Season"
                                            aria-invalid={!!fieldError('title')}
                                            {...register(fieldName('title'))}
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

                                    <FieldError errors={[fieldError('title')]} />
                                </Field>
                            </FieldGroup>

                            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                                <FieldGroup>
                                    <Field data-invalid={!!fieldError('startDate')}>
                                        <FieldLabel htmlFor={`${name}-startDate`}>
                                            Дата начала
                                        </FieldLabel>

                                        <InputGroup>
                                            <InputGroupInput
                                                id={`${name}-startDate`}
                                                type="date"
                                                aria-invalid={!!fieldError('startDate')}
                                                {...register(fieldName('startDate'), {
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

                                        <FieldError errors={[fieldError('startDate')]} />
                                    </Field>
                                </FieldGroup>

                                <FieldGroup>
                                    <Field data-invalid={!!fieldError('endDate')}>
                                        <FieldLabel htmlFor={`${name}-endDate`}>
                                            Дата окончания
                                        </FieldLabel>

                                        <InputGroup>
                                            <InputGroupInput
                                                id={`${name}-endDate`}
                                                type="date"
                                                aria-invalid={!!fieldError('endDate')}
                                                {...register(fieldName('endDate'), {
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

                                        <FieldError errors={[fieldError('endDate')]} />
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
