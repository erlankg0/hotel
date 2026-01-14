import type { ReactNode } from 'react';

export type TabContentType = {
  value: string,
  label: ReactNode,
  content: ReactNode,
}

export type TabsPros = {
  defaultValue: string,
  triggers: TabContentType[]
}