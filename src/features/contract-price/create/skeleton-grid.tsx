import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from '@/shared/ui/table';
import { Skeleton } from '@/shared/ui/skeleton';
import { Fragment } from 'react';

const SKELETON_PERIODS = 4;
const SKELETON_ROOMS = 2;
const SKELETON_OCCUPANCIES = 3;

export function GridSkeleton() {
    return (
        <div className="overflow-x-auto">
            <Table className="border-separate border-spacing-0">
                <TableHeader>
                    <TableRow className="bg-muted/70 hover:bg-muted/70">
                        <TableHead className="sticky left-0 z-30 min-w-48 border-r bg-muted/95 text-foreground">
                            Категория номера
                        </TableHead>
                        <TableHead className="sticky left-48 z-30 min-w-44 border-r bg-muted/95 text-foreground">
                            Размещение
                        </TableHead>
                        {Array.from({ length: SKELETON_PERIODS }).map((_, i) => (
                            <TableHead key={i} className="min-w-44 px-3 py-2">
                                <div className="flex flex-col items-center gap-1.5">
                                    <Skeleton className="h-2.5 w-16" />
                                    <Skeleton className="h-3 w-20" />
                                    <Skeleton className="h-3 w-20" />
                                </div>
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {Array.from({ length: SKELETON_ROOMS }).map((_, roomIdx) => (
                        <Fragment key={roomIdx}>
                            {Array.from({ length: SKELETON_OCCUPANCIES }).map((_, rowIdx) => (
                                <TableRow key={rowIdx} className={rowIdx === 0 ? 'bg-muted/30 hover:bg-muted/30' : 'bg-background'}>
                                    {rowIdx === 0 && (
                                        <TableCell
                                            rowSpan={SKELETON_OCCUPANCIES}
                                            className="sticky left-0 z-20 border-r bg-background align-top"
                                        >
                                            <div className="space-y-2 pt-2">
                                                <Skeleton className="h-4 w-32" />
                                                <Skeleton className="h-3 w-20" />
                                            </div>
                                        </TableCell>
                                    )}

                                    <TableCell className="sticky left-48 z-10 border-r bg-background">
                                        <div className="space-y-2">
                                            <Skeleton className="h-4 w-16" />
                                            <Skeleton className="h-3 w-24" />
                                        </div>
                                    </TableCell>

                                    {Array.from({ length: SKELETON_PERIODS }).map((_, colIdx) => (
                                        <TableCell key={colIdx} className="border-l px-2 py-2">
                                            {rowIdx === 0 ? (
                                                <Skeleton className="h-9 w-full" />
                                            ) : (
                                                <div className="flex flex-col items-center gap-1.5">
                                                    <Skeleton className="h-4 w-16" />
                                                    <Skeleton className="h-3 w-10" />
                                                </div>
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </Fragment>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}