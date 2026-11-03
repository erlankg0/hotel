'use client';

import { Euro } from 'lucide-react';
import { useState } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/shared/ui/input-group';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui/table';

const periods = [
  { id: '1', start: '01.04', end: '09.04', days: 9 },
  { id: '2', start: '10.04', end: '18.04', days: 9 },
  { id: '3', start: '19.04', end: '30.04', days: 12 },
  { id: '4', start: '01.05', end: '13.05', days: 13 },
  { id: '5', start: '14.05', end: '23.05', days: 10 },
  { id: '6', start: '24.05', end: '31.05', days: 8 },
  { id: '7', start: '01.06', end: '13.06', days: 13 },
];

const occupancies = [
  { id: 'double', label: 'DBL', description: '2 ADULTS · 0 CHD · 0 INF', adults: 2 },
  { id: 'single', label: 'SNGL', description: '1 ADULT · 0 CHD · 0 INF', adults: 1 },
  { id: 'triple', label: 'TRPL', description: '3 ADULTS · 0 CHD · 0 INF', adults: 3 },
];

const initialPerPersonPrices = [30, 35, 40, 45, 50, 55, 60];

export function CreateGrid() {
  const [perPersonPrices, setPerPersonPrices] = useState<Record<string, string>>(
    Object.fromEntries(
      periods.map((period, index) => [period.id, String(initialPerPersonPrices[index])]),
    ),
  );

  return (
    <Card className="overflow-hidden">
      <CardHeader className="border-b bg-background">
        <CardTitle>Контрактные цены</CardTitle>
        <CardDescription>
          Введите цену за человека для каждого периода. Цены размещения рассчитываются автоматически.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table className=" border-separate border-spacing-0">
            <TableHeader>
              <TableRow className="bg-muted/70 hover:bg-muted/70">
                <TableHead className="sticky left-0 z-30  border-r bg-muted/95 text-foreground">Категория
                  номера</TableHead>
                <TableHead
                  className="sticky  z-30  border-r bg-muted/95 text-foreground">Размещение</TableHead>
                {periods.map((period) => (
                  <TableHead key={period.id} className=" px-2 py-2 text-center text-foreground">
                    <div
                      className="text-[10px] font-normal uppercase tracking-wider text-muted-foreground">Период {period.id}</div>
                    <div className="mt-1 whitespace-nowrap text-xs font-semibold">{period.start} — {period.end}</div>
                    <div className="mt-1 text-[10px] font-normal text-muted-foreground">{period.days} ночей</div>
                    <div className="relative mx-auto mt-2 ">
                      <InputGroup>
                        <InputGroupInput
                          type="number"
                          min="0"
                          step="0.01"
                          value={perPersonPrices[period.id] ?? ''}
                          onChange={(event) => setPerPersonPrices((current) => ({
                            ...current,
                            [period.id]: event.target.value,
                          }))}
                          aria-label={`Цена PP для периода ${period.id}`}
                          placeholder="0,00"
                        />
                        <InputGroupAddon align={'inline-end'}>
                          <Euro
                            className="pointer-events-none absolute right-2 top-1/2 size-3 -translate-y-1/2 text-muted-foreground" />
                        </InputGroupAddon>
                      </InputGroup>
                    </div>
                    <div className="mt-1 text-[9px] font-normal text-muted-foreground">за человека / PP</div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {occupancies.map((occupancy, index) => (
                <TableRow key={occupancy.id} className={index === 0 ? 'border-t-2 bg-background' : 'bg-background'}>
                  {index === 0 && (
                    <TableCell rowSpan={occupancies.length}
                               className="sticky left-0 z-20 min-w-45 border-r bg-background align-top">
                      <div className="pt-2">
                        <p className="text-sm font-semibold">Villa Standard Room</p>
                        <p className="mt-1 text-xs text-muted-foreground">Основное размещение</p>
                      </div>
                    </TableCell>
                  )}
                  <TableCell className="sticky left-45 z-10 min-w-47.5 border-r bg-background">
                    <div className="font-semibold text-sm">{occupancy.label}</div>
                    <div className="mt-1 text-[10px] text-muted-foreground">{occupancy.description}</div>
                    <div className="mt-1 text-[10px] text-muted-foreground">PP × {occupancy.adults}</div>
                  </TableCell>
                  {periods.map((period) => {
                    const pp = Number(perPersonPrices[period.id]);
                    const total = Number.isFinite(pp) && pp > 0 ? pp * occupancy.adults : null;
                    return (
                      <TableCell key={period.id} className="border-l px-2 py-2 text-center">
                        <div
                          className="font-semibold tabular-nums text-foreground">{total === null ? '—' : `${total.toFixed(2)} €`}</div>
                        <div className="mt-1 text-[10px] tabular-nums text-muted-foreground">
                          {total === null ? 'ожидает цену PP' : `${perPersonPrices[period.id]} × ${occupancy.adults}`}
                        </div>
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
