import useSWR from 'swr';
import { getApiUrl } from '../../config/config.service';
import { fetcher } from '../http-requests/fetcher';
import { CreateEncounterPayLoad, Encounter } from '../../models/encounter';

interface Config{
    method: string;
    body: string;
};

const getBaseUrl = () => {
    return getApiUrl() + `/encounters`;
};

export const useCreateEncounter = (payload: CreateEncounterPayLoad) => {
  const url = getBaseUrl();
  const config: Config = {
    method: 'POST',
    body: JSON.stringify(payload),
  };
  const { data, error, isLoading } = useSWR([url, (url: string)=>fetcher(url,config)]);

  const respObj = {
    encounter: data as Encounter,
    error: error,
    isLoading,
    isError: error ? true : false,
  };

  return respObj;
};
