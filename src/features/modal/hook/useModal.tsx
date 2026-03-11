import { useState, useCallback, type ReactNode } from 'react';

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);

  const open = useCallback((node: ReactNode) => {
    setContent(node);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setContent(null);
  }, []);

  return {
    isOpen,
    content,
    open,
    close,
  };
}