import useSWR from 'swr';
import { getApiUrl } from '../../config/config.service';
import { fetcher } from '../http-requests/fetcher';
import { Program } from '../../models/programs';

const getBaseUrl = () => {
  return getApiUrl() + `/programs`;
};

export const usePrograms = () => {
  const url = getBaseUrl();

  const { data, error, isLoading } = useSWR(url, fetcher);

  const respObj = {
    programs: data as Program[],
    error: error,
    isLoading,
    isError: error ? true : false,
  };

  return respObj;
};
