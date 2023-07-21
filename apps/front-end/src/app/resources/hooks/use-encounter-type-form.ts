import useSWR from 'swr';
import { getApiUrl } from '../../config/config.service';
import { Form } from '../../models/form';
import { fetcher } from '../http-requests/fetcher';

const getBaseUrl = () => {
  return getApiUrl() + `/form/encounter-type`;
};

export const useEncounterTypeForm = (encounterTypeUuid: string) => {
  const url = getBaseUrl() + `/${encounterTypeUuid}`;

  const { data, error, isLoading } = useSWR(url, fetcher);

  const respObj = {
    form: data as Form,
    error: error,
    isLoading,
    isError: error ? true : false,
  };

  return respObj;
};
