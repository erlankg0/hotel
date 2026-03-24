'use client';
import { CalendarDays, Search, Users } from 'lucide-react';

import { DateRange, useDateRange } from '@/features/date-range';
import { GuestCounter, useGuest } from '@/features/guest-count';
import { Button } from '@/shared/ui/button';

import styles from './styles.module.scss';

const weekdayFormatter = new Intl.DateTimeFormat('ru-RU', {
  weekday: 'long',
});

function formatWeekday(date: Date) {
  const value = weekdayFormatter.format(date);
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function getGuestLabel(count: number) {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return `${count} гость`;
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return `${count} гостя`;
  }

  return `${count} гостей`;
}

export function PriceRequest() {
  const { dateRange, setDateRange } = useDateRange();
  const { adults, setAdults, child, setChild } = useGuest();
  const totalGuests = adults + child;

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
                <p className={styles.price_item__title}>
                  {displayDates.end.toLocaleDateString('ru-RU')}
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
              <p className={styles.price_item__description}>
                {adults} взрослых, {child} детей
              </p>
            </div>
          </button>
        )}
      />

      <Button type={'button'} className={styles.price__search} variant={'blue'}>
          <Search size={36} />
          <p>Поиск</p>
      </Button>
    </section>
  );
}
