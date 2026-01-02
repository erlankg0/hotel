'use client';

import { useState } from 'react';

import type { DateRangeType } from './type';

export function useDateRange(initial?: DateRangeType) {
  const [dateRange, setDateRange] = useState<DateRangeType>(
    initial ?? { start: null, end: null },
  );

  return {
    dateRange,
    setDateRange,
  };
}
