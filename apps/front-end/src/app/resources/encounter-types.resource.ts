import { getApiUrl } from '../config/config.service';

function getBaseUrl() {
  return getApiUrl() + `/encounter-types`;
}

export const getEncounterTypes = async () => {
  const url = getBaseUrl();
  const response = await fetch(url);
  return response.json();
};
