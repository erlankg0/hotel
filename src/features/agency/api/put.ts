import { api } from '@/shared/api';

import type { AgencyDto, AgencyType } from '../model/types';

export const put = async (dto: AgencyDto & { operatorId: string }) => {
  return await api.put<AgencyType, AgencyDto & { operatorId: string }>('agency', dto);
};