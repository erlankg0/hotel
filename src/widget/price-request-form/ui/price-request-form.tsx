'use client';

import { Hotel, Search } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { DateRange, useDateRange } from '@/features/date-range';
import { GuestCounter, useGuest } from '@/features/guest-count';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';

import styles from './styles.module.scss';

export function PriceRequestForm() {
  const { dateRange, setDateRange } = useDateRange();
  const { adults, setAdults, child, setChild } = useGuest();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footer = document.getElementById('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidden(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      },
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);


  if (hidden) {
    return (
      <section
        className={`fixed bottom-4 right-4 z-50`}
        aria-label="Bottom fixed panel"
      >
        <div className={cn(styles.price_request, 'p-3 rounded-full cursor-pointer')}>
          <Link href={'/book'}>
            <Hotel size={16} />
          </Link>
        </div>
      </section>
    );
  }
  return (
    <section
      className={`bottom-panel`}
      aria-label="Bottom fixed panel"
    >
      {!hidden &&
        (
          <article className={cn(styles.price_request, 'px-4 py-4')}>
            <article className={styles.price_request__content}>
              <p>Бронирования</p>
              <div className={styles.price_request__controller}>
                <div className={styles.block}>
                  <DateRange setDateRange={setDateRange} dateRange={dateRange} />
                </div>

                <div className={'divider'} />

                <div className={styles.block}>
                  <GuestCounter child={{ count: child, setCount: setChild }}
                                adults={{ count: adults, setCount: setAdults }} />
                </div>
              </div>

              <div className={styles.right}>
                <Button variant={'secondary'} type={'button'}>
                  <Search />
                </Button>
              </div>
            </article>
          </article>
        )
      }
    </section>
  );
}