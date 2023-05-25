import { getApiUrl } from '../config/config.service';
import { customAxios } from './http-requests/custom-axios';

function getBaseUrl() {
  return getApiUrl() + `/visit-types`;
}

export const getProgramVisitTypes = async (programUuid: string) => {
  const url = getBaseUrl() + `/program?programUuid=${programUuid}`;
  const resp = await customAxios.get(url);
  return resp.data;
};
