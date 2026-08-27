import { Card, CardContent } from '@/shared/ui/card';
import {
  FieldGroup,
  FieldSet,
} from '@/shared/ui/field';
import { Skeleton } from '@/shared/ui/skeleton';

export function FormSkeleton() {
  return (
    <FieldSet>
      {/* Title */}
      <div className="mb-4">
        <Skeleton className="mx-auto h-7 w-32" />
      </div>

      <Card>
        <CardContent>
          <FieldGroup>
            <Skeleton className="h-4 w-24" />

            <div className="flex h-10 w-full items-center gap-2 rounded-md border px-3">
              <Skeleton className="h-5 w-5 shrink-0" />
              <Skeleton className="h-4 w-full max-w-[180px]" />
            </div>
          </FieldGroup>

          <FieldGroup>
            <Skeleton className="h-4 w-20" />

            <div className="flex h-10 w-full items-center gap-2 rounded-md border px-3">
              <Skeleton className="h-5 w-5 shrink-0" />
              <Skeleton className="h-4 w-full max-w-[220px]" />
            </div>
          </FieldGroup>

          <FieldGroup>
            <Skeleton className="h-4 w-20" />

            <div className="flex h-10 w-full items-center gap-2 rounded-md border px-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-5 w-5 shrink-0" />
            </div>

            <Skeleton className="h-4 w-48" />
          </FieldGroup>

          <FieldGroup>
            <Skeleton className="h-4 w-32" />

            <div className="flex h-10 w-full items-center gap-2 rounded-md border px-3">
              <Skeleton className="h-4 w-full max-w-[160px]" />
              <Skeleton className="h-5 w-5 shrink-0" />
            </div>

            <Skeleton className="h-4 w-40" />
          </FieldGroup>
        </CardContent>
      </Card>
    </FieldSet>
  );
}