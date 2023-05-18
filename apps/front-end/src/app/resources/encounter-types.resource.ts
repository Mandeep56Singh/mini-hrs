import { getApiUrl } from '../config/config.service';
import { EncounterType } from '../models/encounter-type';

function getBaseUrl() {
  return getApiUrl() + `/encounter-types`;
}

export const getEncounterTypes = async (): Promise<EncounterType[]> => {
  const url = getBaseUrl();
  const response = await fetch(url);
  return response.json();
};
