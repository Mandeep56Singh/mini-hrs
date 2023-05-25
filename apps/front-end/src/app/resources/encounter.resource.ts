import { getApiUrl } from '../config/config.service';
import { CreateEncounterPayLoad, Encounter } from '../models/encounter';
import { customAxios } from './http-requests/custom-axios';

function getBaseUrl() {
  return getApiUrl() + `/encounters`;
}

export async function createEncounter(
  payload: CreateEncounterPayLoad
): Promise<Encounter> {
  const url = getBaseUrl();
  const resp = await customAxios.post(url,{
     ...payload
  });
  return resp.data;
}
