import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionContract } from '../../model/query-option';

import type { ContractType, ContarctAddRoomDto } from '../../model/types';

export const useContractRoomAdd = () => {
    const mutation = useBaseCreate<ContarctAddRoomDto, ContractType[]>({
        queryKey: [QueryOptionContract.baseKey],
        mutationFn: QueryOptionContract.add_rooms,
        backOnSuccess: true
    });

    return {
        ...mutation,
        handleOnSubmit: async (dto: ContarctAddRoomDto) => {
            const response = await mutation.handleOnSubmit(dto);
            return response.data.data;
        },
    };
};