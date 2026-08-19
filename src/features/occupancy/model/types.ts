import type { occupancySchema } from './schema';
import type { z } from 'zod';

export type OccupancyDto = z.infer<typeof occupancySchema>;
export type OccupancyType = OccupancyDto & { id: string };
export type OccupancyCreateFromInput = z.input<typeof occupancySchema>;
export type OccupancyUpdateFromOutput = z.output<typeof occupancySchema>;