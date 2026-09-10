'use client';

import { Search } from 'lucide-react';

import { cn } from '@/shared/lib/utils';
import {
  Combobox,
  useComboboxAnchor,
  ComboboxChips,
  ComboboxValue,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
} from '@/shared/ui/combobox';
import { InputGroup, InputGroupAddon } from '@/shared/ui/input-group';
import { PaginationUI } from '@/shared/ui/paginator/pagination';
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle, PopoverDescription } from '@/shared/ui/popover';

import { MultiSelectSkeleton } from './multi-select-skeleton';

import type { Props, SelectOption } from '../model/props';
import type { ChangeEvent } from 'react';

export function MultiSelect({
  page,
  total,
  isLoading,
  onChange,
  onChangePage,
  onSearchChange,
  empty,
  className,
  options,
  search,
  value,
}: Props) {
  const anchor = useComboboxAnchor();

  const handleSearchChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    onSearchChange(event.target.value);
  };

  return (
    <div>
      <Combobox
        autoHighlight={true}
        multiple={true}
        items={options}
        filter={null}
        isItemEqualToValue={(item: SelectOption, value: SelectOption) => item.id === value.id}
        value={value}
        onValueChange={onChange}
      >
        <ComboboxChips ref={anchor} className={'w-full '}>
          <ComboboxValue>
            {(values) => {
              const maxVisible = values.length > 5 ? 4 : 5;

              const visibleValues = values.slice(0, maxVisible);
              const hiddenCount = values.length - maxVisible;

              return (
                <>
                  {visibleValues.map((value: SelectOption) => (
                    <ComboboxChip
                      key={value.id}
                      className="max-w-40"
                    >
                      <span className="truncate">
                        {value.title}
                      </span>
                    </ComboboxChip>
                  ))}

                  {hiddenCount > 0 && (
                    <Popover>
                      <PopoverTrigger>
                        <span className="inline-flex shrink-0 items-center rounded-md bg-muted px-2 py-1 text-sm">
                          +{hiddenCount}
                        </span>
                      </PopoverTrigger>
                      <PopoverContent className="w-64">
                        <PopoverHeader>
                          <PopoverTitle>Выбранные</PopoverTitle>
                          <PopoverDescription>
                            Всего выбрано: {values.length}
                          </PopoverDescription>
                        </PopoverHeader>

                        <div className="mt-3 max-h-60 space-y-1 overflow-y-auto">
                          {values.map((item: SelectOption) => (
                            <div
                              key={item.id}
                              className="rounded-md px-2 py-1.5 text-sm hover:bg-muted"
                            >
                              {item.title}
                            </div>
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>
                  )}
                </>
              );
            }}
          </ComboboxValue>
          <InputGroup className="min-w-24  border-0 shadow-none">
            <ComboboxChipsInput
              placeholder={'Поиск...'}
              value={search}
              onChange={handleSearchChange}
            />

            <InputGroupAddon>
              <Search className="size-4" />
            </InputGroupAddon>
          </InputGroup>
        </ComboboxChips>
        <ComboboxContent anchor={anchor} className={cn(className)}>
          <ComboboxEmpty>
            {empty ?? 'Нету данных'}
          </ComboboxEmpty>
          {isLoading ? (
            <MultiSelectSkeleton />
          ) : (
            <ComboboxList>
              {options.map((item) => (
                <ComboboxItem
                  key={item.id}
                  value={item}
                >
                  {item.title}
                </ComboboxItem>
              ))}
            </ComboboxList>
          )}
        </ComboboxContent>
        <PaginationUI page={page} onPage={onChangePage} total={total} limit={10} />
      </Combobox>
    </div>
  );
}