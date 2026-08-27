import { BadgeInfo } from 'lucide-react';
import { useFormContext } from 'react-hook-form';

import { AMENITY_ICONS, AMENITY_LABEL_RU } from '@/shared/const/icon_amenities';
import {
  FieldSet,
  FieldGroup,
  FieldLabel,
  FieldError,
  FieldDescription,
} from '@/shared/ui/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/shared/ui/input-group';

import type { AmenityDto } from '../../model/schema';

export function UpdateForm() {
  const { register, formState: { errors } } = useFormContext<AmenityDto>();
  return (
    <FieldSet className={'flex flex-col gap-6'}>
      <FieldGroup>
        <FieldLabel htmlFor={'name'}>Названия</FieldLabel>
        <InputGroup>
          <InputGroupInput {...register('name')} placeholder={'Wi-Fi'} />
          <InputGroupAddon>
            <BadgeInfo size={12} />
          </InputGroupAddon>
        </InputGroup>
        {errors.name && (
          <FieldError>{errors.name.message}</FieldError>
        )}
      </FieldGroup>

      <FieldGroup>
        <FieldLabel>Иконка</FieldLabel>

        <div className="grid grid-cols-3 gap-3">
          {Object.entries(AMENITY_ICONS).map(([key, Icon]) => (
            <label
              key={key}
              className="flex items-center gap-2 border p-2 rounded cursor-pointer hover:bg-gray-100"
            >
              <input
                type="radio"
                value={key}
                {...register('icon')}
              />

              <Icon size={16} />

              <span className="text-sm">{AMENITY_LABEL_RU[key]}</span>
            </label>
          ))}
        </div>

        {errors.icon && (
          <FieldError>{errors.icon.message}</FieldError>
        )}
      </FieldGroup>

      <FieldDescription>
        Укажите понятное название удобство
      </FieldDescription>
    </FieldSet>
  );
}