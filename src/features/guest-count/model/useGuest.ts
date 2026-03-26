'use client';

import { useState } from 'react';

export function useGuest() {
  const [adults, setAdults] = useState<number>(2);
  const [child, setChild] = useState<number>(0);
  const [childrenAges, setChildrenAges] = useState<number[]>([]);

  return {
    adults,
    child,
    childrenAges,
    setChildrenAges,
    setAdults,
    setChild,
  };
}