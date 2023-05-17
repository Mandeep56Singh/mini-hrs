import { getApiUrl } from '../config/config.service';

function getBaseUrl() {
  return getApiUrl() + `/visit-types`;
}

export const getProgramVisitTypes = async (programUuid: string) => {
  const url = getBaseUrl() + `/program?programUuid=${programUuid}`;
  const response = await fetch(url);
  return response.json();
};
