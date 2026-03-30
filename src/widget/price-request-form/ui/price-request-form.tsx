'use client';

import { Calendar, Hotel, Search, Users } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

import { DateRange, useDateRange } from '@/features/date-range';
import { GuestCounter, useGuest } from '@/features/guest-count';
import { cn } from '@/shared/lib/utils';

import styles from './styles.module.scss';

export function PriceRequestForm() {
  const { dateRange, setDateRange, nights } = useDateRange();
  const { adults, setAdults, child, setChild, childrenAges, setChildrenAges } = useGuest();
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const guestsLabel = useMemo(() => {
    const totalGuests = adults + child;

    return `${totalGuests} гост${totalGuests === 1 ? 'ь' : totalGuests < 5 ? 'я' : 'ей'}`;
  }, [adults, child]);

  const bookingHref = useMemo(() => {
    const params = new URLSearchParams();


    if (dateRange.start) {
      params.set('check_in', formatDateParam(dateRange.start));
    }

    if (dateRange.end) {
      params.set('check_out', formatDateParam(dateRange.end));
    }

    params.set('adults', String(adults));
    params.set('child', String(child));



    for (let i = 0; i < child; i++) {
      params.append(`childage_${i + 1}`, String(childrenAges[i] ?? '0'));
    }
    const query = params.toString();

    return query ? `/book?${query}` : '/book';
  }, [adults, child, childrenAges, dateRange.end, dateRange.start]);

  useEffect(() => {
    const footer = document.getElementById('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '0px 0px -48px 0px',
      },
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);


  if (isFooterVisible) {
    return (
      <aside className={styles.compact} aria-label="Быстрый переход к бронированию">
        <Link href={bookingHref} className={styles.compact__link} aria-label="Открыть форму бронирования">
          <Hotel size={18} />
          <span>Бронь</span>
        </Link>
      </aside>
    );
  }

  return (
    <aside className={'bottom-panel'} aria-label="Панель бронирования">
      <div className={styles.price_request}>
        <div className={styles.price_request__content}>
          <div className={styles.price_request__lead}>
            <span className={styles.price_request__kicker}>Бронирование</span>
            <p className={styles.price_request__title}>Выберите даты и гостей</p>
          </div>

          <div className={styles.price_request__controller}>
            <div className={styles.block}>
              <DateRange
                setDateRange={setDateRange}
                dateRange={dateRange}
                renderTrigger={({ displayDates, open }) => (
                  <button
                    type="button"
                    onClick={open}
                    className={styles.trigger}
                    aria-label="Выбрать даты проживания"
                  >
                    <span className={styles.trigger__label}>
                      <Calendar size={16} />
                    </span>
                    <span className={styles.trigger__value}>
                      {formatDisplayDate(displayDates.start)} - {formatDisplayDate(displayDates.end)}
                    </span>
                    <span className={styles.trigger__meta}>
                      {nights > 0 ? `${nights} ноч${nights === 1 ? 'ь' : nights < 5 ? 'и' : 'ей'}` : ''}
                    </span>
                  </button>
                )}
              />
            </div>

            <div className={styles.block}>
              <GuestCounter
                child={{ count: child, setCount: setChild }}
                adults={{ count: adults, setCount: setAdults }}
                childrenAges={childrenAges}
                setChildrenAges={setChildrenAges}
                trigger={(
                  <button
                    type="button"
                    className={styles.trigger}
                    aria-label="Выбрать количество гостей"
                  >
                    <span className={styles.trigger__label}>
                      <Users size={16} />
                    </span>
                    <span className={styles.trigger__value}>{guestsLabel}</span>
                    <span className={styles.trigger__meta}>
                      {adults} взр. {child > 0 ? `• ${child} дет.` : ''}
                    </span>
                  </button>
                )}
              />
            </div>
          </div>

          <Link
            href={bookingHref}
            className={cn(styles.action, styles.action_gold)}
            aria-label="Перейти к бронированию"
          >
            <Search size={18} />
            <span>Найти</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}

function formatDisplayDate(date: Date) {
  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: 'short',
  });
}

function formatDateParam(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}
