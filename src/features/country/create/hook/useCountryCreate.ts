import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionCountry } from '../../model/query-option';

import type { CountryDto, CountryType } from '../../model/types';

export const useCountryCreate = () => {
  return useBaseCreate<
    CountryDto & { marketId: string },
    CountryType
  >({
    queryKey: [QueryOptionCountry.baseKey],
    mutationFn: QueryOptionCountry.post,
  });
};