import { useBaseUpdate } from '@/shared/hooks/useBaseUpdate';

import { QueryOptionCountry } from '../../model/query-option';

import type {
  CountryType,
  CountryUpdateDto,
} from '../../model/types';

export const useCountryUpdate = () => {
  const mutation = useBaseUpdate<CountryUpdateDto & { marketId: string }, CountryType>({
    queryKey: [QueryOptionCountry.baseKey],
    mutationFn: QueryOptionCountry.put,
  });

  return {
    isPending: mutation.isPending,
    handleOnSubmit: mutation.handleOnSubmit,
  };
};