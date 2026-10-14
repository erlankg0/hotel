import type { DateType } from '@/shared/types/date';

export type ContractPeriodType = {
  id: string;
  contractId: string;
  title: string;
  startDate: Date;
  endDate: Date;
} & DateType;