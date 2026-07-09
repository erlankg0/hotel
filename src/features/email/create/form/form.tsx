import { Mails } from 'lucide-react';
import { useFormContext } from 'react-hook-form';


import  { contactCategories } from '@/shared/const/category';
import {
  FieldSet,
  FieldLabel,
  FieldGroup,
  FieldLegend,
  FieldError,
  FieldDescription,
  FieldSeparator,
} from '@/shared/ui/field';
import { InputGroup, InputGroupInput, InputGroupAddon } from '@/shared/ui/input-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';

import type { EmailDto } from '../../model/schema';
import type { Category } from '@/shared/const/category';

export function Create() {
  const { register, formState: { errors }, watch, setValue } = useFormContext<EmailDto>();
  const selectedCategory = watch('category');

  return (
    <FieldSet>
      <FieldLegend>Создания э почты</FieldLegend>
      <FieldGroup>
        <FieldLabel htmlFor={'title'}>Получатель</FieldLabel>
        <InputGroup>
          <InputGroupInput {...register('title')} type={'text'} placeholder={'Иван Иванов'} />
          <InputGroupAddon><Mails /></InputGroupAddon>
        </InputGroup>
        {errors.title ?
          (<FieldError>{errors.title.message}</FieldError>) :
          (<FieldDescription>Введите имя получателя</FieldDescription>)
        }
      </FieldGroup>
      <FieldSeparator />
      <FieldGroup>
        <FieldLabel htmlFor={'email'}>Email</FieldLabel>
        <InputGroup>
          <InputGroupInput {...register('email')} placeholder={'company@exapmle.com.tr'} />
          <InputGroupAddon><Mails /></InputGroupAddon>
        </InputGroup>
        {errors.email ?
          (<FieldError>{errors.email.message}</FieldError>) :
          (<FieldDescription>Введите email</FieldDescription>)
        }
      </FieldGroup>
      <FieldSeparator />
      <FieldGroup>
        <FieldLabel>Категория</FieldLabel>
        <Select
          value={selectedCategory}
          onValueChange={(value) => setValue('category', value as Category, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
          })}
        >
          <SelectTrigger className={'w-full'}>
            <SelectValue placeholder={'Выберите категорию'} />
          </SelectTrigger>
          <SelectContent>
            {contactCategories.map(option => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.category && <FieldError>{errors.category.message}</FieldError>}
      </FieldGroup>
    </FieldSet>
  );
}