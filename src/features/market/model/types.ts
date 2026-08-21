import type { marketSchema } from './schema';
import type { z } from 'zod';

export type MarketDto = z.infer<typeof marketSchema>;
export type MarketType = MarketDto & { id: string };
export type MarketCreateInput = z.input<typeof marketSchema>;
export type MarketCreateOutput = z.input<typeof marketSchema>;