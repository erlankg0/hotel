import { api } from '@/shared/api';

import type { RatePlanDto, RatePlanType } from '../model/types';

export const post = async (dto: RatePlanDto) => {
    return await api.post<RatePlanType, RatePlanDto>('rape-plan', dto);
}