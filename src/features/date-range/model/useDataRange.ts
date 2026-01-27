'use client';

import { useState, useMemo } from 'react';

import type { DateRangeType } from './type';

export function useDateRange(initial?: DateRangeType) {
  const [dateRange, setDateRange] = useState<DateRangeType>(
    initial ?? { start: null, end: null },
  );

  const nights = useMemo(() => {
    const { start, end } = dateRange;
    if (!start || !end) return 0;

    const startDate = new Date(start);
    startDate.setHours(0, 0, 0, 0);

    const endDate = new Date(end);
    endDate.setHours(0, 0, 0, 0);

    const diff =
      (endDate.getTime() - startDate.getTime()) /
      (1000 * 60 * 60 * 24);

    return Math.max(0, Math.floor(diff));
  }, [dateRange]);

  return {
    dateRange,
    setDateRange,
    nights,
  };
}
