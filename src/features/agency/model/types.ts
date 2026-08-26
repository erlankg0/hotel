import type { agencySchema, agencyUpdateSchema } from './schema';
import type { z } from 'zod';

export type AgencyDto = z.infer<typeof agencySchema>;
export type AgencyType = AgencyDto & { id: string };
export type AgencyCreateFromInput = z.input<typeof agencySchema>;
export type AgencyCreateFormValues = z.output<typeof agencySchema>;

export type AgencyUpdateDto = z.infer<typeof agencyUpdateSchema>;
export type AgencyUpdateFromInput = z.input<typeof agencyUpdateSchema>;
export type AgencyUpdateFormOutput = z.infer<typeof agencyUpdateSchema>;