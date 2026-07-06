import { Luggage, Camera, Plus, Trash2, User, Mails, Phone } from 'lucide-react';
import { useFormContext, useFieldArray, Controller } from 'react-hook-form';

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
import { CategoryContact } from '../../model/enum';

import type { AgencyCreateForm } from '../../model/dto';

export function CreateForm() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<AgencyCreateForm>();

  const { fields: emailFields, append: emailAppend, remove: emailRemove } = useFieldArray({
    control,
    name: 'emails',
  });
  const { fields: phoneFields, append: phoneAppend, remove: phoneRemove } = useFieldArray({
    control,
    name: 'phones',
  });

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
        {errors.title ? (
          <FieldError>{errors.title.message}</FieldError>
        ) : (
          <FieldDescription>Введите уникальное названия</FieldDescription>
        )}
      </FieldGroup>

      <FieldGroup>
        <FieldLabel htmlFor={'short'}>Тег</FieldLabel>
        <InputGroup>
          <InputGroupInput {...register('short')} placeholder={'ANEX'} id={'short'} />
        </InputGroup>
        {errors.short ? (
          <FieldError>{errors.short.message}</FieldError>
        ) : (
          <FieldDescription>Введите уникальное тег</FieldDescription>
        )}
      </FieldGroup>

      <FieldGroup>
        <FieldLabel>Категория</FieldLabel>
        <Controller
          name={'category'}
          control={control}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
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
          )}
        />
        {errors.category && <FieldError>{errors.category.message}</FieldError>}
      </FieldGroup>

      <FieldGroup>
        <FieldLabel></FieldLabel>
        <InputGroup>
          <InputGroupInput {...register('file')} type={'file'} accept={'image/*'} />
          <InputGroupAddon><Camera /></InputGroupAddon>
        </InputGroup>
      </FieldGroup>

      {/* EMAILS */}
      <FieldGroup>
        <div className="flex justify-between items-center mb-3">
          <FieldLabel>Контактные Email</FieldLabel>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => emailAppend({ title: '', email: '', category: CategoryContact.GENERAL })}
          >
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
                  {errors.emails?.[index]?.title && (
                    <FieldError>{errors.emails[index]?.title?.message}</FieldError>
                  )}
                </div>
                <div>
                  <FieldLabel>Email</FieldLabel>
                  <InputGroup>
                    <InputGroupInput {...register(`emails.${index}.email`)} placeholder="info@agency.com.tr" />
                    <InputGroupAddon><Mails /></InputGroupAddon>
                  </InputGroup>
                  {errors.emails?.[index]?.email && (
                    <FieldError>{errors.emails[index]?.email?.message}</FieldError>
                  )}
                </div>
                <div className="md:col-span-2">
                  <FieldLabel>Категория</FieldLabel>
                  <Controller
                    name={`emails.${index}.category`}
                    control={control}
                    render={({ field }) => (
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className={'w-full'}>
                          <SelectValue placeholder="Выберите категорию" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactCategories.map(cat => (
                            <SelectItem key={cat.value} value={cat.value}>
                              {cat.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.emails?.[index]?.category && (
                    <FieldError>{errors.emails[index]?.category?.message}</FieldError>
                  )}
                </div>
              </div>
            </FieldGroup>
          ))}
        </div>

        {errors.emails?.root && <FieldError>{errors.emails.root.message}</FieldError>}
      </FieldGroup>

      {/* PHONES */}
      <FieldGroup>
        <div className="flex justify-between items-center mb-3">
          <FieldLabel>Контактные телефон</FieldLabel>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => phoneAppend({ title: '', phone: '', category: CategoryContact.GENERAL })}
          >
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
                  {errors.phones?.[index]?.title && (
                    <FieldError>{errors.phones[index]?.title?.message}</FieldError>
                  )}
                </div>
                <div>
                  <FieldLabel>Телефон</FieldLabel>
                  <InputGroup>
                    <InputGroupInput {...register(`phones.${index}.phone`)} placeholder="+90 242 26 22 22" />
                    <InputGroupAddon><Phone /></InputGroupAddon>
                  </InputGroup>
                  {errors.phones?.[index]?.phone && (
                    <FieldError>{errors.phones[index]?.phone?.message}</FieldError>
                  )}
                </div>
                <div className="md:col-span-2">
                  <FieldLabel>Категория</FieldLabel>
                  <Controller
                    name={`phones.${index}.category`}
                    control={control}
                    render={({ field }) => (
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className={'w-full'}>
                          <SelectValue placeholder="Выберите категорию" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactCategories.map(cat => (
                            <SelectItem key={cat.value} value={cat.value}>
                              {cat.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.phones?.[index]?.category && (
                    <FieldError>{errors.phones[index]?.category?.message}</FieldError>
                  )}
                </div>
              </div>
            </FieldGroup>
          ))}
        </div>

        {errors.phones?.root && <FieldError>{errors.phones.root.message}</FieldError>}
      </FieldGroup>
    </FieldSet>
  );
}