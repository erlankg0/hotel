import { Card, CardContent } from '@/shared/ui/card';
import { FieldGroup, FieldSet } from '@/shared/ui/field';
import { Skeleton } from '@/shared/ui/skeleton';

export function FormSkeleton() {
  return (
    <FieldSet>
      <Card>
        <CardContent>
          <FieldGroup>
            <Skeleton className="h-4 w-20" />

            <div className="flex h-10 w-full items-center rounded-md border px-3">
              <Skeleton className="h-4 w-full" />
            </div>

            <Skeleton className="h-3 w-56" />
          </FieldGroup>

          <FieldGroup>
            <Skeleton className="h-4 w-36" />

            <div className="w-full rounded-md border p-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="mt-2 h-4 w-4/5" />
              <Skeleton className="mt-2 h-4 w-3/5" />
            </div>

            <Skeleton className="h-3 w-64" />
          </FieldGroup>
        </CardContent>
      </Card>
    </FieldSet>
  );
}