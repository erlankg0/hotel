'use client';


import { ru } from 'date-fns/locale';
import { ChevronRight } from 'lucide-react';

import { Button } from '@/shared/ui/button';
import { Calendar } from '@/shared/ui/calendar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/shared/ui/dropdown-menu';

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
        <Button variant={'ghost'} type="button">
          {(() => {
            const today = new Date();
            const end = new Date(
              today.getFullYear(),
              today.getMonth(),
              today.getDate() + 4,
            );

            const startDate = dateRange.start ?? today;
            const endDate = dateRange.end ?? end;

            return (
              <div className={'flex gap-1 items-center'}>
                <p>{startDate.toLocaleDateString()}</p>
                <ChevronRight size={10} />
                <p>{endDate.toLocaleDateString()}</p>
              </div>
            );
          })()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={30}>
        <Calendar
          locale={ru}
          mode="range"
          disabled={{ before: new Date() }}
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
