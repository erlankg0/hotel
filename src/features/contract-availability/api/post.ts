import { api } from '@/shared/api';

import type { ContractAvailabilityDto, ContactAvailabilityType } from '../model/types';

export const post = async (dto: ContractAvailabilityDto) => {
  return await api.post<ContactAvailabilityType, ContractAvailabilityDto>('contract-availability', dto);
};