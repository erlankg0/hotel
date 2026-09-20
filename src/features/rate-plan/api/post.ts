import { RatePlanDto, RatePlanType } from '../model/types';
import { api } from '@/shared/api';

export const post = async (dto: RatePlanDto) => {
    return await api.post<RatePlanType, RatePlanDto>('rape-plan', dto);
}