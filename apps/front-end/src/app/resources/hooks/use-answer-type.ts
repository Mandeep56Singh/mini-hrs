import useSWR from 'swr';
import { getApiUrl } from '../../config/config.service';
import { fetcher } from '../http-requests/fetcher';
import { AnswerType } from '../../models/answer-type';

const getBaseUrl = () => {
  return getApiUrl() + `/answer-type`;
};

export const useAnswerTypes = () => {
  const url = getBaseUrl();

  const { data, error, isLoading } = useSWR(url, fetcher);

  const respObj = {
    answerTypes: data as AnswerType[],
    error: error,
    isLoading,
    isError: error ? true : false,
  };

  return respObj;
};
