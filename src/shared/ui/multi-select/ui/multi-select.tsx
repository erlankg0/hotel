'use client';

import { Search } from 'lucide-react';
import { Fragment } from 'react';

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
        <ComboboxChips ref={anchor} className={'w-full max-w-xs'}>
          <ComboboxValue>
            {(values) => (
              <Fragment>
                {values.map((value: SelectOption) => (
                  <ComboboxChip key={value.id}>{value.label}</ComboboxChip>
                ))}
                <InputGroup>
                  <ComboboxChipsInput
                    placeholder="Поиск"
                    value={search}
                    onChange={handleSearchChange}
                  />
                  <InputGroupAddon>
                    <Search />
                  </InputGroupAddon>
                </InputGroup>
              </Fragment>
            )}
          </ComboboxValue>
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
                  {item.label}
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