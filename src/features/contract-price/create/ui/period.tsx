type PeriodProps = {
  title: string;
  range: string;
};

export function Period({ title, range }: PeriodProps) {
  return (
    <th className="min-w-40 border-b px-4 py-3 font-medium">
      <span className="block whitespace-nowrap">{title}</span>
      <span className="mt-1 block whitespace-nowrap text-xs font-normal text-muted-foreground">{range}</span>
      <span className="mt-1 block text-xs font-normal text-muted-foreground">Per person / night</span>
    </th>
  );
}
