import { TableHeader, TableHead, TableRow } from '@/shared/ui/table';
import { formatDate } from '@/shared/lib/utils';

type Period = {
    id: string;
    title: string;
    startDate: Date;
    endDate: Date;
}

export function TablePeriods({ periods }: { periods: Period[] }) {
    return (
        <TableHeader>
            <TableRow className="bg-muted/70 hover:bg-muted/70">
                <TableHead className="sticky left-0 z-30 min-w-48 border-r bg-muted/95 text-foreground">
                    Категория номера
                </TableHead>
                <TableHead className="sticky left-48 z-30 min-w-44 border-r bg-muted/95 text-foreground">
                    Размещение
                </TableHead>
                {periods.map((period) => (
                    <TableHead key={period.id} className="min-w-44 px-3 py-2 text-center text-foreground">
                        <div className="text-[10px] font-normal uppercase tracking-wider text-muted-foreground">
                            {period.title}
                        </div>
                        <div className="mt-1 whitespace-nowrap text-xs font-semibold">{formatDate(period.startDate)}</div>
                        <div className="mt-1 whitespace-nowrap text-xs font-semibold">{formatDate(period.endDate)}</div>
                    </TableHead>
                ))}
            </TableRow>
        </TableHeader>
    )
}