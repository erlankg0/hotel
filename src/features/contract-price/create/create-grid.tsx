'use client';

import { Euro, Pencil, RotateCcw } from 'lucide-react';
import { Fragment, useState } from 'react';

import { useContractPeriodsQuery } from '@/entities/contract-period';
import { useContractRoomsQuery } from '@/entities/contract-room';
import { formatDate } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/shared/ui/input-group';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui/table';



type CellKey = `${string}:${string}:${string}`;

function round2(n: number) {
  return Math.round(n * 100) / 100;
}

export function CreateGrid({ id }: { id: string }) {
  const [basePrice, setBasePrice] = useState<Record<string, string>>({
    'std:summer': '340',
    'std:winter': '280',
    'fam:summer': '410',
    'fam:winter': '350',
  });
  const [manual, setManual] = useState<Record<CellKey, string>>({});
  const { data: periods } = useContractPeriodsQuery({ id });
  const { data: rooms } = useContractRoomsQuery({ id });

  return (
    <Card className="w-full">
      <CardHeader className="border-b bg-background">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <CardTitle>Контрактные цены</CardTitle>
            <CardDescription>
              Вводится цена PP на период. Остальные размещения считаются по правилу.
              Клик по ячейке — ручная цена.
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-4">
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

            <TableBody>
              {rooms.map((room) => (
                <Fragment key={room.id}>
                  {/* ───── PP: единственная строка с вводом ───── */}
                  <TableRow className="bg-muted/30 hover:bg-muted/30">
                    <TableCell
                      rowSpan={room.occupancyRules.length + 1}
                      className="sticky left-0 z-20 border-r bg-background align-top"
                    >
                      <div className="pt-2">
                        <p className="text-sm font-semibold">{room.roomCategory.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{room.roomCategory.shortTitle}</p>
                      </div>
                    </TableCell>

                    <TableCell className="sticky left-48 z-10 border-r bg-muted/95">
                      <div className="text-sm font-semibold">PP</div>
                      <div className="mt-1 text-[10px] text-muted-foreground">цена за человека</div>
                      <div className="mt-1 text-[10px] font-medium text-primary">база</div>
                    </TableCell>

                    {periods.map((period) => {
                      const baseKey = `${room.id}:${period.id}`;
                      return (
                        <TableCell key={period.id} className="border-l px-2 py-2">
                          <InputGroup>
                            <InputGroupInput
                              type="number"
                              min="0"
                              step="0.01"
                              placeholder="0,00"
                              value={basePrice[baseKey] ?? ''}
                              onChange={(event) =>
                                setBasePrice((current) => ({
                                  ...current,
                                  [baseKey]: event.target.value,
                                }))
                              }
                            />
                            <InputGroupAddon align="inline-end">
                              <Euro className="size-3 text-muted-foreground" />
                            </InputGroupAddon>
                          </InputGroup>
                        </TableCell>
                      );
                    })}
                  </TableRow>

                  {/* ───── DBL, SNGL, ... : только расчёт ───── */}
                  {room.occupancyRules.map((occupancy) => (
                    <TableRow key={`${room.id}:${occupancy.id}`} className="bg-background">
                      <TableCell className="sticky left-48 z-10 border-r bg-background">
                        <div className="text-sm font-semibold">{occupancy.id}</div>
                        <div className="mt-1 text-[10px] text-muted-foreground">test</div>
                      </TableCell>

                      {periods.map((period) => {
                        const baseKey = `${room.id}:${period.id}`;
                        const cellKey = `${room.id}:${occupancy.id}:${period.id}` as CellKey;
                        const base = Number(basePrice[baseKey]);
                        const hasBase = Number.isFinite(base) && base > 0;
                        const multiplier = occupancy.multiplier;
                        const isManual = cellKey in manual;
                        const derived = hasBase ? round2(base * multiplier) : null;

                        return (
                          <TableCell key={period.id} className="border-l px-2 py-2 text-center">
                            {isManual ? (
                              <div className="flex items-center gap-1">
                                <InputGroup>
                                  <InputGroupInput
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    value={manual[cellKey]}
                                    onChange={(event) =>
                                      setManual((current) => ({
                                        ...current,
                                        [cellKey]: event.target.value,
                                      }))
                                    }
                                  />
                                  <InputGroupAddon align="inline-end">
                                    <Euro className="size-3 text-muted-foreground" />
                                  </InputGroupAddon>
                                </InputGroup>
                                <Button
                                  type="button"
                                  size="icon"
                                  variant="ghost"
                                  onClick={() =>
                                    setManual((current) => {
                                      const next = { ...current };
                                      delete next[cellKey];
                                      return next;
                                    })
                                  }
                                >
                                  <RotateCcw className="size-3.5" />
                                </Button>
                              </div>
                            ) : (
                              <button
                                type="button"
                                className="group w-full rounded-md px-2 py-1 hover:bg-muted/60"
                                onClick={() =>
                                  setManual((current) => ({
                                    ...current,
                                    [cellKey]: derived != null ? String(derived) : '',
                                  }))
                                }
                              >
                                <div className="font-semibold tabular-nums">
                                  {derived == null ? '—' : `${derived.toFixed(2)} €`}
                                </div>
                                <div
                                  className="mt-1 flex items-center justify-center gap-1 text-[10px] tabular-nums text-muted-foreground">
                                  {hasBase ? `× ${multiplier}` : 'нет базы'}
                                  <Pencil className="size-2.5 opacity-0 group-hover:opacity-100" />
                                </div>
                              </button>
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
                </Fragment>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-4 flex justify-end">
          <Button type="button">Сохранить</Button>
        </div>
      </CardContent>
    </Card>
  );
}