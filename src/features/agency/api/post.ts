import { api } from '@/shared/api'

import type { AgencyDto, AgencyType } from '../model/types';

export async function post(dto: AgencyDto & { operatorId: string }) {
  return await api.post<AgencyType, AgencyDto & { operatorId: string }>('agency', dto);
}