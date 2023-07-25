import useSWR from 'swr';
import { getApiUrl } from '../../config/config.service';
import { DashboardStats } from '../../models/dashboard-stats';
import { fetcher } from '../http-requests/fetcher';

const getBaseUrl = () => {
  return getApiUrl() + `/patient-statistics`;
};

export const useDashboardStats = () => {
  const url = getBaseUrl();

  const { data, error, isLoading } = useSWR(url, fetcher);

  const respObj = {
    dashboardStats: data as DashboardStats,
    error: error,
    isLoading,
    isError: error ? true : false,
  };

  return respObj;
};
