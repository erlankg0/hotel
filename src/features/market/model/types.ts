import type { marketSchema, MarketCreateFormSchema } from './schema';
import type { z } from 'zod';

export type MarketDto = z.infer<typeof marketSchema>;
export type MarketType = MarketDto & { id: string };
export type MarketCreateInput = z.input<typeof MarketCreateFormSchema>;
export type MarketCreateOutput = z.input<typeof MarketCreateFormSchema>;