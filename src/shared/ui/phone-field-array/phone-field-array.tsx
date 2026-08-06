import { Plus, User } from 'lucide-react';
import { Controller, useFieldArray, get } from 'react-hook-form';

import { Category, contactCategories } from '@/shared/const/category';
import { Button } from '@/shared/ui/button';
import { FieldDescription, FieldError } from '@/shared/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/shared/ui/input-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableFooter, TableRow, TableCaption } from '@/shared/ui/table';

import type { Props } from './model/types';
import type { Path, FieldValues } from 'react-hook-form';


export function PhoneFieldArray<T extends FieldValues>({
                                                         control,
                                                         register,
                                                         errors,
                                                         path,
                                                         labels = 'Телефоны',
                                                       }: Props<T>) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: path,
  });

  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead>
            №
          </TableHead>
          <TableHead>
            Получатель
          </TableHead>
          <TableHead>Телефон</TableHead>
          <TableHead>Категория</TableHead>
          <TableHead className="w-0 pr-4 text-end">Удалить</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {fields.map((field, index) => {
          const titleError = get(errors, `${path}.${index}.title`);
          const phoneError = get(errors, `${path}.${index}.phone`);
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
                  <InputGroupInput type={'tel'} {...register(`${path}.${index}.phone` as Path<T>)} />
                  <InputGroupAddon>
                    <User />
                  </InputGroupAddon>
                </InputGroup>
                {phoneError ? (
                  <FieldError>{phoneError?.message}</FieldError>
                ) : (
                  <FieldDescription>Номер телефона</FieldDescription>
                )}
              </TableCell>

              <TableCell>
                <Controller
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
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
                  name={`${field}.${index}.category` as Path<T>} />
                {categoryError ? (
                  <FieldError>{categoryError?.message}</FieldError>
                ) : (
                  <FieldDescription>Выберите правильную категори</FieldDescription>
                )}
              </TableCell>
              <TableCell>
                № {index + 1}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      <TableFooter>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => append({ title: '', email: '', category: Category.GENERAL })}
        >
          <Plus size={18} className="mr-1" />
          Добавить
        </Button>
      </TableFooter>
    </Table>
  );
}