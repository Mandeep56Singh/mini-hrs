import { getApiUrl } from '../config/config.service';
import { EncounterType } from '../models/encounter-type';
import { customAxios } from './http-requests/custom-axios';

function getBaseUrl() {
  return getApiUrl() + `/encounter-types`;
}

export const getEncounterTypes = async (): Promise<EncounterType[]> => {
  const url = getBaseUrl();
  const resp  = await customAxios.get(url);
  return resp.data;
};
