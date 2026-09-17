import { CreditCard, Luggage, Percent, Tag } from 'lucide-react';
import { Controller, useFormContext } from 'react-hook-form';

import { Currency, PaymentType, AgencyType } from '@/shared/const/enums';
import { Card, CardContent } from '@/shared/ui/card';
import { Checkbox } from '@/shared/ui/checkbox';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';

import type { AgencyDto } from '../../model/types';


function CheckboxField({
  name,
  label,
  description,
  control,
  error,
}: {
  name: keyof AgencyDto;
  label: string;
  description: string;
  control: ReturnType<typeof useFormContext<AgencyDto>>['control'];
  error?: string;
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex items-start gap-3 rounded-lg border p-4 transition-colors hover:bg-muted/50">
          <Checkbox
            id={String(name)}
            checked={Boolean(field.value)}
            onCheckedChange={field.onChange}
            className="mt-0.5"
          />

          <div className="min-w-0 space-y-1">
            <FieldLabel
              htmlFor={String(name)}
              className="cursor-pointer"
            >
              {label}
            </FieldLabel>

            {error ? (
              <FieldError>{error}</FieldError>
            ) : (
              <FieldDescription>
                {description}
              </FieldDescription>
            )}
          </div>
        </div>
      )}
    />
  );
}


