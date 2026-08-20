import { z } from 'zod';

export const occupancyRuleSchema = z.object({
  multiplier: z.float64()
});