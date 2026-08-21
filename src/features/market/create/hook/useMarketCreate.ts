import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionMarket } from '../../model/query-option';

import type { MarketType, MarketDto } from '../../model/types';

export const useMarketCreate = () => {
  const mutation = useBaseCreate<MarketDto, MarketType>({
    queryKey: [QueryOptionMarket.baseKey],
    mutationFn: QueryOptionMarket.post,
  });

  async function handleOnSubmit(dto: MarketDto) {
    const response = await mutation.handleOnSubmit({ ...dto });
    if (response.status !== 200) {
      return response.data.data;
    }
    return response.data.message;
  }

  return {
    isPending: mutation.isPending,
    handleOnSubmit: handleOnSubmit,
  };
};