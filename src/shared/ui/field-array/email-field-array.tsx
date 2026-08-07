import { Trash2, User } from 'lucide-react';
import { useCallback, useEffect } from 'react';
import { Controller, useFieldArray, get } from 'react-hook-form';

import { Category, contactCategories } from '@/shared/const/category';
import { Button } from '@/shared/ui/button';
import { FieldDescription, FieldError } from '@/shared/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/shared/ui/input-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';
import { TableCell, TableRow } from '@/shared/ui/table';

import { FieldTable } from './field-table';

import type { Props } from './model/types';
import type { ArrayPath, FieldArray, FieldValues, Path } from 'react-hook-form';

const MIN_PHONES = 2;

function createDefaultPhoneRow<T extends FieldValues>(): FieldArray<T, ArrayPath<T>> {
  return {
    title: '',
    phone: '',
    category: Category.GENERAL,
  } as FieldArray<T, ArrayPath<T>>;
}

export function EmailFieldArray<T extends FieldValues>({
                                                         control,
                                                         register,
                                                         errors,
                                                         path,
                                                       }: Props<T>) {

  const { fields, append, remove } = useFieldArray({
    control,
    name: path,
  });

  useEffect(() => {
    if (fields.length < MIN_PHONES) {
      const toAdd = MIN_PHONES - fields.length;
      for (let i = 0; i < toAdd; i++) {
        append(createDefaultPhoneRow<T>());
      }
    }
  }, [append, fields.length]);

  const canRemove = fields.length > MIN_PHONES;


  const handleRemove = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove],
  );

  const handleAdd = useCallback(() => {
    append(createDefaultPhoneRow<T>());
  }, [append]);

  return (
    <FieldTable handleAdd={handleAdd} valueLabel={'Э почты'}>
      {fields.map((field, index) => {
        const titleError = get(errors, `${path}.${index}.title`);
        const emailError = get(errors, `${path}.${index}.email`);
        const categoryError = get(errors, `${path}.${index}.category`);
        return (
          <TableRow key={field.id}>
            <TableCell>
              № {index + 1}
            </TableCell>

            <TableCell>
              <InputGroup>
                <InputGroupInput  {...register(`${path}.${index}.title` as Path<T>)} />
                <InputGroupAddon>
                  <User />
                </InputGroupAddon>
              </InputGroup>
              {titleError ? (
                <FieldError>{titleError?.message}</FieldError>
              ) : (
                <FieldDescription>Введите Получателя</FieldDescription>
              )}
            </TableCell>

            <TableCell>
              <InputGroup>
                <InputGroupInput type={'tel'} {...register(`${path}.${index}.email` as Path<T>)} />
                <InputGroupAddon>
                  <User />
                </InputGroupAddon>
              </InputGroup>
              {emailError ? (
                <FieldError>{emailError?.message}</FieldError>
              ) : (
                <FieldDescription>Введите э-почту</FieldDescription>
              )}
            </TableCell>

            <TableCell>
              <Controller
                control={control}
                render={({ field: selectField }) => (
                  <Select
                    value={selectField.value}
                    onValueChange={selectField.onChange}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent className={'w-full min-w-1/2'}>
                      {contactCategories.map(cat => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
                name={`${path}.${index}.category` as Path<T>} />
              {categoryError ? (
                <FieldError>{categoryError?.message}</FieldError>
              ) : (
                <FieldDescription>Выберите правильную категорию</FieldDescription>
              )}
            </TableCell>

            <TableCell className="text-end">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className={'hover:bg-red-400 transition'}
                disabled={!canRemove}
                onClick={() => handleRemove(index)}
                title={canRemove ? 'Удалить Э-почту' : `Минимум ${MIN_PHONES} э-почт`}
              >
                <Trash2 size={18} />
              </Button>
            </TableCell>
          </TableRow>
        );
      })}
    </FieldTable>
  );
}