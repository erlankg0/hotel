import { api } from '@/shared/api';

import type { ContractPeriodDto, ContractPeriodFormValues} from '../model/types';

export const post = async (dto: ContractPeriodDto) => {
    return await api.post<ContractPeriodFormValues, ContractPeriodDto>('contract-period/list', {
        ...dto
    })
}