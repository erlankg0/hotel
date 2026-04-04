import { useQuery } from '@tanstack/react-query';

import { getMeApi } from '../api/session';

export const useSession = () => {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
  } = useQuery({
    queryKey: ['session'],
    queryFn: getMeApi,
    retry: false,
    staleTime: 1000 * 60 * 5,
    select: (response) => response.data,
  });
  return {
    data: data,
    isAuth: isSuccess && !!data,
    isLoading,
    isError,
  };
};