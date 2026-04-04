'use client';
import { CalendarDays, Search, Users, MoonIcon, Baby, UserRound } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { DateRange, useDateRange } from '@/features/date-range';
import { GuestCounter, useGuest } from '@/features/guest-count';
import { cn, formatWeekday, getGuestLabel } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button/button';

import styles from './styles.module.scss';

export function PriceRequest() {
  const router = useRouter();

  const { dateRange, nights, setDateRange } = useDateRange();
  const { adults, setAdults, child, setChild, childrenAges, setChildrenAges } = useGuest();

  const totalGuests = adults + child;

  const handleSearch = () => {

    const query = {
      checkIn: '',
      checkOut: '',
      adults: adults,
      child: child,
    };

    if (dateRange?.start) {
      query.checkIn = dateRange.start.toLocaleDateString('ru-RU');
    }

    if (dateRange?.end) {
      query.checkOut = dateRange.end.toLocaleDateString('ru-RU');
    }


    const params = new URLSearchParams({
      check_in: query.checkIn,
      check_out: query.checkOut,
      adults: String(adults),
      child: String(child),
    });

    for (let i = 0; i < child; i++) {
      params.append(`childage_${i + 1}`, String(childrenAges[i] ?? '0'));
    }


    router.push(`/book?${params.toString()}`);
  };

  return (
    <section className={styles.price}>
      <DateRange
        dateRange={dateRange}
        setDateRange={setDateRange}
        renderTrigger={({ displayDates, open }) => (
          <div className={styles.price__date_range}>
            <button
              type="button"
              className={styles.price_item}
              onClick={open}
              aria-label="Выбрать дату заезда"
            >
              <CalendarDays className={styles.price__icon} />
              <div className={styles.price__info}>
                <p className={styles.price_item__title}>
                  {displayDates.start.toLocaleDateString('ru-RU')}
                </p>
                <p className={styles.price_item__description}>
                  {formatWeekday(displayDates.start)}
                </p>
              </div>
            </button>

            <button
              type="button"
              className={styles.price_item}
              onClick={open}
              aria-label="Выбрать дату выезда"
            >
              <CalendarDays className={styles.price__icon} />
              <div className={styles.price__info}>
                <p className={cn(styles.price_item__title, 'flex flex-row items-center justify-between w-full')}>
                  {displayDates.end.toLocaleDateString('ru-RU')}
                  <div className={'flex flex-row items-center gap-2'}>
                    <MoonIcon size={14} />
                    <p> {nights > 0 ? nights : 4}</p>
                  </div>
                </p>
                <p className={styles.price_item__description}>
                  {formatWeekday(displayDates.end)}
                </p>
              </div>
            </button>
          </div>
        )}
      />

      <GuestCounter
        adults={{ count: adults, setCount: setAdults }}
        child={{ count: child, setCount: setChild }}
        childrenAges={childrenAges}
        setChildrenAges={setChildrenAges}
        trigger={(
          <button
            type="button"
            className={styles.price_item}
            aria-label="Выбрать количество гостей"
          >
            <Users className={styles.price__icon} />
            <div className={styles.price__info}>
              <p className={styles.price_item__title}>
                {getGuestLabel(totalGuests)}
              </p>
              <div className={styles.price_item__description}>
                <div className="flex items-center gap-1">
                  <UserRound size={12} />
                  <span>Взрослых {adults}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Baby size={12} />
                  <span>Детей {child}</span>
                </div>
              </div>
            </div>
          </button>
        )}
      />

      <Button onClick={handleSearch} type={'button'} className={styles.price__search} variant={'blue'}>
        <Search size={36} />
        <p>Поиск</p>
      </Button>
    </section>
  );
}
