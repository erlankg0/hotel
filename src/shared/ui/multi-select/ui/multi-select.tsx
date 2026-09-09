'use client';

import { Loader2, Search } from 'lucide-react';
import {  Fragment } from 'react';

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

import type { Props } from '../model/props';
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
        value={value}
        onValueChange={onChange}
      >
        <ComboboxChips ref={anchor} className={'w-full max-w-xs'}>
          <ComboboxValue>
            {(values) => (
              <Fragment>
                {values.map((value: string) => (
                  <ComboboxChip key={value}>{value}</ComboboxChip>
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
          {isLoading ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <ComboboxList>
              <ComboboxEmpty>
                {empty ?? 'Нету данных'}
              </ComboboxEmpty>
              {options.map((item) => (
                <ComboboxItem
                  key={item.id}
                  value={item.id}
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