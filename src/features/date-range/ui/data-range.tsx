import { ru } from 'date-fns/locale';
import { ChevronRight } from 'lucide-react';
import { useMemo } from 'react';

import { Button } from '@/shared/ui/button';
import { Calendar } from '@/shared/ui/calendar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/shared/ui/dropdown-menu';

import type { Props } from '../model/type';
import type { DateRange } from 'react-day-picker';


export function DateRange({ dateRange, setDateRange }: Props) {

  const displayDates = useMemo(() => {
    const today = new Date();
    const fallbackEnd = new Date(today);
    fallbackEnd.setDate(today.getDate() + 4);

    return {
      start: dateRange.start ?? today,
      end: dateRange.end ?? fallbackEnd,
    };
  }, [dateRange]);

  const handleDateRangeChange = (range?: DateRange) => {
    setDateRange({
      start: range?.from ?? null,
      end: range?.to ?? null,
    });
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" type="button">
          <div className="flex gap-1 items-center">
            <p>{displayDates.start.toLocaleDateString()}</p>
            <ChevronRight size={10} />
            <p>{displayDates.end.toLocaleDateString()}</p>
          </div>
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
