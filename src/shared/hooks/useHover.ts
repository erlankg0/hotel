import { useRef, useCallback, useState } from 'react';

export function useHover<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isHover, setIsHover] = useState<boolean>(false);

  const onMouseEnter = useCallback(() => setIsHover(true), []);
  const onMouseLeave = useCallback(() => setIsHover(false), []);

  return {
    ref,
    isHover,
    bind: {
      ref,
      onMouseEnter,
      onMouseLeave,
    },
  };
}