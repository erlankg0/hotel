import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionContractRoom } from '../../model/query-option';

import type {
    ContractRoomDto,
} from '../model/types';

export const useContractRoomAdd = () => {
    return useBaseCreate<ContractRoomDto, object>({
        queryKey: [QueryOptionContractRoom.baseKey],
        mutationFn: QueryOptionContractRoom.add_rooms,
        backOnSuccess: true,
    });
};