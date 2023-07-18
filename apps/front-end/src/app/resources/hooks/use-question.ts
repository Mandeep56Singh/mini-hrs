import useSWR from 'swr';
import { getApiUrl } from '../../config/config.service';
import { fetcher } from '../http-requests/fetcher';
import { Question } from '../../models/question';

const getBaseUrl = () => {
  return getApiUrl() + `/question`;
};

export const useQuestions = () => {
  const url = getBaseUrl();

  const { data, error, isLoading } = useSWR(url, fetcher);

  const respObj = {
    questions: data as Question[],
    error: error,
    isLoading,
    isError: error ? true : false,
  };

  return respObj;
};
