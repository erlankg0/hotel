import { Luggage, Camera, Plus, Trash2, User, Mails, Phone } from 'lucide-react';
import { useFormContext, useFieldArray } from 'react-hook-form';

import { Button } from '@/shared/ui/button';
import {
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from '@/shared/ui/field';
import { InputGroup, InputGroupInput, InputGroupAddon } from '@/shared/ui/input-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';

import { categoryOptions, contactCategories } from '../../model/const';

import type { AgencyCreateForm } from '../../model/dto';
import type { CategoryAgency } from '../../model/enum';


export function CreateForm() {
  const { register, formState: { errors }, watch, setValue } = useFormContext<AgencyCreateForm>();
  const { fields: emailFields, append: emailAppend, remove: emailRemove } = useFieldArray({ name: 'emails' });
  const { fields: phoneFields, append: phoneAppend, remove: phoneRemove } = useFieldArray({ name: 'phones' });
  const selectedCategory = watch('category');

  return (
    <FieldSet>
      <article>
        <FieldTitle className={'text-xl font-bold text-center'}>Создание Оператора</FieldTitle>
      </article>
      <FieldGroup>
        <FieldLabel htmlFor={'title'}>Названия</FieldLabel>
        <InputGroup>
          <InputGroupInput {...register('title')} placeholder={'Anex Tour'} id={'title'} />
          <InputGroupAddon><Luggage /></InputGroupAddon>
        </InputGroup>
        {errors ?
          (<FieldError>{errors.title?.message}</FieldError>) :
          (<FieldDescription>Введите уникальное названия</FieldDescription>)
        }
      </FieldGroup>
      <FieldGroup>
        <FieldLabel htmlFor={'short'}>Тег</FieldLabel>
        <InputGroup>
          <InputGroupInput {...register('short')} placeholder={'ANEX'} id={'short'} />
        </InputGroup>
        {errors ?
          (<FieldError>{errors.short?.message}</FieldError>) :
          (<FieldDescription>Введите уникальное тег</FieldDescription>)
        }
      </FieldGroup>
      <FieldGroup>
        <FieldLabel>Категория</FieldLabel>
        <Select
          value={selectedCategory}
          onValueChange={(value) => setValue('category', value as CategoryAgency, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
          })}
        >
          <SelectTrigger className={'w-full'}>
            <SelectValue placeholder={'Выберите категорию'} />
          </SelectTrigger>
          <SelectContent>
            {categoryOptions.map(option => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.category && <FieldError>{errors.category.message}</FieldError>}
      </FieldGroup>
      <FieldGroup>
        <FieldLabel></FieldLabel>
        <InputGroup>
          <InputGroupInput {...register('file')} type={'file'} accept={'image/*'} />
          <InputGroupAddon><Camera /></InputGroupAddon>
        </InputGroup>
      </FieldGroup>

      <FieldGroup>
        <div className="flex justify-between items-center mb-3">
          <FieldLabel>Контактные Email</FieldLabel>
          <Button type="button" variant="outline" size="sm"
                  onClick={() => emailAppend({ title: '', email: '', category: 'GENERAL' })}>
            <Plus size={18} className="mr-1" />
            Добавить
          </Button>
        </div>

        <div className="space-y-4">
          {emailFields.map((field, index) => (
            <FieldGroup key={field.id} className="p-4 border rounded-xl">
              <div className="flex justify-between mb-3">
                <FieldLabel className="font-medium">Email {index + 1}</FieldLabel>
                {emailFields.length > 1 && (
                  <Button type="button" variant="ghost" size="sm" onClick={() => emailRemove(index)}>
                    <Trash2 size={20} className="text-red-500" />
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <FieldLabel>Название контакта</FieldLabel>
                  <InputGroup>
                    <InputGroupInput {...register(`emails.${index}.title`)} placeholder="Имя получателя" />
                    <InputGroupAddon><User /></InputGroupAddon>
                  </InputGroup>
                </div>
                <div>
                  <FieldLabel>Email</FieldLabel>
                  <InputGroup>
                    <InputGroupInput {...register(`emails.${index}.email`)} placeholder="info@agency.com.tr" />
                    <InputGroupAddon><Mails /></InputGroupAddon>
                  </InputGroup>
                </div>
                <div className="md:col-span-2">
                  <FieldLabel>Категория</FieldLabel>
                  <Select {...register(`emails.${index}.category`)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      {contactCategories.map(cat => (
                        <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </FieldGroup>
          ))}
        </div>

        {errors.emails && <FieldError>{errors.emails.message}</FieldError>}
      </FieldGroup>

      <FieldGroup>
        <div className="flex justify-between items-center mb-3">
          <FieldLabel>Контактные телефон</FieldLabel>
          <Button type="button" variant="outline" size="sm"
                  onClick={() => phoneAppend({ title: '', email: '', category: 'GENERAL' })}>
            <Plus size={18} className="mr-1" />
            Добавить
          </Button>
        </div>

        <div className="space-y-4">
          {phoneFields.map((field, index) => (
            <FieldGroup key={field.id} className="p-4 border rounded-xl">
              <div className="flex justify-between mb-3">
                <FieldLabel className="font-medium">Телефон {index + 1}</FieldLabel>
                {phoneFields.length > 1 && (
                  <Button type="button" variant="ghost" size="sm" onClick={() => phoneRemove(index)}>
                    <Trash2 size={20} className="text-red-500" />
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <FieldLabel>Получатель</FieldLabel>
                  <InputGroup>
                    <InputGroupInput {...register(`phones.${index}.title`)} placeholder="Имя получателя" />
                    <InputGroupAddon><User /></InputGroupAddon>
                  </InputGroup>
                </div>
                <div>
                  <FieldLabel>Телефон</FieldLabel>
                  <InputGroup>
                    <InputGroupInput {...register(`phones.${index}.phone`)} placeholder="+90 242 26 22 22" />
                    <InputGroupAddon><Phone /></InputGroupAddon>
                  </InputGroup>
                </div>
                <div className="md:col-span-2">
                  <FieldLabel>Категория</FieldLabel>
                  <Select {...register(`phones.${index}.category`)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      {contactCategories.map(cat => (
                        <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </FieldGroup>
          ))}
        </div>

        {errors.emails && <FieldError>{errors.emails.message}</FieldError>}
      </FieldGroup>
    </FieldSet>
  );
}