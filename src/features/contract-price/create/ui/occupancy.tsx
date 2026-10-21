import type { PropsWithChildren } from 'react';

export function Occupancy({ children }: PropsWithChildren) {
  return <td className="sticky left-44 z-[1] border-b bg-background px-4 py-3 text-muted-foreground">{children}</td>;
}
