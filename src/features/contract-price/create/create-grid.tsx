
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/shared/ui/card';

import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@/shared/ui/table';

const periods = [
  { id: '1', label: '01.04 – 09.04' },
  { id: '2', label: '10.04 – 18.04' },
  { id: '3', label: '19.04 – 30.04' },
  { id: '4', label: '01.05 – 13.05' },
  { id: '5', label: '14.05 – 23.05' },
  { id: '6', label: '24.05 – 31.05' },
  { id: '7', label: '01.06 – 13.06' },
];

const rooms = [
  {
    id: 'villa-standard',
    name: 'Villa Standard Room',
    occupancies: [
      { id: 'double', label: '2 ADULTS · 0 CHD · 0 INF', prices: [60, 70, 80, 90, 100, 110, 120] },
      { id: 'single', label: '1 ADULT · 0 CHD · 0 INF', prices: [75, 90, 105, 120, 135, 150, 165] },
      { id: 'triple', label: '3 ADULTS · 0 CHD · 0 INF', prices: [90, 105, 120, 135, 150, 165, 180] },
    ],
  },
];

export function CreateGrid() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Контрактные цены</CardTitle>
        <CardDescription>
          Стоимость проживания по категориям номеров и периодам
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="sticky left-0 z-20 min-w-[260px] bg-background">
                  Категория номера / Размещение
                </TableHead>

                {periods.map((period) => (
                  <TableHead
                    key={period.id}
                    className="min-w-[120px] text-center"
                  >
                    <div>{period.label}</div>
                    <div className="text-xs font-normal text-muted-foreground">
                      Период {period.id}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {rooms.map((room) => (
                room.occupancies.map((occupancy, index) => (
                  <TableRow key={`${room.id}-${occupancy.id}`}>
                    <TableCell className="sticky left-0 z-10 bg-background">
                      <div className="flex flex-col gap-1">
                        {index === 0 && (
                          <span className="font-semibold">
                            {room.name}
                          </span>
                        )}
                        <span className="text-sm text-muted-foreground">
                          {occupancy.label}
                        </span>
                      </div>
                    </TableCell>

                    {occupancy.prices.map((price, i) => (
                      <TableCell key={periods[i].id} className="p-1">
                        <input
                          type="number"
                          min="0"
                          defaultValue={price}
                          className="h-9 w-full min-w-[90px] rounded-md border bg-background px-2 text-right outline-none focus:ring-2 focus:ring-ring"
                        />
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
