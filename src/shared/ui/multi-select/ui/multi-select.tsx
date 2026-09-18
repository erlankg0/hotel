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
import { PaginationUI } from '@/shared/ui/paginator/pagination';

import { MultiSelectSkeleton } from './multi-select-skeleton';

import type { Props, SelectOption } from '../model/props';
import type { ChangeEvent, MouseEvent } from 'react';

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
  invalid,
}: Props) {
  const anchor = useComboboxAnchor();
  const selected = value ?? [];

  const handleSearchChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    onSearchChange(event.target.value);

    if (page !== 1) {
      onChangePage(1);
    }
  };

  const handlePaginationMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <Combobox
      autoHighlight={true}
      multiple={true}
      items={options}
      filter={null}
      isItemEqualToValue={(item: SelectOption, itemValue: SelectOption) => item.id === itemValue.id}
      value={selected}
      onValueChange={onChange}
    >
      <ComboboxChips
        ref={anchor}
        aria-invalid={invalid || undefined}
        className="w-full"
      >
        <ComboboxValue>
          {(values: SelectOption[]) => {
            const maxVisible = values.length > 5 ? 4 : 5;
            const visibleValues = values.slice(0, maxVisible);
            const hiddenCount = values.length - maxVisible;
            const hiddenTitles = values
              .slice(maxVisible)
              .map((item) => item.title)
              .join(', ');

            return (
              <>
                {visibleValues.map((item) => (
                  <ComboboxChip
                    key={item.id}
                    className="max-w-40"
                  >
                    <span className="truncate">
                      {item.title}
                    </span>
                  </ComboboxChip>
                ))}

                {hiddenCount > 0 && (
                  <span
                    className="inline-flex h-[22px] shrink-0 items-center rounded-sm bg-muted px-1.5 text-xs font-medium text-muted-foreground"
                    title={hiddenTitles}
                  >
                    +{hiddenCount}
                  </span>
                )}
              </>
            );
          }}
        </ComboboxValue>

        <ComboboxChipsInput
          placeholder={selected.length ? 'Ещё...' : 'Поиск...'}
          value={search}
          onChange={handleSearchChange}
          aria-invalid={invalid || undefined}
        />

        <Search className="size-4 shrink-0 text-muted-foreground" />
      </ComboboxChips>

      <ComboboxContent anchor={anchor} className={cn(className)}>
        {isLoading ? (
          <MultiSelectSkeleton />
        ) : (
          <>
            <ComboboxEmpty>
              {empty ?? 'Нет данных'}
            </ComboboxEmpty>
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
          </>
        )}

        {total > 10 && (
          <div
            className="border-t py-1"
            onMouseDown={handlePaginationMouseDown}
          >
            <PaginationUI page={page} onPage={onChangePage} total={total} limit={10} />
          </div>
        )}
      </ComboboxContent>
    </Combobox>
  );
}
