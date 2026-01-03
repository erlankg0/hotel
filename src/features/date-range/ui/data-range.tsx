'use client';


import { ru } from 'date-fns/locale';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

import { useDateRange } from '../model/useDataRange';

import type { DateRange } from 'react-day-picker';


export function DateRange() {
  const { dateRange, setDateRange } = useDateRange();

  const handleDateRangeChange = (range: DateRange | undefined) => {
    setDateRange({
      start: range?.from ?? null,
      end: range?.to ?? null,
    });
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant={'square'} type="button">
          {dateRange.start && dateRange.end
            ? `${dateRange.start.toLocaleDateString()} – ${dateRange.end.toLocaleDateString()}`
            : 'Выберите даты'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={30}>
        <Calendar
          locale={ru}
          mode="range"
          selected={{
            from: dateRange.start ?? undefined,
            to: dateRange.end ?? undefined,
          }}
          weekStartsOn={1}
          numberOfMonths={2}
          onSelect={handleDateRangeChange}
        />
      </DropdownMenuContent>

    </DropdownMenu>
  );
}
