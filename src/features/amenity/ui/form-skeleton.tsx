import { FieldGroup, FieldSet } from '@/shared/ui/field';
import { Skeleton } from '@/shared/ui/skeleton';

export function FormSkeleton() {
  return (
    <FieldSet className="flex flex-col gap-6">
      <FieldGroup>
        <Skeleton className="h-4 w-16" />

        <Skeleton className="h-10 w-full rounded-md" />

        <Skeleton className="h-4 w-32" />
      </FieldGroup>

      <FieldGroup>
        <Skeleton className="h-4 w-14" />

        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 27 }).map((_, index) => (
            <div
              key={index}
              className="flex h-10 items-center gap-2 rounded border p-2"
            >
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton className="h-4 w-16" />
            </div>
          ))}
        </div>

        <Skeleton className="h-4 w-32" />
      </FieldGroup>

      <Skeleton className="h-4 w-64" />
    </FieldSet>
  );
}