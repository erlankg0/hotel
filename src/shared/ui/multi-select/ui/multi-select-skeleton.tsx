export function MultiSelectSkeleton() {
  return (
    <div className="p-1 space-y-1" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="h-9 rounded-md bg-muted animate-pulse"
          style={{ animationDelay: `${i * 75}ms` }}
        />
      ))}
    </div>
  );
}

