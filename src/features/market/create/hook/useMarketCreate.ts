import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionMarket } from '../../model/query-option';

import type { MarketType, MarketDto } from '../../model/types';

export const useMarketCreate = () => {
  return useBaseCreate<
    MarketDto & { countries: string[] },
    MarketType
  >({
    queryKey: [QueryOptionMarket.baseKey],
    mutationFn: QueryOptionMarket.post,
  });
};