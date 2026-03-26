'use client';
import { useCallback } from 'react';

import { Button } from '@/shared/ui/button';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/shared/ui/popover';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/shared/ui/select';
import { Separator } from '@/shared/ui/separator';

import { GuestRow } from './guest-row';
import styles from './styles.module.scss';

import type { GuestProps } from '../model/type';

export function GuestCounter({ child, adults, trigger, setChildrenAges, childrenAges }: GuestProps) {

  const ages = childrenAges ? Array.from({ length: child.count }, (_, i) => {
    return childrenAges[i] ?? 0;
  }) : [];

  const handleAgeChange = useCallback((index: number, value: number) => {
    setChildrenAges?.((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  }, [setChildrenAges]);

  const defaultTrigger = (
    <Button variant={'secondary'}>{adults.count} Взрослых, {child.count} дети.</Button>
  );
  return (
    <Popover modal={false}>
      <PopoverTrigger asChild>
        {trigger ?? defaultTrigger}
      </PopoverTrigger>
      <PopoverContent sideOffset={12} align="start" className="w-auto p-0">
        <div className={styles.guests}>
          <div className={styles.guests__controls}>
            <div className={styles.guests__selects}>
              <p>Взрослые</p>
              <GuestRow data={adults} min={1} max={5} />
            </div>
            <div className={styles.guests__selects}>
              <p>Дети</p>
              <GuestRow data={child} min={0} max={6} />
            </div>
          </div>
          <Separator />
          <div className={styles.childs}>
            {ages.length === 0 ? (
              <div className={styles.childs__info}>
                <p className={styles.childs__info__text}>
                  Укажите возраст детей для точного расчета цены.
                </p>
                <p className={styles.childs__info__text}>
                  Дети от 12 лет считаются взрослыми.
                </p>
              </div>
            ) : (
              <div className={styles.childs__list}>
                {ages.map((age, index) => (
                  <div key={index} className={styles.childs__item}>
                    <span>Ребёнок {index + 1}</span>

                    <Select
                      value={String(age)}
                      onValueChange={(value) =>
                        handleAgeChange(index, Number(value))
                      }
                    >
                      <SelectTrigger className={'w-full'}>
                        <SelectValue placeholder="Возраст" />
                      </SelectTrigger>

                      <SelectContent>
                        {Array.from({ length: 18 }, (_, i) => (
                          <SelectItem key={i} value={String(i)}>
                            {i} {i === 1 ? 'год' : 'лет'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
