import useSWR from 'swr';
import { getApiUrl } from '../../config/config.service';
import { Form } from '../../models/form';
import { fetcher } from '../http-requests/fetcher';

const getBaseUrl = () => {
  return getApiUrl() + `/form`;
};

export const useForm = () => {
  const url = getBaseUrl();

  const { data, error, isLoading } = useSWR(url, fetcher);

  const respObj = {
    forms: data as Form[],
    error: error,
    isLoading,
    isError: error ? true : false,
  };

  return respObj;
};
