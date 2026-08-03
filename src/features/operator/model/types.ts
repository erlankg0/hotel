import type { operatorCreateSchema, operatorSchema } from './schema';
import type { z } from 'zod';

export type OperatorCreateDto = z.infer<typeof operatorSchema>;
export type OperatorUpdateDto = OperatorCreateDto & { id: string };

export type OperatorFormInput = z.input<typeof operatorCreateSchema>;
export type OperatorFormOutput = z.output<typeof operatorSchema>;

export type OperatorType = OperatorFormInput & { id: string };