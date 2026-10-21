import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';

import { Cell } from './ui/cell';
import { Occupancy } from './ui/occupancy';
import { Period } from './ui/period';
import { Room } from './ui/room';

const periods = [
  { id: 'low', title: 'Low season', range: '01 Jun — 30 Jun' },
  { id: 'mid', title: 'Mid season', range: '01 Jul — 31 Jul' },
  { id: 'high', title: 'High season', range: '01 Aug — 31 Aug' },
];

const rows = [
  { id: 'standard-single', room: 'Standard', occupancy: '1 Adult', prices: ['60.00', '75.00', '90.00'] },
  { id: 'standard-double', room: 'Standard', occupancy: '2 Adults', prices: ['45.00', '55.00', '70.00'] },
  { id: 'standard-child', room: 'Standard', occupancy: '2 Adults + 1 Child', prices: ['40.00', '50.00', '65.00'] },
  { id: 'family-double', room: 'Family room', occupancy: '2 Adults', prices: ['85.00', '100.00', '120.00'] },
  { id: 'family-family', room: 'Family room', occupancy: '2 Adults + 2 Children', prices: ['70.00', '90.00', '110.00'] },
];

export function CreateGrid() {
  return (
    <Card className="w-full overflow-hidden rounded-2xl">
      <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-3 border-b">
        <div>
          <CardTitle className="text-2xl">Contract prices</CardTitle>
          <p className="mt-1 text-sm text-muted-foreground">Price grid · Utopia World · 2026</p>
        </div>
        <span className="rounded-full bg-muted px-3 py-1.5 text-sm text-muted-foreground">Unsaved changes</span>
      </CardHeader>
      <CardContent className="space-y-6 p-4 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2 text-sm font-medium">
            Rate plan
            <select className="h-11 w-full rounded-lg border bg-background px-3 font-normal">
              <option>All Inclusive</option>
              <option>Bed &amp; Breakfast</option>
            </select>
          </label>
          <label className="space-y-2 text-sm font-medium">
            Currency
            <div className="flex h-11 items-center rounded-lg border bg-muted/30 px-3 font-normal">EUR</div>
          </label>
        </div>

        <section className="rounded-xl bg-muted/40 p-4 sm:p-5">
          <h2 className="font-semibold">Set price for selected cells</h2>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <input className="h-11 min-w-0 flex-1 rounded-lg border bg-background px-3" aria-label="Price" placeholder="Enter price" />
            <button className="h-11 rounded-lg bg-primary px-5 text-primary-foreground">Apply price</button>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">Price per person / night</p>
        </section>

        <section aria-label="Price grid">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold">Price grid</h2>
            <span className="text-sm text-muted-foreground">EUR · per night</span>
          </div>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead className="sticky top-0 bg-muted/80">
                <tr>
                  <th className="sticky left-0 z-10 min-w-44 border-b bg-muted/95 px-4 py-3 font-medium">ROOM</th>
                  <th className="sticky left-44 z-10 min-w-48 border-b bg-muted/95 px-4 py-3 font-medium">OCCUPANCY</th>
                  {periods.map(period => <Period key={period.id} title={period.title} range={period.range} />)}
                </tr>
              </thead>
              <tbody>
                {rows.map(row => (
                  <tr key={row.id} className="hover:bg-muted/20">
                    <Room>{row.room}</Room>
                    <Occupancy>{row.occupancy}</Occupancy>
                    {row.prices.map((price, index) => <Cell key={periods[index].id} value={price} />)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