export function CreateForm() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<AgencyDto>();

  return (
    <FieldSet className="mx-auto w-full space-y-6">
      <div className="text-center">
        <FieldTitle className="text-2xl font-bold">
          <p>Создание агентства</p>
        </FieldTitle>

        <p className="mt-1 text-sm text-muted-foreground">
          Заполните основные данные и условия работы агентства
        </p>
      </div>

      <Card>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-base font-semibold">
              Основная информация
            </h3>

            <p className="text-sm text-muted-foreground">
              Основные данные агентства
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <FieldGroup>
              <FieldLabel htmlFor="title">
                Название
              </FieldLabel>

              <InputGroup>
                <InputGroupInput
                  id="title"
                  {...register('title')}
                  placeholder="Anex-KYRGYZSTAN"
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
                  Уникальное название агентства
                </FieldDescription>
              )}
            </FieldGroup>

            <FieldGroup>
              <FieldLabel htmlFor="code">
                Код
              </FieldLabel>

              <InputGroup>
                <InputGroupInput
                  id="code"
                  {...register('code')}
                  placeholder="ANEX-KG"
                />

                <InputGroupAddon>
                  <Tag />
                </InputGroupAddon>
              </InputGroup>

              {errors.code ? (
                <FieldError>
                  {errors.code.message}
                </FieldError>
              ) : (
                <FieldDescription>
                  Уникальный короткий код агентства
                </FieldDescription>
              )}
            </FieldGroup>
          </div>
        </CardContent>
      </Card>



      <Card>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-base font-semibold">
              Финансовые условия
            </h3>

            <p className="text-sm text-muted-foreground">
              Кредитный лимит, комиссия, валюта и тип оплаты
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <FieldGroup>
              <FieldLabel htmlFor="creditLimit">
                Кредитный лимит
              </FieldLabel>

              <InputGroup>
                <InputGroupInput
                  id="creditLimit"
                  type="number"
                  min={0}
                  {...register('creditLimit', {
                    valueAsNumber: true,
                  })}
                  placeholder="1 000"
                />

                <InputGroupAddon>
                  <CreditCard />
                </InputGroupAddon>
              </InputGroup>

              {errors.creditLimit ? (
                <FieldError>
                  {errors.creditLimit.message}
                </FieldError>
              ) : (
                <FieldDescription>
                  Максимальный доступный кредит
                </FieldDescription>
              )}
            </FieldGroup>

            <FieldGroup>
              <FieldLabel htmlFor="commissionRate">
                Комиссия
              </FieldLabel>

              <InputGroup>
                <InputGroupInput
                  id="commissionRate"
                  type="number"
                  min={0}
                  max={100}
                  step="0.01"
                  {...register('commissionRate', {
                    valueAsNumber: true,
                  })}
                  placeholder="10"
                />

                <InputGroupAddon>
                  <Percent />
                </InputGroupAddon>
              </InputGroup>

              {errors.commissionRate ? (
                <FieldError>
                  {errors.commissionRate.message}
                </FieldError>
              ) : (
                <FieldDescription>
                  Комиссия агентства в процентах
                </FieldDescription>
              )}
            </FieldGroup>

            <Controller
              control={control}
              name="currency"
              render={({ field, fieldState }) => (
                <FieldGroup>
                  <FieldLabel htmlFor="currency">
                    Валюта
                  </FieldLabel>

                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      id="currency"
                      className="w-full"
                    >
                      <SelectValue placeholder="Выберите валюту" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value={Currency.EUR}>
                        EUR
                      </SelectItem>

                      <SelectItem value={Currency.USD}>
                        USD
                      </SelectItem>

                      <SelectItem value={Currency.TRY}>
                        TRY
                      </SelectItem>

                      <SelectItem value={Currency.RUB}>
                        RUB
                      </SelectItem>

                      <SelectItem value={Currency.KGZ}>
                        KGZ
                      </SelectItem>

                      <SelectItem value={Currency.KZ}>
                        KZ
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  {fieldState.error && (
                    <FieldError>
                      {fieldState.error.message}
                    </FieldError>
                  )}
                </FieldGroup>
              )}
            />

            <Controller
              control={control}
              name="paymentType"
              render={({ field, fieldState }) => (
                <FieldGroup>
                  <FieldLabel htmlFor="paymentType">
                    Тип оплаты
                  </FieldLabel>

                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      id="paymentType"
                      className="w-full"
                    >
                      <SelectValue placeholder="Выберите тип оплаты" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value={PaymentType.CASH}>
                        Наличные
                      </SelectItem>

                      <SelectItem value={PaymentType.CASH_BY_GUEST}>
                        Наличные от гостя
                      </SelectItem>

                      <SelectItem value={PaymentType.CREDIT}>
                        Кредит
                      </SelectItem>

                      <SelectItem value={PaymentType.PREPAYMENT}>
                        Предоплата
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  {fieldState.error && (
                    <FieldError>
                      {fieldState.error.message}
                    </FieldError>
                  )}
                </FieldGroup>
              )}
            />

            <Controller
              control={control}
              name="agencyType"
              render={({ field, fieldState }) => (
                <FieldGroup>
                  <FieldLabel htmlFor="agencyType">
                    Тип агентства
                  </FieldLabel>

                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      id="agencyType"
                      className="w-full"
                    >
                      <SelectValue placeholder="Выберите тип агентства" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value={AgencyType.AGENCY}>
                        Агентство
                      </SelectItem>

                      <SelectItem value={AgencyType.COMPAMNY}>
                        Компания
                      </SelectItem>

                      <SelectItem value={AgencyType.INVIDUAL}>
                        Индивидуальный
                      </SelectItem>

                      <SelectItem value={AgencyType.SOURCE}>
                        Источник
                      </SelectItem>

                      <SelectItem value={AgencyType.WALKIN}>
                        Walk-in
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  {fieldState.error && (
                    <FieldError>
                      {fieldState.error.message}
                    </FieldError>
                  )}
                </FieldGroup>
              )}
            />
          </div>
        </CardContent>
      </Card>


      <Card>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-base font-semibold">
              Настройки агентства
            </h3>

            <p className="text-sm text-muted-foreground">
              Дополнительные параметры работы агентства
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">

            <CheckboxField
              name="isFixedCurrency"
              label="Фиксированная валюта"
              description="Использовать фиксированную валюту"
              control={control}
              error={errors.isFixedCurrency?.message}
            />

            <CheckboxField
              name="hasAr"
              label="AR"
              description="Агентство использует AR"
              control={control}
              error={errors.hasAr?.message}
            />

            <CheckboxField
              name="isInternetAgency"
              label="Интернет-агентство"
              description="Агентство работает через интернет"
              control={control}
              error={errors.isInternetAgency?.message}
            />

            <CheckboxField
              name="isBonus"
              label="Бонусная программа"
              description="Агентство участвует в бонусной программе"
              control={control}
              error={errors.isBonus?.message}
            />

            
          </div>
        </CardContent>
      </Card>


      <Card>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-base font-semibold">
              Каналы продаж
            </h3>

            <p className="text-sm text-muted-foreground">
              Выберите каналы, которые используются агентством
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <CheckboxField
              name="applyCallCenter"
              label="Call Center"
              description="Применять условия Call Center"
              control={control}
              error={errors.applyCallCenter?.message}
            />

            <CheckboxField
              name="applyOnline"
              label="Online"
              description="Применять онлайн-условия"
              control={control}
              error={errors.applyOnline?.message}
            />

            <CheckboxField
              name="applyOta"
              label="OTA"
              description="Применять условия OTA"
              control={control}
              error={errors.applyOta?.message}
            />

            <CheckboxField
              name="applyExtraServices"
              label="Дополнительные услуги"
              description="Применять условия дополнительных услуг"
              control={control}
              error={errors.applyExtraServices?.message}
            />

          </div>
        </CardContent>
      </Card>



      <Card>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-base font-semibold">
              Статус агентства
            </h3>

            <p className="text-sm text-muted-foreground">
              Управление активностью и ограничениями агентства
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <CheckboxField
              name="isPassive"
              label="Пассивное агентство"
              description="Агентство временно неактивно"
              control={control}
              error={errors.isPassive?.message}
            />

            <CheckboxField
              name="isBlacklist"
              label="Чёрный список"
              description="Ограничить работу с агентством"
              control={control}
              error={errors.isBlacklist?.message}
            />
          </div>
        </CardContent>
      </Card>
    </FieldSet>
  );
}
