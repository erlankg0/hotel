'use client';

import { Euro, Pencil, RotateCcw, Baby, Users, UserRound } from 'lucide-react';
import { Fragment, useState } from 'react';

import { useContractPeriodsQuery } from '@/entities/contract-period';
import { useContractRoomsQuery } from '@/entities/contract-room';
import { Button } from '@/shared/ui/button';
import {
  Card,
  CardContent,
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
  TableRow,
} from '@/shared/ui/table';
import { GridSkeleton } from './skeleton-grid';
import { Header } from './ui/table-header';
import { TablePeriods } from './ui/table-periods';

type CellKey = `${string}:${string}:${string}`;

function round2(n: number) {
  return Math.round(n * 100) / 100;
}

export function CreateGrid({ id }: { id: string }) {
  const [basePrice, setBasePrice] = useState<Record<string, string>>({});
  const [manual, setManual] = useState<Record<CellKey, string>>({});
  const { data: periods, isLoading: isLoadingPeriods } = useContractPeriodsQuery({ id });
  const { data: rooms, isLoading: isLoadingRooms } = useContractRoomsQuery({ id });

  const isLoading = isLoadingPeriods || isLoadingRooms;

  if (isLoading) {
    return <GridSkeleton />
  }

  return (
    <Card className="w-full">
      <Header />

      <CardContent className="pt-4">
        <div className="overflow-x-auto">
          <Table className="border-separate border-spacing-0">
            <TablePeriods periods={periods}  />
           
            <TableBody>
              {rooms.map((room) => (
                <Fragment key={room.id}>
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

                  {room.occupancyRules.map((occupancy) => (
                    <TableRow key={`${room.id}:${occupancy.id}`} className="bg-background">
                      <TableCell className="sticky left-48 z-10 border-r bg-background">
                        <div className="text-sm font-semibold">{occupancy.occupancy.title}</div>
                        <div className="mt-1 flex items-center gap-2 text-[10px] text-muted-foreground">
                          <div className="inline-flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {occupancy.occupancy.adults}
                          </div>

                          <div className="inline-flex items-center gap-1">
                            <UserRound className="h-3 w-3" />
                            {occupancy.occupancy.children}
                          </div>

                          <div className="inline-flex items-center gap-1">
                            <Baby className="h-3 w-3" />
                            {occupancy.occupancy.babies}
                          </div>
                        </div>
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
      </CardContent>
    </Card>
  );
}