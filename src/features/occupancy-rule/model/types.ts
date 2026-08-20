import type { occupancyRuleSchema } from './schema';
import type { z } from 'zod';

export type OccupancyRuleDto = z.infer<typeof occupancyRuleSchema>;
export type OccupancyRuleType = OccupancyRuleDto & { id: string };

export type OccupancyRuleInput = z.input<typeof occupancyRuleSchema>;
export type OccupancyRuleOutput = z.infer<typeof occupancyRuleSchema>;