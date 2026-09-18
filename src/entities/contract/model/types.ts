import type { ContractStatus, BoardType, AgencyType, Currency } from '@/shared/const/enums';

export type ContractType = {
  readonly id: string;
  readonly title: string;

  readonly status: ContractStatus;
  readonly boardType: BoardType;
  readonly currency: Currency;

  readonly isMaleControl?: boolean;

  readonly salesStart: Date;
  readonly salesEnd: Date;

  readonly checkIn: Date;
  readonly checkOut: Date;

  readonly createdAt: Date;
  readonly updatedAt: Date;
}