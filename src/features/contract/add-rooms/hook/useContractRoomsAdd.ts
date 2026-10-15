import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionContract } from '../../model/query-option';

import type {
    ContractRoomDto,
} from '../model/types';

export const useContractRoomAdd = () => {
    return useBaseCreate<ContractRoomDto, object>({
        queryKey: [QueryOptionContract.baseKey],
        mutationFn: QueryOptionContract.add_rooms,
        backOnSuccess: true,
    });
};