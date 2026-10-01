import { useBaseUpdate } from '@/shared/hooks/useBaseUpdate';

import { QueryOptionContractRoom } from '../../model/query-option';


export const useContractRoomSwitch = () => {
    return useBaseUpdate<{ id: string }, {}>({
        queryKey: [QueryOptionContractRoom.baseKey],
        mutationFn: QueryOptionContractRoom.post,
        dialogTitle: 'Изменить статус?',
        dialogDescription:
            'Вы уверены, что хотите изменить статус категории номера в контракте?',
    });
};