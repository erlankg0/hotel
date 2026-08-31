import type { requestSchema } from './schema';
import type { z } from 'zod';

export type RequestDto = z.infer<typeof requestSchema>;
export type RequestType = RequestDto & {
  id: string
}

export type RequestFormInput = z.input<typeof requestSchema>;
export type RequestFormOutput = z.output<typeof requestSchema>;