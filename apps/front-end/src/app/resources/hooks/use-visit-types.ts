import useSWR from 'swr';
import { getApiUrl } from '../../config/config.service';
import { fetcher } from '../http-requests/fetcher';
import { VisitType } from '../../models/visit-types';

const getBaseUrl = () => {
  return getApiUrl() + `/visit-types`;
};

export const useVisitTypes = () => {
  const url = getBaseUrl();

  const { data, error, isLoading } = useSWR(url, fetcher);

  const respObj = {
    visitTypes: data as VisitType[],
    error: error,
    isLoading,
    isError: error ? true : false,
  };

  return respObj;
};
