import { useBaseCreate } from '@/shared/hooks/useBaseCreate';

import { QueryOptionCountry } from '../../model/query-option';

import type { CountryDto, CountryType } from '../../model/types';

export const useCountryCreate = () => {
  const mutation = useBaseCreate<CountryDto & { marketId: string }, CountryType>({
    queryKey: [QueryOptionCountry.baseKey],
    mutationFn: QueryOptionCountry.post,
  });

  async function handleOnSubmit(dto: CountryDto & { marketId: string }) {
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