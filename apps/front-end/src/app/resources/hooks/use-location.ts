import useSWR from 'swr';
import { getApiUrl } from '../../config/config.service';
import { fetcher } from '../http-requests/fetcher';
import { Location } from '../../models/location';


const getBaseUrl = ()=>{
    return getApiUrl() + `/locations`;
};

 
export const useLocations = ()=>{

    const url = getBaseUrl();

    const { data, error, isLoading } = useSWR(url, fetcher);

    const respObj = {
        locations: data as Location[],
        error: error,
        isLoading,
        isError: error ? true : false
      };

    console.log({ respObj });

    return  respObj;

};
