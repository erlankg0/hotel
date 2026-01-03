import type { ReactNode } from 'react';

export type DialogProps = {
  content: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}