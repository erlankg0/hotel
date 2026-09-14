import type { z } from 'zod';
import { ContractSchema } from './schema';
import type { DateType } from '@/shared/zod';

export type ContractDto = z.infer<typeof ContractSchema> & {
    hotelId: string,
    agencyId: string,
    countryId: string
};

export type ContractFormInput = z.input<typeof ContractSchema>;
export type ContractFormOutput = z.output<typeof ContractSchema>;

export type ContractType = z.infer<typeof ContractSchema> & DateType;