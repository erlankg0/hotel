import { Luggage, Check } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

import { Card, CardContent } from '@/shared/ui/card'
import {
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldSet,
    FieldTitle,
} from '@/shared/ui/field';
import { InputGroup, InputGroupInput, InputGroupAddon } from '@/shared/ui/input-group';

import type { ContractRoomFromInput } from '../../model/types';

export function CreateForm() {
    const {
        register,
        formState: { errors },
    } = useFormContext<ContractRoomFromInput>();

    return (
        <FieldSet>
            <article>
                <FieldTitle className="text-xl font-bold text-center">
                    Добавить категорию номера в контракт
                </FieldTitle>
            </article>
            <Card>
                <CardContent>
                    <FieldGroup>
                        <FieldLabel htmlFor={'isActive'}>Активна</FieldLabel>
                        <InputGroup>
                            <InputGroupInput {...register('isActive')} id={'title'} />
                            <InputGroupAddon><Check /></InputGroupAddon>
                        </InputGroup>
                        {errors.isActive ? (
                            <FieldError>{errors.isActive.message}</FieldError>
                        ) : (
                            <FieldDescription>
                                Выберите, если категория номера активна в контракте
                            </FieldDescription>
                        )}
                    </FieldGroup>
                </CardContent>
            </Card>
        </FieldSet>
    );
}