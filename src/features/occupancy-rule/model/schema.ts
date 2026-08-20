import { z } from 'zod';

export const occupancyRuleSchema = z.object({
  occupancyId: z.uuid(),
  multiplier: z.float64(),
});