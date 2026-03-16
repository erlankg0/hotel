'use client';

import { Button } from '@/shared/ui/button';
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/shared/ui/field';
import { Input } from '@/shared/ui/input';

import styles from './styles.module.scss';

export function PriceForm() {
  return (
    <div className={styles.form}>
      <form>
        <FieldSet>
          <FieldGroup>

            <Field>
              <FieldLabel htmlFor="name">Имя</FieldLabel>
              <Input
                id="name"
                name="name"
                placeholder="Ваше имя"
                autoComplete="off"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="checkin">Дата заезда</FieldLabel>
              <Input
                id="checkin"
                name="checkin"
                type="date"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="checkout">Дата выезда</FieldLabel>
              <Input
                id="checkout"
                name="checkout"
                type="date"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="guests">Гости</FieldLabel>
              <Input
                id="guests"
                name="guests"
                type="number"
                min="1"
                placeholder="2"
              />
            </Field>

            <Button type="submit">
              Найти цену
            </Button>

          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  );
}