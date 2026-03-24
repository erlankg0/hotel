import { ru } from 'date-fns/locale';
import { ChevronRight } from 'lucide-react';
import { useMemo, useState } from 'react';

import { Button } from '@/shared/ui/button';
import { Calendar } from '@/shared/ui/calendar';
import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';

import type { Props } from '../model/type';
import type { DateRange } from 'react-day-picker';


export function DateRange({ dateRange, setDateRange, trigger, renderTrigger }: Props) {
  const [open, setOpen] = useState(false);

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

    if (range?.from && range.to) {
      setOpen(false);
    }
  };

  const defaultTrigger = trigger ?? (
    <Button type="button">
      <div className="flex gap-1 items-center">
        <p>{displayDates.start.toLocaleDateString()}</p>
        <ChevronRight size={10} />
        <p>{displayDates.end.toLocaleDateString()}</p>
      </div>
    </Button>
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      {renderTrigger ? (
        <PopoverAnchor asChild>
          {renderTrigger({
            displayDates,
            open: () => setOpen(true),
          })}
        </PopoverAnchor>
      ) : (
        <PopoverTrigger asChild>
          {defaultTrigger}
        </PopoverTrigger>
      )}

      <PopoverContent sideOffset={12} align="start" className="w-auto p-0">
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
      </PopoverContent>
    </Popover>
  );
}
