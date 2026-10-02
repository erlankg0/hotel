import { keepPreviousData, queryOptions } from '@tanstack/react-query';

import { get } from '../api/get';

import type { QueryOptions } from '@/shared/types/response';

export const QueryOptionContractRoom = {
    baseKey: 'contract-room',
    get: ({ title, limit, enabled, page, id }: QueryOptions) => {
        return queryOptions({
            queryFn: () => get({ title, limit, page, id: id }),
            queryKey: [QueryOptionContractRoom.baseKey, { title, limit, page, id }],
            placeholderData: keepPreviousData,
            enabled: enabled,
        });
    },
};
