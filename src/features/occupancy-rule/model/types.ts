import type {
  occupancyRuleFormSchema,
  occupancyRuleSchema,
} from './schema';
import type { z } from 'zod';

export type OccupancyRuleDto = z.infer<typeof occupancyRuleSchema> & {
  contractRoomId: string;
  occupancyId: string;
};

export type OccupancyRuleType = OccupancyRuleDto & {
  id: string;
};

export type OccupancyRuleInput =
  z.input<typeof occupancyRuleFormSchema>;

export type OccupancyRuleOutput =
  z.output<typeof occupancyRuleFormSchema>;