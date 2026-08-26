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

            <Skeleton className="h-10 w-full rounded-md" />

            <Skeleton className="h-4 w-48" />
          </FieldGroup>

          <FieldGroup>
            <Skeleton className="h-4 w-32" />

            <Skeleton className="h-10 w-full rounded-md" />

            <Skeleton className="h-4 w-40" />
          </FieldGroup>
        </CardContent>
      </Card>
    </FieldSet>
  );
}