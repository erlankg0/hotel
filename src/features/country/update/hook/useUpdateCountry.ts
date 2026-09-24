import { useBaseUpdate } from '@/shared/hooks/useBaseUpdate';

import { QueryOptionCountry } from '../../model/query-option';

import type {
  CountryType,
  CountryUpdateDto,
} from '../../model/types';

export const useCountryUpdate = () => {
  return useBaseUpdate<
    CountryUpdateDto & { marketId: string },
    CountryType
  >({
    queryKey: [QueryOptionCountry.baseKey],
    mutationFn: QueryOptionCountry.put,
  });
};