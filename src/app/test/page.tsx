'use client';

import { useMemo, useState } from 'react';
import { Page } from '@/widget/page';

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

import { Badge } from '@/shared/ui/badge';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';

import {
  Euro,
  Save,
  CheckCircle2,
  BedDouble,
  Users,
} from 'lucide-react';

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
      {
        id: 'double',
        label: '2 Adults',
        details: '2 ADT · 0 CHD · 0 INF',
        prices: [60, 70, 80, 90, 100, 110, 120],
      },
      {
        id: 'single',
        label: 'Single',
        details: '1 ADT · 0 CHD · 0 INF',
        prices: [75, 90, 105, 120, 135, 150, 165],
      },
      {
        id: 'triple',
        label: 'Triple',
        details: '3 ADT · 0 CHD · 0 INF',
        prices: [90, 105, 120, 135, 150, 165, 180],
      },
    ],
  },
];

export default function CreateGrid() {
  const initialPrices = useMemo(() => {
    return Object.fromEntries(
      rooms.flatMap((room) =>
        room.occupancies.flatMap((occupancy) =>
          occupancy.prices.map((price, index) => [
            `${room.id}-${occupancy.id}-${periods[index].id}`,
            String(price),
          ])
        )
      )
    );
  }, []);

  const [prices, setPrices] = useState<Record<string, string>>(
    initialPrices
  );

  const totalCells = rooms.reduce(
    (total, room) =>
      total + room.occupancies.length * periods.length,
    0
  );

  const filledCells = Object.values(prices).filter(
    (price) => price.trim() !== '' && Number(price) > 0
  ).length;

  const updatePrice = (key: string, value: string) => {
    setPrices((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <Page>
      <div className="space-y-6">

        <Card className="overflow-hidden">
          <CardHeader className="border-b">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <CardTitle className="text-base">
                  Price grid
                </CardTitle>
                <CardDescription className="mt-1">
                  All prices are calculated per person (PP).
                </CardDescription>
              </div>

              <Badge variant="outline" className="w-fit gap-1">
                <Euro className="size-3" />
                EUR / PP
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table className="min-w-[1250px] border-separate border-spacing-0">

                <TableHeader>
                  <TableRow className="bg-muted/50 hover:bg-muted/50">

                    <TableHead className="sticky left-0 z-30 w-[230px] min-w-[230px] border-r bg-muted/95">
                      Room category
                    </TableHead>

                    <TableHead className="sticky left-[230px] z-30 w-[210px] min-w-[210px] border-r bg-muted/95">
                      Occupancy
                    </TableHead>

                    {periods.map((period) => (
                      <TableHead
                        key={period.id}
                        className="w-[125px] min-w-[125px] text-center"
                      >
                        <div className="font-semibold text-foreground">
                          {period.label}
                        </div>
                        <div className="mt-1 text-[11px] font-normal text-muted-foreground">
                          Period {period.id}
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {rooms.map((room) =>
                    room.occupancies.map((occupancy, index) => (
                      <TableRow
                        key={`${room.id}-${occupancy.id}`}
                        className={
                          index === 0
                            ? 'border-t-2 bg-background'
                            : 'bg-background'
                        }
                      >
                        {index === 0 && (
                          <TableCell
                            rowSpan={room.occupancies.length}
                            className="sticky left-0 z-20 border-r bg-background align-top"
                          >
                            <div className="flex items-start gap-3 pt-3">
                              <div className="rounded-lg bg-muted p-2">
                                <BedDouble className="size-4 text-muted-foreground" />
                              </div>

                              <div>
                                <p className="font-semibold text-sm">
                                  {room.name}
                                </p>
                                <p className="mt-1 text-xs text-muted-foreground">
                                  {room.occupancies.length} occupancies
                                </p>
                              </div>
                            </div>
                          </TableCell>
                        )}

                        <TableCell className="sticky left-[230px] z-10 border-r bg-background">
                          <div className="space-y-1">
                            <p className="text-sm font-medium">
                              {occupancy.label}
                            </p>
                            <p className="text-[10px] text-muted-foreground">
                              {occupancy.details}
                            </p>
                             <p className="text-[10px] text-muted-foreground">
                              X 2
                            </p>
                          </div>
                        </TableCell>

                        {periods.map((period) => {
                          const key = `${room.id}-${occupancy.id}-${period.id}`;
                          const value = prices[key];

                          return (
                            <TableCell
                              key={period.id}
                              className="px-2 py-2"
                            >
                              <div className="relative">
                                <Input
                                  type="number"
                                  min="0"
                                  step="0.01"
                                  value={value ?? ''}
                                  onChange={(e) =>
                                    updatePrice(key, e.target.value)
                                  }
                                  placeholder="0.00"
                                  className="h-9 pr-7 text-center text-sm tabular-nums focus-visible:ring-1"
                                />

                                <Euro className="pointer-events-none absolute right-2 top-1/2 size-3 -translate-y-1/2 text-muted-foreground" />
                              </div>
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))
                  )}
                </TableBody>

              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </Page>
  );
}
