'use client';

import { BedDouble, Check, Search } from 'lucide-react';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { useRoomCategoriesQuery } from '@/entities/room-category';
import { Button } from '@/shared/ui/button';
import { FieldDescription, FieldError } from '@/shared/ui/field';
import { Input } from '@/shared/ui/input';
import { ScrollArea } from '@/shared/ui/scroll-area';
import { Separator } from '@/shared/ui/separator';

import type { ContractRoomFromInput } from '../model/types';

type SelectedCategory = { id: string; title: string };


export function AddContractRoomForm() {
  const [search, setSearch] = useState('');

  const {
    data = [],
    isLoading,
    total = 0,
  } = useRoomCategoriesQuery({ search });

  const { control } = useFormContext<ContractRoomFromInput>();

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };


  return (
    <Controller
      control={control}
      name="roomCategoryIds"
      render={({ field, fieldState }) => {
        const selectedCategories: SelectedCategory[] = field.value ?? [];
        const selectedIds = selectedCategories.map((item) => item.id);

        const toggleCategory = (category: SelectedCategory) => {
          const exists = selectedCategories.some(
            (item) => item.id === category.id,
          );

          const next = exists
            ? selectedCategories.filter((item) => item.id !== category.id)
            : [...selectedCategories, { id: category.id, title: category.title }];

          field.onChange(next);
        };

        const clearSelection = () => {
          field.onChange([]);
        };

        return (
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                value={search}
                onChange={(event) =>
                  handleSearchChange(event.target.value)
                }
                placeholder="Поиск по названию или коду..."
                className="pl-9"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                {total === 1 ? '1 категория' : `${total} категорий`}
              </div>

              <div className="flex items-center gap-3">
                    <span className="text-sm font-medium">
                      Выбрано: {selectedIds.length}
                    </span>

                {selectedIds.length > 0 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={clearSelection}
                  >
                    Очистить
                  </Button>
                )}
              </div>
            </div>

            <Separator />

            <ScrollArea className="h-72 pr-3">
              <div className="space-y-1">
                {isLoading ? (
                  <div className="space-y-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div
                        key={index}
                        className="h-14 animate-pulse rounded-lg bg-muted"
                      />
                    ))}
                  </div>
                ) : data.length > 0 ? (
                  data.map((category) => {
                    const selected = selectedIds.includes(category.id);

                    return (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => toggleCategory(category)}
                        className={[
                          'group',
                          'flex w-full items-center gap-3',
                          'rounded-lg border p-3',
                          'text-left transition-colors',
                          'hover:bg-accent',
                          selected
                            ? 'border-primary/30 bg-accent'
                            : 'border-transparent',
                        ].join(' ')}
                      >
                        <div
                          className={[
                            'flex size-9 shrink-0',
                            'items-center justify-center',
                            'rounded-md transition-colors',
                            selected
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-muted-foreground',
                          ].join(' ')}
                        >
                          {selected ? (
                            <Check className="size-4" />
                          ) : (
                            <BedDouble className="size-4" />
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium">
                            {category.title}
                          </p>

                          <p className="text-xs text-muted-foreground">
                            {category.shortTitle}
                          </p>
                        </div>

                        <div
                          className={[
                            'flex size-5 shrink-0',
                            'items-center justify-center',
                            'rounded border',
                            'transition-colors',
                            selected
                              ? 'border-primary bg-primary text-primary-foreground'
                              : 'border-muted-foreground/30',
                          ].join(' ')}
                        >
                          {selected && <Check className="size-3" />}
                        </div>
                      </button>
                    );
                  })
                ) : (
                  <div className="flex h-32 flex-col items-center justify-center gap-2 text-center">
                    <BedDouble className="size-8 text-muted-foreground/50" />

                    <div>
                      <p className="text-sm font-medium">
                        Категории не найдены
                      </p>

                      <p className="text-xs text-muted-foreground">
                        Попробуйте изменить поисковый запрос.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>


            {fieldState.error ? (
              <FieldError>{fieldState.error.message}</FieldError>
            ) : (
              <FieldDescription>
                Выберите одну или несколько категорий номеров.
              </FieldDescription>
            )}
          </div>
        );
      }}
    />
  );
}