'use client';

import { useState } from 'react';

export function useGuest() {
  const [adults, setAdults] = useState<number>(2);
  const [child, setChild] = useState<number>(0);

  return {
    adults,
    child,
    setAdults,
    setChild,
  };
}