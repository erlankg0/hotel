import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionContract } from '../../model/query-option';

import type {
    ContractType,
    ContarctAddRoomDto,
} from '../../model/types';

export const useContractRoomAdd = () => {
    return useBaseCreate<ContarctAddRoomDto, ContractType[]>({
        queryKey: [QueryOptionContract.baseKey],
        mutationFn: QueryOptionContract.add_rooms,
        backOnSuccess: true,
    });
};