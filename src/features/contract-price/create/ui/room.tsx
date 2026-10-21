import type { PropsWithChildren } from 'react';

export function Room({ children }: PropsWithChildren) {
  return <td className="sticky left-0 z-[1] border-b bg-background px-4 py-3 font-medium">{children}</td>;
}
