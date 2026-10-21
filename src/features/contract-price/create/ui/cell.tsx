type CellProps = { value: string };

export function Cell({ value }: CellProps) {
  return (
    <td className="border-b px-3 py-2">
      <input
        aria-label={`Price ${value}`}
        className="h-10 w-28 rounded-md border bg-background px-3 text-right tabular-nums outline-none focus-visible:ring-2 focus-visible:ring-ring"
        defaultValue={value}
      />
    </td>
  );
}
