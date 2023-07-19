import useSWR from 'swr';
import { getApiUrl } from '../../config/config.service';
import { EncounterType } from '../../models/encounter-type';
import { fetcher } from '../http-requests/fetcher';

const getBaseUrl = () => {
  return getApiUrl() + `/encounter-types`;
};

export const useEncounterTypes = () => {
  const url = getBaseUrl();

  const { data, error, isLoading } = useSWR(url, fetcher);

  const respObj = {
    encounterTypes: data as EncounterType[],
    error: error,
    isLoading,
    isError: error ? true : false,
  };

  return respObj;
};
